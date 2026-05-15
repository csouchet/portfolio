import { MetadataRoute } from 'next';

import { getSiteConfig } from '@/config/site';
import { getProjects } from '@/lib/projects';
import { LOCALES } from '@/types/i18n';
import { NAV_KEYS } from '@/types/navigation';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteConfig = getSiteConfig('fr');
  const baseUrl = siteConfig.url;
  const staticPaths = NAV_KEYS.map(key => (key === 'home' ? '' : `/${key}`));
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    for (const locale of LOCALES) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority: path === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${path}`,
            en: `${baseUrl}/en${path}`,
          },
        },
      });
    }
  }

  const projects = getProjects('fr');

  for (const project of projects) {
    for (const locale of LOCALES) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr/projects/${project.id}`,
            en: `${baseUrl}/en/projects/${project.id}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
