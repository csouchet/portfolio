import { Metadata } from 'next';

import { SkillsClient } from '@/components/skills/SkillsClient';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/skills',
    languages: {
      fr: '/fr/skills',
      en: '/en/skills',
    },
  },
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).skills;

  return <SkillsClient content={content} />;
}
