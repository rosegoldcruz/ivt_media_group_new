import { NextResponse } from "next/server"

type LeadPayload = {
  fullName?: string
  email?: string
  mobilePhone?: string
  company?: string
  inquiryType?: string
  message?: string
  smsConsent?: boolean
}

function json(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status })
}

type GhlContactResponse = {
  contact?: {
    id?: string
  }
}

async function ghlRequest<T>(
  path: string,
  options: {
    apiKey: string
    locationId: string
    method?: "GET" | "POST" | "PUT" | "DELETE"
    body?: unknown
  },
) {
  const response = await fetch(`https://services.leadconnectorhq.com${path}`, {
    method: options.method ?? "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      Version: "2021-07-28",
      LocationId: options.locationId,
      "Content-Type": "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(details.slice(0, 500) || `GHL request failed for ${path}`)
  }

  return (await response.json()) as T
}

export async function POST(request: Request) {
  const apiKey = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    return json(500, {
      error: "GoHighLevel is not fully configured.",
      required: ["GHL_API_KEY", "GHL_LOCATION_ID"],
    })
  }

  const pipelineId = process.env.GHL_PIPELINE_ID?.trim() || ""
  const pipelineStageId = process.env.GHL_PIPELINE_STAGE_ID?.trim() || ""
  const opportunityStatus = process.env.GHL_OPPORTUNITY_STATUS?.trim() || "open"

  let payload: LeadPayload
  try {
    payload = (await request.json()) as LeadPayload
  } catch {
    return json(400, { error: "Invalid request body." })
  }

  const fullName = payload.fullName?.trim()
  const email = payload.email?.trim()
  const inquiryType = payload.inquiryType?.trim()
  const message = payload.message?.trim()

  if (!fullName || !email || !inquiryType || !message) {
    return json(400, {
      error: "Missing required lead fields.",
    })
  }

  const parts = fullName.split(" ").filter(Boolean)
  const firstName = parts[0] ?? ""
  const lastName = parts.slice(1).join(" ")

  const leadRecord = {
    source: "ivtmediagroup.com",
    submittedAt: new Date().toISOString(),
    firstName,
    lastName,
    fullName,
    email,
    phone: payload.mobilePhone?.trim() || "",
    companyName: payload.company?.trim() || "",
    inquiryType,
    message,
    smsConsent: Boolean(payload.smsConsent),
    pageUrl: "https://ivtmediagroup.com/#contact",
    tags: ["Website Lead", "IVT Media Group"],
  }

  try {
    const contactPayload = {
      firstName,
      lastName,
      name: fullName,
      email,
      phone: payload.mobilePhone?.trim() || "",
      companyName: payload.company?.trim() || "",
      source: "ivtmediagroup.com",
      tags: ["Website Lead", "IVT Media Group", `Inquiry: ${inquiryType}`],
      website: "https://ivtmediagroup.com",
    }

    const contactResult = await ghlRequest<GhlContactResponse>("/contacts/", {
      apiKey,
      locationId,
      method: "POST",
      body: contactPayload,
    })

    const contactId = contactResult.contact?.id

    if (contactId && pipelineId && pipelineStageId) {
      await ghlRequest("/opportunities/", {
        apiKey,
        locationId,
        method: "POST",
        body: {
          contactId,
          locationId,
          pipelineId,
          pipelineStageId,
          status: opportunityStatus,
          name: `${inquiryType} - ${fullName}`,
          source: "ivtmediagroup.com",
          notes: message,
        },
      })
    }

    return json(200, {
      ok: true,
      message: "Lead synced to GoHighLevel.",
      opportunityCreated: Boolean(contactId && pipelineId && pipelineStageId),
      missingForOpportunity:
        contactId && (!pipelineId || !pipelineStageId)
          ? [!pipelineId ? "GHL_PIPELINE_ID" : null, !pipelineStageId ? "GHL_PIPELINE_STAGE_ID" : null].filter(Boolean)
          : [],
    })
  } catch (error) {
    return json(502, {
      error: "Unable to sync to GoHighLevel.",
      details: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
