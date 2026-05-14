import { Metadata } from 'next';

import { ContactClient } from '@/components/contact/ContactClient';
import { getContent } from '@/lib/i18n';
import { generateSeoMetadata } from '@/lib/seo';
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale).contact.hero;

  return generateSeoMetadata({
    title: content.title,
    description: content.subtitle,
    locale,
    path: '/contact',
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).contact;

  return <ContactClient content={content} />;
}
