import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { isProductionDeployment } from "@/lib/seo"

export function proxy(request: NextRequest) {
  const { nextUrl } = request
  const pathname = nextUrl.pathname

  const loweredPathname = pathname.toLowerCase()
  const shouldLowercase = pathname !== loweredPathname
  const shouldRemoveTrailingSlash = pathname !== "/" && pathname.endsWith("/")

  if (shouldLowercase || shouldRemoveTrailingSlash) {
    const redirectUrl = nextUrl.clone()
    redirectUrl.pathname = shouldRemoveTrailingSlash ? loweredPathname.replace(/\/+$/, "") : loweredPathname
    return NextResponse.redirect(redirectUrl, 308)
  }

  const response = NextResponse.next()

  if (!isProductionDeployment) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map)$).*)"],
}
