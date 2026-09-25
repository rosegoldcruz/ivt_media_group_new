import Link from "next/link"
import type React from "react"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Review how IVT MEDIA GROUP handles inquiry and communication data, including SMS consent and support practices.",
  pathname: "/privacy",
})

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ivtmediagroup.com/privacy#webpage",
    url: "https://ivtmediagroup.com/privacy",
    name: "Privacy Policy | IVT MEDIA GROUP",
    description: "Review how IVT MEDIA GROUP handles inquiry and communication data, including SMS consent and support practices.",
    isPartOf: {
      "@id": "https://ivtmediagroup.com#website",
    },
    inLanguage: "en-US",
  }) }} /><p>IVT Media Group LLC respects your privacy. This policy describes how information voluntarily provided through this website may be used to respond to inquiries and operate our services.</p><h2>Information We Collect</h2><p>We may collect contact details and inquiry information you choose to submit, including your name, email address, mobile phone, company, inquiry type, and message.</p><h2>How We Use Information</h2><p>We use submitted information to respond to requests, provide requested services, maintain communications, and improve our operations. We do not claim practices beyond those supported by this website and its future connected services.</p><h2>SMS &amp; Mobile Information</h2><p>Mobile numbers voluntarily provided for SMS communications are used for requested communications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance.</p><p>Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with third parties except service providers supporting delivery of the messaging program as necessary to provide the requested communications.</p><h2>Contact</h2><p>For questions about this policy, contact IVT Media Group at 888-368-2502.</p></LegalPage>
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) { return <main className="min-h-screen bg-zinc-950 px-6 py-32 text-zinc-300"><article className="max-w-3xl mx-auto"><Link href="/" className="text-zinc-400 hover:text-zinc-100">IVT Media Group</Link><h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-10 mb-8">{title}</h1><div className="grid gap-6 leading-relaxed [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-100 [&_p]:text-zinc-400">{children}</div></article></main> }
