import { siteSharedContent } from '@/content/shared/site';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export function getSiteConfig(locale: Locale) {
  const content = getContent(locale);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://celine-souchet.netlify.app';

  return {
    name: siteSharedContent.name,
    title: content.common.site.title,
    description: content.common.site.description,
    url: siteUrl,
    ogImage: '/og.png',

    links: {
      linkedin: 'https://www.linkedin.com/in/celinesouchet/',
      github: 'https://github.com/csouchet',
    },
  };
}
