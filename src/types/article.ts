type Platform = 'Medium' | 'Dev.to' | 'Hackernoon';

export const ARTICLE_TAGS = [
  'Testing',
  'Data & Analytics',
  'DevOps & Infra',
  'Open Source',
  'Events & News',
  'Engineering',
  'Product & Team',
] as const;

export type Tag = (typeof ARTICLE_TAGS)[number];

export type Article = {
  id: string;
  title: string;
  platform: Platform;
  url: string;
  date: string; // ISO
  readingTime: string;
  tags: Tag[];
  featured?: boolean;
  image: string;
};
