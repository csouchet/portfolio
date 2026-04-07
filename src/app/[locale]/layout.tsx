import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { MantineProvider } from '@mantine/core';

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
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </MantineProvider>
  );
}
