import { Metadata } from 'next';

import { AboutClient } from '@/components/about/AboutClient';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/about',
    languages: {
      fr: '/fr/about',
      en: '/en/about',
    },
  },
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).about;

  return <AboutClient content={content} />;
}
