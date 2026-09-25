import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { absoluteUrl, isProductionDeployment, seoConfig } from "@/lib/seo"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: absoluteUrl("/"),
    siteName: seoConfig.siteName,
    type: "website",
    locale: seoConfig.locale,
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
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
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
  icons: {
    icon: "/ivt-media-group-logo-429.png",
    shortcut: "/ivt-media-group-logo-429.png",
    apple: "/ivt-media-group-logo-429.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
