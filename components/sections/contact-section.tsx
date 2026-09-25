"use client"

import { FormEvent, useState } from "react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

type ContactLeadPayload = {
  fullName: string
  email: string
  mobilePhone?: string
  company?: string
  inquiryType: string
  message: string
  smsConsent: boolean
}

export function ContactSection() {
  const [smsConsent, setSmsConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)
    setSubmitSuccess(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload: ContactLeadPayload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      mobilePhone: String(formData.get("mobilePhone") ?? "").trim() || undefined,
      company: String(formData.get("company") ?? "").trim() || undefined,
      inquiryType: String(formData.get("inquiryType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      smsConsent,
    }

    if (!payload.fullName || !payload.email || !payload.inquiryType || !payload.message) {
      setSubmitError("Please complete the required fields before submitting.")
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => null)) as { error?: string } | null
        setSubmitError(responseBody?.error ?? "Unable to send your inquiry right now. Please try again.")
        return
      }

      form.reset()
      setSmsConsent(false)
      setSubmitSuccess("Thanks, your inquiry was received. We will reach out soon.")
    } catch {
      setSubmitError("Unable to send your inquiry right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Start a Conversation</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">Tell us what you are building, and where IVT Media Group can help.</p>
        </div>
        <form className="rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6 md:p-8 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="grid gap-2 text-sm text-zinc-400">Full Name *<input required name="fullName" className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-500" /></label>
            <label className="grid gap-2 text-sm text-zinc-400">Email Address *<input required type="email" name="email" className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-500" /></label>
            <label className="grid gap-2 text-sm text-zinc-400">Mobile Phone<input type="tel" name="mobilePhone" className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-500" /></label>
            <label className="grid gap-2 text-sm text-zinc-400">Company / Organization<input name="company" className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-500" /></label>
          </div>
          <label className="grid gap-2 text-sm text-zinc-400">Inquiry Type *<select required name="inquiryType" defaultValue="" className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-500"><option value="" disabled>Select an inquiry type</option><option>Media & Brand</option><option>Technology</option><option>Automation</option><option>Venture Development</option><option>Iron Vault</option><option>General Inquiry</option></select></label>
          <label className="grid gap-2 text-sm text-zinc-400">Message *<textarea required name="message" rows={5} className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-500" /></label>
          <label className="flex items-start gap-3 text-sm text-zinc-500"><input type="checkbox" checked={smsConsent} onChange={(event) => setSmsConsent(event.target.checked)} name="smsConsent" className="mt-1 accent-zinc-200" /><span>I agree to receive SMS messages from IVT Media Group related to my inquiry, requested services, appointments, account activity, and relevant updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.<span className="block mt-2"><a href="/privacy" className="text-zinc-300 underline">Privacy Policy</a><span className="mx-2">·</span><a href="/terms" className="text-zinc-300 underline">Terms & Conditions</a></span></span></label>
          {submitError ? <p className="text-sm text-red-400">{submitError}</p> : null}
          {submitSuccess ? <p className="text-sm text-emerald-400">{submitSuccess}</p> : null}
          <div><LiquidCtaButton>{isSubmitting ? "Sending..." : "Send Inquiry"}</LiquidCtaButton></div>
        </form>
      </div>
    </section>
  )
}

export type ContactFormData = { smsConsent: boolean; submittedAt?: string }
