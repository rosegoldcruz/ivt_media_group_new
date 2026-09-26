import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FooterSection } from "@/components/sections/footer-section"
import type { Metadata } from "next"
import { absoluteUrl, pageMetadata, seoConfig } from "@/lib/seo"

export const metadata: Metadata = {
  ...pageMetadata({
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    pathname: "/",
  }),
  title: {
    absolute: seoConfig.defaultTitle,
  },
}

export default function Home() {
  const organizationId = `${seoConfig.siteUrl}#organization`
  const websiteId = `${seoConfig.siteUrl}#website`

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    logo: absoluteUrl("/apple-icon.png"),
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-US",
  }

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${seoConfig.siteUrl}/#webpage`,
    url: seoConfig.siteUrl,
    name: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": organizationId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(seoConfig.defaultOgImage),
    },
    inLanguage: "en-US",
  }

  return (
    <main className="min-h-screen bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  )
}
