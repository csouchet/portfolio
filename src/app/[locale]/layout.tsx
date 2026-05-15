import type { Metadata } from 'next';

import React from 'react';

import { notFound } from 'next/navigation';
import Script from 'next/script';

import { Box } from '@mantine/core';

import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { StructuredData } from '@/components/seo/StructuredData'; // <-- Nouvel import
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

  const verificationId = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(siteConfig.url),

    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    verification: verificationId
      ? {
          google: verificationId,
        }
      : undefined,

    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },

    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      creator: '@CelineS',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;

  if (!LOCALES.includes(rawLocale as Locale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <ThemeProvider>
      <StructuredData locale={locale} />

      <Box
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Navbar />

        <Box component="main" style={{ flexGrow: 1 }}>
          {children}
        </Box>

        <Footer />
      </Box>

      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
    </ThemeProvider>
  );
}
