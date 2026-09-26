import Link from "next/link"
import type React from "react"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

const lastUpdated = "September 26, 2026"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Read IVT Media Group LLC website, communication, SMS, and service terms, including opt-out instructions and disclaimers.",
  pathname: "/terms",
})

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ivtmediagroup.com/terms#webpage",
    url: "https://ivtmediagroup.com/terms",
    name: "Terms of Service | IVT Media Group LLC",
    description:
      "Read IVT Media Group LLC website, communication, SMS, and service terms, including opt-out instructions and disclaimers.",
    isPartOf: {
      "@id": "https://ivtmediagroup.com#website",
    },
    inLanguage: "en-US",
  }

  return (
    <LegalPage title="Terms of Service" eyebrow="IVT Media Group LLC" lastUpdated={lastUpdated}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the IVT Media Group LLC website, forms,
        content, communications, and related online services. By using this website or submitting information through a
        form, you agree to these Terms.
      </p>

      <h2>Company Information</h2>
      <p>IVT Media Group LLC operates this website and related communication channels. For support, call <a href="tel:8883682502">888-368-2502</a>.</p>

      <h2>Website Use</h2>
      <p>You may use this website only for lawful purposes and in accordance with these Terms. You agree not to interfere with the operation of the site, attempt unauthorized access, submit false or misleading information, abuse forms or communication systems, upload malicious code, scrape content without permission, or use the site in a way that violates applicable law or the rights of others.</p>

      <h2>Informational Content Only</h2>
      <p>Website content is provided for general informational, educational, media, technology, and business communication purposes. Content does not constitute legal, financial, tax, investment, cybersecurity, or professional advice. You are responsible for your own decisions and should consult qualified professionals where appropriate.</p>

      <h2>No Investment or Earnings Guarantee</h2>
      <p>Any references to digital finance, blockchain, AI, automation, ventures, media projects, or related ecosystems are informational and do not guarantee results, earnings, investment performance, token value, business outcomes, or financial returns. Past examples, if any, are not guarantees of future outcomes.</p>

      <h2>Form Submissions</h2>
      <p>When you submit a form, you represent that the information you provide is accurate and that you are authorized to provide it. Submitting a form does not create a client relationship, partnership, employment relationship, joint venture, fiduciary duty, or binding service agreement unless separately agreed in writing by IVT Media Group LLC.</p>

      <h2>SMS Messaging Terms</h2>
      <p>By checking an SMS consent box and submitting a form, you consent to receive text messages from IVT Media Group LLC at the phone number provided. Message frequency varies. Message and data rates may apply. Consent is not a condition of purchase.</p>
      <p>Transactional or non-marketing messages may include appointment reminders, account notifications, service updates, responses to inquiries, and related operational communications.</p>
      <p>Marketing or promotional messages may include offers, discounts, product updates, event announcements, educational resources, and promotional content, but only where marketing consent is provided.</p>
      <p>You may opt out at any time by replying STOP. You may request help by replying HELP. Carriers are not liable for delayed or undelivered messages. Message delivery is not guaranteed and may depend on your carrier, device, network coverage, and other factors outside our control.</p>

      <h2>Privacy</h2>
      <p>Your use of this website and our communications is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>, which explains how we collect, use, and share information, including SMS consent records and mobile information.</p>

      <h2>Intellectual Property</h2>
      <p>The website, branding, text, graphics, designs, layouts, logos, media, code, and other content are owned by or licensed to IVT Media Group LLC and are protected by applicable intellectual property laws. You may not copy, modify, distribute, sell, or exploit our content without written permission, except as allowed by law.</p>

      <h2>Third-Party Services and Links</h2>
      <p>The website may use or link to third-party services, including form providers, analytics providers, hosting providers, communication platforms, payment processors, or external websites. We are not responsible for third-party content, terms, policies, security, availability, or practices.</p>

      <h2>No Warranties</h2>
      <p>The website and related content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by law, IVT Media Group LLC disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, and uninterrupted operation.</p>

      <h2>Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, IVT Media Group LLC and its owners, officers, employees, contractors, affiliates, and service providers will not be liable for indirect, incidental, consequential, special, exemplary, punitive, or similar damages, including lost profits, lost revenue, loss of data, business interruption, or loss of goodwill arising from or related to your use of the website or communications.</p>

      <h2>Indemnification</h2>
      <p>You agree to defend, indemnify, and hold harmless IVT Media Group LLC and its owners, officers, employees, contractors, affiliates, and service providers from claims, damages, liabilities, losses, costs, and expenses, including reasonable attorneys&apos; fees, arising from your misuse of the website, violation of these Terms, violation of law, or infringement of rights.</p>

      <h2>Changes to the Website or Terms</h2>
      <p>We may update, suspend, discontinue, or modify any part of the website at any time. We may update these Terms by posting a revised version on this page. Continued use of the website after changes are posted means you accept the updated Terms.</p>

      <h2>Governing Law</h2>
      <p>These Terms are governed by applicable laws of the United States and the laws applicable to IVT Media Group LLC, without regard to conflict of law principles, unless a different rule is required by applicable law.</p>

      <h2>Contact</h2>
      <p>For questions about these Terms or SMS messaging support, call IVT Media Group LLC at <a href="tel:8883682502">888-368-2502</a>.</p>
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
