import fs from "node:fs/promises"
import path from "node:path"
import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"

type SitemapRoute = {
  pathname: string
  sourceFile: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

const indexableRoutes: SitemapRoute[] = [
  {
    pathname: "/",
    sourceFile: "app/page.tsx",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    pathname: "/privacy",
    sourceFile: "app/privacy/page.tsx",
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    pathname: "/terms",
    sourceFile: "app/terms/page.tsx",
    changeFrequency: "yearly",
    priority: 0.4,
  },
]

async function getLastModifiedFromSource(sourceFile: string) {
  try {
    const fullPath = path.join(process.cwd(), sourceFile)
    const stats = await fs.stat(fullPath)
    return stats.mtime
  } catch {
    return undefined
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return Promise.all(
    indexableRoutes.map(async (route) => ({
      url: absoluteUrl(route.pathname),
      lastModified: await getLastModifiedFromSource(route.sourceFile),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  )
}
