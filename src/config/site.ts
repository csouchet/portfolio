import { siteContent } from '@/content/fr/site';
import { siteSharedContent } from '@/content/shared/site';

export const siteConfig = {
  name: siteSharedContent.name,

  title: siteContent.title,
  description: siteContent.description,

  url: 'https://ton-site.com',
  ogImage: '/og.png',

  links: {
    linkedin: 'https://www.linkedin.com/in/celinesouchet/',
    github: 'https://github.com/csouchet',
  },
} as const;

export type SiteConfig = typeof siteConfig;
