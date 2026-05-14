import { siteSharedContent } from '@/content/shared/site';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export function getSiteConfig(locale: Locale) {
  const content = getContent(locale);

  return {
    name: siteSharedContent.name,
    title: content.common.site.title,
    description: content.common.site.description,
    url: 'https://ton-site.com',
    ogImage: '/og.png',

    links: {
      linkedin: 'https://www.linkedin.com/in/celinesouchet/',
      github: 'https://github.com/csouchet',
    },
  };
}
