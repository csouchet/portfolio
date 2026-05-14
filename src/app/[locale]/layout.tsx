import type { Metadata } from 'next';

import React from 'react';

import { notFound } from 'next/navigation';

import { Box } from '@mantine/core';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getSiteConfig } from '@/config/site';
import { siteSharedContent } from '@/content/shared/site';
import { getContent } from '@/lib/i18n';
import { LOCALES, Locale } from '@/types/i18n';

type Props = React.PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  const content = getContent(locale);

  return {
    metadataBase: new URL(getSiteConfig(locale).url),
    title: {
      default: siteSharedContent.name,
      template: `%s | ${siteSharedContent.name}`,
    },
    description: content.common.site.description,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;

  if (!LOCALES.includes(rawLocale as Locale)) {
    notFound();
  }

  return (
    <ThemeProvider>
      <Box
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />

        <Box component="main" style={{ flexGrow: 1 }}>
          {children}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
