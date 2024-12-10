import { NextResponse, type NextRequest } from "next/server";
import { i18n, defaultLocale } from "@/i18n-config";

export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl;

  // Check if the pathname starts with a locale
  const localeInPath = /^\/([^/]+)(\/|$)/.exec(pathname)?.[1];

  if (localeInPath) {
    // Verify if the locale is valid
    const isValidLocale = i18n.locales.includes(localeInPath);

    if (!isValidLocale) {
      // Remove the invalid locale and redirect to the default locale
      const newPathname = pathname.replace(`/${localeInPath}`, "");
      return NextResponse.redirect(
        new URL(
          `/${defaultLocale}${newPathname}${request.nextUrl.search}`,
          request.url
        )
      );
    }

    // If the locale is valid, do nothing
    return;
  }

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
