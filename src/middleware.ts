import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_LOCALE, LOCALES } from './types/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isMissingLocale = LOCALES.every(
    locale => !pathname.startsWith(`/${locale}`),
  );

  if (isMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
