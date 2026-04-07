import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_LOCALE, LOCALES } from './types/i18n';

function isLocale(value: string): value is (typeof LOCALES)[number] {
  return LOCALES.includes(value as (typeof LOCALES)[number]);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isMissingLocale = LOCALES.every(
    locale => !pathname.startsWith(`/${locale}`),
  );

  if (isMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  const segment = pathname.split('/')[1];
  const locale = isLocale(segment) ? segment : DEFAULT_LOCALE;

  const response = NextResponse.next();
  response.headers.set('x-locale', locale);

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
