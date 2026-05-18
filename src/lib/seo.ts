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

  // 🚀 Ensure path starts with a slash and safely remove any accidental trailing slash
  let cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // 🚀 If path is root ('/'), prevent generating '/fr/' and force '/fr'
  const localePath = cleanPath === '/' ? '' : cleanPath;
  const pageUrl = `${siteConfig.url}/${locale}${localePath}`;

  return {
    title: cleanTitle,
    description: cleanDescription,

    alternates: {
      canonical: pageUrl,
      languages: {
        fr: `${siteConfig.url}/fr${localePath}`,
        en: `${siteConfig.url}/en${localePath}`,
        // 🚀 Add x-default pointing to your primary language (French)
        'x-default': `${siteConfig.url}/fr${localePath}`,
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
