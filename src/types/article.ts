export type Article = {
  id: string;
  title: string;
  platform: string;
  url: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  featured?: boolean;
};
