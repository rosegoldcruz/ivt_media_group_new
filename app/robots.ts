import type { MetadataRoute } from "next"
import { isProductionDeployment, seoConfig } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    }
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin",
          "/dashboard",
          "/auth/",
          "/callback",
          "/private/",
          "/internal/",
          "/test/",
          "/dev/",
          "/preview/",
          "/staging/",
        ],
      },
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
    host: seoConfig.siteUrl,
  }
}
