import { Metadata } from 'next';

import { getSiteConfig } from '@/config/site';
import { Locale } from '@/types/i18n';

type SeoProps = {
  title: string;
  description: string;
  locale: Locale;
  path: string;
};

// Utilitaire pour nettoyer les balises (ex: <h> ou <b>) dans les titres
export function stripHtmlTags(text: string): string {
  return text.replace(/<[^>]*>?/gm, '');
}

export function generateSeoMetadata({
  title,
  description,
  locale,
  path,
}: SeoProps): Metadata {
  const siteConfig = getSiteConfig(locale);

  const pageUrl = `${siteConfig.url}/${locale}${path}`;
  const frUrl = `${siteConfig.url}/fr${path}`;
  const enUrl = `${siteConfig.url}/en${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        fr: frUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
    },
    twitter: {
      title,
      description,
    },
  };
}
