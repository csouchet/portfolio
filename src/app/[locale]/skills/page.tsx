import { Metadata } from 'next';

import { SkillsClient } from '@/components/skills/SkillsClient';
import { getContent } from '@/lib/i18n';
import { generateSeoMetadata } from '@/lib/seo';
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale).skills.hero;

  return generateSeoMetadata({
    title: content.title,
    description: content.description,
    locale,
    path: '/skills',
  });
}

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).skills;

  return <SkillsClient content={content} />;
}
