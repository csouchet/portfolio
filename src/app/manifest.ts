import type { MetadataRoute } from 'next';

import { siteSharedContent } from '@/content/shared/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteSharedContent.name,
    short_name: 'C. Souchet',
    description:
      'Portfolio de Céline Souchet, Ingénieure Développeuse Fullstack et Platform Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },

      // {
      //   src: '/icon-192x192.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
      // {
      //   src: '/icon-512x512.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      // },
    ],
  };
}
