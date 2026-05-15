import { Metadata } from 'next';

import { AboutClient } from '@/components/about/AboutClient';
import { getContent } from '@/lib/i18n';
import { generateSeoMetadata } from '@/lib/seo';
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const content = getContent(locale).about;
  const common = getContent(locale).common;

  return generateSeoMetadata({
    title: common.navigation.labels.about,
    description: content.hero.description,
    locale,
    path: '/about',
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).about;

  return <AboutClient content={content} />;
}
