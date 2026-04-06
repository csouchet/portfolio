export const NAV_KEYS = [
  'home',
  'about',
  'projects',
  'articles',
  'services',
  'contact',
] as const;

export type NavKey = (typeof NAV_KEYS)[number];
