import { NextRequest, NextResponse } from "next/server";

const localeCookie = "qrfree-locale";

function withLocale(request: NextRequest, locale: "vi" | "en") {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-qrfree-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

function redirectToLocale(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  const response = NextResponse.redirect(url);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");

  if (isEnglishPath) {
    const response = withLocale(request, "en");
    response.cookies.set(localeCookie, "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return response;
  }

  const preference = request.cookies.get(localeCookie)?.value;
  if (preference === "vi") return withLocale(request, "vi");
  if (preference === "en") {
    return redirectToLocale(request, `/en${pathname === "/" ? "" : pathname}`);
  }

  // Let search crawlers index the Vietnamese default and discover both
  // language versions through the sitemap and hreflang links.
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
  if (/googlebot|bingbot|yandexbot|baiduspider|duckduckbot|slurp/.test(userAgent)) {
    return withLocale(request, "vi");
  }

  const country = (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    ""
  ).toUpperCase();

  if (country) {
    if (country !== "VN") return redirectToLocale(request, `/en${pathname === "/" ? "" : pathname}`);
    return withLocale(request, "vi");
  }

  const hostname = request.nextUrl.hostname.toLowerCase();
  if (process.env.NODE_ENV !== "production" || hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1") {
    return withLocale(request, "vi");
  }

  return redirectToLocale(request, `/en${pathname === "/" ? "" : pathname}`);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
