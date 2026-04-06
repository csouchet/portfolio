import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteConfig } from '@/config/site';
import { siteSharedContent } from '@/content/shared/site';
import { getContent } from '@/lib/i18n';
import { theme } from '@/theme';
import { LOCALES, Locale } from '@/types/i18n';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
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
  const { locale } = await params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>

      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
