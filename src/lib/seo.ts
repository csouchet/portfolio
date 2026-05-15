import { Metadata } from 'next';

import { getSiteConfig } from '@/config/site';
import { Locale } from '@/types/i18n';

type SeoProps = {
  title: string;
  description: string;
  locale: Locale;
  path: string;
};

/**
 * Strips HTML tags from a string for SEO metadata.
 * Useful for converting titles like “I develop <h>platforms</h>” into plain text.
 */
function stripHtmlTags(text: string): string {
  if (!text) return '';
  return text.replace(/<[^>]*>?/gm, '');
}

/**
 * Generates SEO metadata for a specific page.
 * Next.js will automatically merge these values with the layout's global settings.
 */
export function generateSeoMetadata({
  title,
  description,
  locale,
  path,
}: SeoProps): Metadata {
  const siteConfig = getSiteConfig(locale);

  const cleanTitle = stripHtmlTags(title);
  const cleanDescription = stripHtmlTags(description);

  const pageUrl = `${siteConfig.url}/${locale}${path}`;

  return {
    title: cleanTitle,
    description: cleanDescription,

    alternates: {
      canonical: pageUrl,
      languages: {
        fr: `${siteConfig.url}/fr${path}`,
        en: `${siteConfig.url}/en${path}`,
      },
    },

    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      title: cleanTitle,
      description: cleanDescription,
      url: pageUrl,
      siteName: siteConfig.name,
    },

    twitter: {
      title: cleanTitle,
      description: cleanDescription,
    },
  };
}
