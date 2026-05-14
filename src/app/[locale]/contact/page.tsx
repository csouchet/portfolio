import { Metadata } from 'next';

import { ContactClient } from '@/components/contact/ContactClient';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/contact',
    languages: {
      fr: '/fr/contact',
      en: '/en/contact',
    },
  },
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).contact;

  return <ContactClient content={content} />;
}
