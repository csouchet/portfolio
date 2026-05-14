import type { Metadata } from 'next';

import React from 'react';

import { notFound } from 'next/navigation';

import { Box } from '@mantine/core';

import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getSiteConfig } from '@/config/site';
import { LOCALES, Locale } from '@/types/i18n';

type Props = React.PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  const siteConfig = getSiteConfig(locale);

  return {
    metadataBase: new URL(siteConfig.url),

    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@CelineS',
    },
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
        <Navbar />

        <Box component="main" style={{ flexGrow: 1 }}>
          {children}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
