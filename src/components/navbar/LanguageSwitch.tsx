'use client';

import { useRouter, usePathname } from 'next/navigation';

import { SegmentedControl } from '@mantine/core';

import { LOCALES, Locale } from '@/types/i18n';

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const pathLocale = pathname.split('/')[1] as Locale;
  const isLocaleInUrl = LOCALES.includes(pathLocale);

  const currentLocale = isLocaleInUrl ? pathLocale : 'fr';

  const handleLanguageChange = (newLocale: string) => {
    if (isLocaleInUrl) {
      const segments = pathname.split('/');
      segments[1] = newLocale;
      router.push(segments.join('/') || `/${newLocale}`);
    } else {
      const newPath =
        pathname === '/' ? `/${newLocale}` : `/${newLocale}${pathname}`;
      router.push(newPath);
    }
  };

  return (
    <SegmentedControl
      value={currentLocale}
      onChange={handleLanguageChange}
      data={LOCALES.map(loc => ({
        label: loc.toUpperCase(),
        value: loc,
      }))}
    />
  );
}
