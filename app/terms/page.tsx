import Link from "next/link"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "Read IVT MEDIA GROUP website and SMS terms, including communication preferences, consent, and support details.",
  pathname: "/terms",
})

export default function TermsPage() {
  return <main className="min-h-screen bg-zinc-950 px-6 py-32 text-zinc-300"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ivtmediagroup.com/terms#webpage",
    url: "https://ivtmediagroup.com/terms",
    name: "Terms and Conditions | IVT MEDIA GROUP",
    description: "Read IVT MEDIA GROUP website and SMS terms, including communication preferences, consent, and support details.",
    isPartOf: {
      "@id": "https://ivtmediagroup.com#website",
    },
    inLanguage: "en-US",
  }) }} /><article className="max-w-3xl mx-auto"><Link href="/" className="text-zinc-400 hover:text-zinc-100">IVT Media Group</Link><h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-10 mb-8">Terms &amp; Conditions</h1><div className="grid gap-6 leading-relaxed [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-100 [&_p]:text-zinc-400"><p>These terms describe general use of the IVT Media Group website and communications. Specific services may be governed by separate written agreements.</p><h2>SMS Messaging Terms</h2><p>IVT Media Group SMS participation is optional. Messages may relate to inquiries, requested services, appointments, account activity, and relevant updates. Message frequency varies and message and data rates may apply.</p><p>Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase. Carriers are not liable for delayed or undelivered messages.</p><p>See our <Link href="/privacy" className="text-zinc-300 underline">Privacy Policy</Link>. For support, call IVT Media Group at 888-368-2502.</p></div></article></main>
}
