import type { Metadata } from "next"

export const seoConfig = {
  siteName: "IVT MEDIA GROUP",
  siteUrl: "https://ivtmediagroup.com",
  defaultTitle: "IVT MEDIA GROUP | Digital Finance Education & IV-SOL",
  titleTemplate: "%s | IVT MEDIA GROUP",
  defaultDescription:
    "Learn digital finance, blockchain, AI, cybersecurity, and the IV-SOL ecosystem through Vaulted Academy. Education before speculation.",
  defaultOgImage: "/opengraph-image",
  twitterCard: "summary_large_image" as const,
  locale: "en_US",
}

const deploymentEnv =
  process.env.VERCEL_ENV ??
  process.env.NEXT_PUBLIC_VERCEL_ENV ??
  process.env.SITE_ENV ??
  process.env.NEXT_PUBLIC_SITE_ENV ??
  "development"

export const isProductionDeployment = deploymentEnv === "production"

export function absoluteUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  return new URL(normalizedPath, seoConfig.siteUrl).toString()
}

export function pageMetadata({
  title,
  description,
  pathname,
  type = "website",
}: {
  title: string
  description: string
  pathname: string
  type?: "website" | "article"
}): Metadata {
  const canonical = absoluteUrl(pathname)

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type,
      images: [
        {
          url: absoluteUrl(seoConfig.defaultOgImage),
          width: 1200,
          height: 630,
          alt: "IVT MEDIA GROUP - Education Before Speculation",
        },
      ],
    },
    twitter: {
      card: seoConfig.twitterCard,
      title,
      description,
      images: [absoluteUrl(seoConfig.defaultOgImage)],
    },
    robots: isProductionDeployment
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: false,
          nocache: true,
        },
  }
}
