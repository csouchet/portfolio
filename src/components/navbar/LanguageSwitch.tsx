'use client';

import { useRouter, usePathname } from 'next/navigation';

import { SegmentedControl } from '@mantine/core';

import { LOCALES, Locale } from '@/types/i18n';

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] as Locale;

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/') || `/${newLocale}`);
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
