'use client';

import { useMemo } from 'react';

import { getAllTags } from '@/lib/articles';
import { Article, Tag } from '@/types/article';

import { useCollection } from './useCollection';

export function useArticles(articles: Article[]) {
  const featured = useMemo(() => articles.find(a => a.featured), [articles]);

  const tags = useMemo(() => getAllTags(articles), [articles]);
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    articles.forEach(a => {
      a.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [articles]);

  const baseArticles = useMemo(() => {
    return articles.filter(a => a.id !== featured?.id);
  }, [articles, featured]);

  const collection = useCollection<Article, Tag>({
    items: baseArticles,
    filterAction: (article, tag) => article.tags.includes(tag),
    itemsPerPage: 10,
  });

  return {
    featured,
    tags,
    categoryCounts,
    ...collection,
  };
}
