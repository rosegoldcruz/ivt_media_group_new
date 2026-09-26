import Link from "next/link"
import type React from "react"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

const lastUpdated = "September 26, 2026"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Review how IVT Media Group LLC handles website, inquiry, brand, media, AI, automation, and SMS consent information.",
  pathname: "/privacy",
})

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ivtmediagroup.com/privacy#webpage",
    url: "https://ivtmediagroup.com/privacy",
    name: "Privacy Policy | IVT Media Group LLC",
    description:
      "Review how IVT Media Group LLC handles website, inquiry, brand, media, AI, automation, and SMS consent information.",
    isPartOf: {
      "@id": "https://ivtmediagroup.com#website",
    },
    inLanguage: "en-US",
  }

  return (
    <LegalPage title="Privacy Policy" eyebrow="IVT Media Group LLC" lastUpdated={lastUpdated}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <p>
        This Privacy Policy explains how IVT Media Group LLC (&quot;IVT Media Group,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
        uses, discloses, and protects information submitted through this website, our contact forms, SMS opt-in forms,
        client inquiries, media and brand projects, AI and automation services, technology workflows, and related
        communications.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect information you choose to provide, including your first name, last name, email address, phone number, business or brand name, website URL, form responses, inquiry details, project goals, budget or timeline details, communication preferences, and any other information you submit to us.</p>
      <p>When you discuss or engage us for media, technology, AI, automation, creative, consulting, or brand services, we may collect business information needed to evaluate or perform the work. This may include brand assets, campaign details, content drafts, audience or customer segments, workflow descriptions, tool stacks, CRM or automation requirements, integrations, prompt or agent requirements, analytics, meeting notes, files, credentials supplied through approved secure channels, and other project materials you provide.</p>
      <p>We may also collect technical information automatically, including IP address, browser type, device information, pages visited, referral source, approximate location derived from technical data, timestamps, cookies, analytics data, and similar usage information.</p>
      <p>For SMS and messaging compliance, we may maintain records of consent, opt-in source, opt-in date and time, phone number, message history, opt-out requests, HELP requests, delivery information, and related compliance records.</p>

      <h2>How We Use Information</h2>
      <p>We use information to respond to inquiries, provide requested information, evaluate potential projects, prepare proposals, operate and improve our website, manage business communications, schedule calls or follow-ups, deliver media, technology, AI, automation, brand, or consulting services, maintain records, prevent abuse, comply with legal obligations, and protect our rights.</p>
      <p>Project information may be used to design workflows, configure automations, create media or brand assets, build technology systems, test integrations, generate drafts, analyze performance, document requirements, support client delivery, and maintain internal quality control.</p>
      <p>If you expressly opt in to SMS communications, we may use your phone number to send transactional, informational, service-related, or promotional text messages based on the consent category you selected.</p>

      <h2>AI, Automation, and Technology Tools</h2>
      <p>We may use internal systems, third-party software, AI tools, automation platforms, CRM systems, analytics providers, hosting services, communication tools, and other technology vendors to operate our business and provide services. Information processed through these tools is used for business purposes such as project planning, content creation, automation setup, analysis, support, and service delivery.</p>
      <p>Do not submit confidential credentials, regulated data, sensitive personal information, health information, financial account information, government identification numbers, or information you are not authorized to share unless we have specifically agreed in writing to an approved handling process.</p>

      <h2>SMS, Text Messaging, and Mobile Information</h2>
      <p>By checking an SMS consent box and submitting a form, you authorize IVT Media Group LLC to send text messages to the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.</p>
      <p>Transactional or non-marketing messages may include appointment reminders, service updates, account notifications, responses to your inquiries, and related operational communications.</p>
      <p>Marketing or promotional messages may include offers, product updates, event announcements, discounts, educational resources, and promotional content, but only when you have provided applicable marketing consent.</p>
      <p>Mobile information will not be shared with third parties or affiliates for their marketing or promotional purposes. Text messaging originator opt-in data and consent records will not be shared with third parties except service providers and vendors that support delivery, compliance, security, analytics, or operation of the messaging program.</p>

      <h2>How We Share Information</h2>
      <p>We may share information with service providers that help us operate the website, manage forms, host data, process communications, deliver email or SMS messages, provide analytics, maintain security, support media or technology production, process files, operate AI or automation tools, or support business operations.</p>
      <p>We may disclose information if required by law, subpoena, court order, legal process, regulatory request, or to protect the rights, safety, property, or security of IVT Media Group, our users, or others.</p>
      <p>We may transfer information in connection with a business transaction, such as a merger, acquisition, financing, reorganization, sale of assets, or similar event, subject to appropriate safeguards where required by law.</p>

      <h2>No Sale of Personal Information</h2>
      <p>We do not sell personal information. We do not sell, rent, or share SMS opt-in data or mobile numbers for third-party marketing or promotional purposes.</p>

      <h2>Cookies and Analytics</h2>
      <p>We may use cookies, pixels, analytics tools, and similar technologies to operate the site, understand performance, measure traffic, improve user experience, and support security. You can control cookies through your browser settings, but disabling cookies may affect site functionality.</p>

      <h2>Data Retention</h2>
      <p>We retain information for as long as reasonably necessary to respond to inquiries, provide services, maintain business records, satisfy legal and compliance obligations, resolve disputes, enforce agreements, and preserve SMS consent records. Retention periods may vary based on the type of data and legal requirements.</p>

      <h2>Data Security</h2>
      <p>We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

      <h2>Your Choices and Rights</h2>
      <p>You may request access, correction, deletion, or limitation of personal information by contacting us. We may need to verify your identity before processing a request. Certain information may be retained where required or permitted by law.</p>
      <p>You may opt out of SMS messages at any time by replying STOP. You may request SMS assistance by replying HELP. You may also contact us at the phone number listed below.</p>

      <h2>Children&apos;s Privacy</h2>
      <p>Our website and services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child provided personal information, contact us so we can take appropriate action.</p>

      <h2>Third-Party Links and Services</h2>
      <p>Our website or forms may link to third-party websites or services. We are not responsible for the privacy practices, security, or content of third-party sites. Review their policies before submitting information.</p>

      <h2>United States Use</h2>
      <p>IVT Media Group is based in the United States. If you access the website from outside the United States, you understand that information may be processed in the United States or other locations where our service providers operate.</p>

      <h2>Policy Updates</h2>
      <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised last updated date. Continued use of the website after an update means the updated policy applies.</p>

      <h2>Contact</h2>
      <p>For privacy questions, requests, or SMS support, contact IVT Media Group LLC at <a href="tel:8883682502">888-368-2502</a>.</p>
    </LegalPage>
  )
}

function LegalPage({
  title,
  eyebrow,
  lastUpdated,
  children,
}: {
  title: string
  eyebrow: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-32 text-zinc-300">
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-zinc-400 hover:text-zinc-100">
          IVT Media Group
        </Link>
        <p className="mt-10 text-sm font-medium text-zinc-500 uppercase tracking-wider">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-4 mb-4">{title}</h1>
        <p className="mb-10 text-sm text-zinc-500">Last updated: {lastUpdated}</p>
        <div className="grid gap-6 leading-relaxed [&_a]:text-zinc-200 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-100 [&_h2]:mt-4 [&_p]:text-zinc-400">
          {children}
        </div>
      </article>
    </main>
  )
}
