'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Group, Button } from '@mantine/core';

import { LOCALES, Locale } from '@/types/i18n';

export function LanguageSwitch() {
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] as Locale;

  const getHref = (locale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  return (
    <Group gap="xs">
      {LOCALES.map(locale => (
        <Button
          key={locale}
          component={Link}
          href={getHref(locale)}
          variant={locale === currentLocale ? 'filled' : 'subtle'}
          size="xs"
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </Group>
  );
}
