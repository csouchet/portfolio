import { MetadataRoute } from 'next';

import { getSiteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const siteConfig = getSiteConfig('fr');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
