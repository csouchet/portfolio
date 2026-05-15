import { siteSharedContent } from '@/content/shared/site';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.DEPLOY_PRIME_URL) {
    return process.env.DEPLOY_PRIME_URL;
  }
  if (process.env.URL) {
    return process.env.URL;
  }
  return 'https://celine-souchet.netlify.app';
};

export function getSiteConfig(locale: Locale) {
  const content = getContent(locale);
  const siteUrl = getBaseUrl();

  return {
    name: siteSharedContent.name,
    title: content.common.site.title,
    description: content.common.site.description,
    url: siteUrl,

    links: {
      linkedin: 'https://www.linkedin.com/in/celinesouchet/',
      github: 'https://github.com/csouchet',
    },
  };
}
