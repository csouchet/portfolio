'use client';

import { useMemo, useState } from 'react';

import { Stack, Text, SimpleGrid, Chip, Group } from '@mantine/core';

import { ArticleCard } from '@/components/cards/ArticleCard';
import { getAllTags } from '@/lib/articles';
import { getContent } from '@/lib/i18n';
import { Article, Tag } from '@/types/article';

type Labels = {
  featured: string;
  filter: string;
  all: string;
};

type Props = {
  articles: Article[];
  content: ReturnType<typeof getContent>['articles'];
  labels: Labels;
};

export function ArticlesClient({ articles, content, labels }: Props) {
  const featured = articles.find(a => a.featured);

  const tags = useMemo(() => getAllTags(articles), [articles]);

  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const filtered = useMemo(() => {
    const base = activeTag
      ? articles.filter(a => a.tags.includes(activeTag))
      : articles;

    return base.filter(a => a.id !== featured?.id);
  }, [activeTag, articles, featured]);

  return (
    <>
      {/* Featured */}
      {featured && (
        <Stack gap="sm">
          <Text size="sm" c="dimmed">
            {labels.featured}
          </Text>

          <ArticleCard article={featured} content={content} />
        </Stack>
      )}

      {/* Filters */}
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          {labels.filter}
        </Text>

        <Group gap="xs">
          <Chip
            checked={activeTag === null}
            onChange={() => setActiveTag(null)}
          >
            {labels.all}
          </Chip>

          {tags.map(tag => (
            <Chip
              key={tag}
              checked={activeTag === tag}
              onChange={() => setActiveTag(tag)}
            >
              {tag}
            </Chip>
          ))}
        </Group>
      </Stack>

      {/* List */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {filtered.map(article => (
          <ArticleCard key={article.id} article={article} content={content} />
        ))}
      </SimpleGrid>
    </>
  );
}
