export const siteConfig = {
  name: 'Céline Souchet',
  title: 'Ingénieure développeuse senior Java (Spring) et React / TypeScript',
  description:
    'Développeuse senior spécialisée en Java (Spring) et React / TypeScript. Je conçois des applications fiables, maintenables et performantes.',
  url: 'https://ton-site.com',
  ogImage: '/og.png',

  links: {
    linkedin: 'https://www.linkedin.com/in/celinesouchet/',
    github: 'https://github.com/csouchet',
  },
} as const;

export type SiteConfig = typeof siteConfig;
