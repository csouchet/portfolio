'use client';

import { useParams, usePathname } from 'next/navigation';

import { getContent } from '@/lib/i18n';
import { LOCALES, Locale } from '@/types/i18n';

export function useContent() {
  const params = useParams();
  const pathname = usePathname();

  const paramLocale = params?.locale as string;

  const pathLocale = pathname.split('/')[1];

  const rawLocale = paramLocale || pathLocale;
  const locale = (
    LOCALES.includes(rawLocale as Locale) ? rawLocale : 'fr'
  ) as Locale;

  return {
    locale,
    ...getContent(locale),
  };
}
