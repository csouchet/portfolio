// src/app/[locale]/about/page.tsx
import { Metadata } from 'next';

import { AboutClient } from '@/components/about/AboutClient';
import { getContent } from '@/lib/i18n';
import { generateSeoMetadata, stripHtmlTags } from '@/lib/seo'; // <-- Ajout de stripHtmlTags
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale).about.hero;

  return generateSeoMetadata({
    title: stripHtmlTags(content.title),
    description: content.description,
    locale,
    path: '/about',
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).about;

  return <AboutClient content={content} />;
}
