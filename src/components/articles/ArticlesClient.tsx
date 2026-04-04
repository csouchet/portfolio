'use client';

import { useMemo, useState } from 'react';

import { Stack, Text, SimpleGrid, Chip, Group } from '@mantine/core';

import { ArticleCard } from '@/components/cards/ArticleCard';
import { getAllTags } from '@/lib/articles';
import { Tag } from '@/types/article';
import { Article } from '@/types/article';

type Props = {
  articles: Article[];
};

export function ArticlesClient({ articles }: Props) {
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
            À la une
          </Text>

          <ArticleCard article={featured} />
        </Stack>
      )}

      {/* Filters */}
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          Filtrer par sujet
        </Text>

        <Group gap="xs">
          <Chip
            checked={activeTag === null}
            onChange={() => setActiveTag(null)}
          >
            Tous
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
          <ArticleCard key={article.id} article={article} />
        ))}
      </SimpleGrid>
    </>
  );
}
