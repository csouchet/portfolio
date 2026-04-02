import { Article, Tag } from '@/types/article';

export function sortArticles(articles: Article[]) {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getAllTags(articles: Article[]): Tag[] {
  const count = new Map<Tag, number>();

  articles.forEach(a => {
    a.tags.forEach(tag => {
      count.set(tag, (count.get(tag) || 0) + 1);
    });
  });

  return Array.from(count.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}
