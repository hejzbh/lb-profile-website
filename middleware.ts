import { NextResponse, type NextRequest } from "next/server";
import { i18n, defaultLocale } from "@/i18n-config";

export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl;

  const matchedLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Verify if the locale is valid
  if (matchedLocale) return;

  // If no locale is present, add the default locale
  return NextResponse.rewrite(
    new URL(
      `/${defaultLocale}${pathname}${request.nextUrl.search}`,
      request.url
    )
  );
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on the root (/) URL
    // '/'
  ],
};
