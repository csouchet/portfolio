'use client';

import { useMemo, useState } from 'react';

import {
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Chip,
  Group,
} from '@mantine/core';

import { ArticleCard } from '@/components/cards/ArticleCard';
import { articles } from '@/data/articles';
import { sortArticles, getAllTags } from '@/lib/articles';
import { Tag } from '@/types/article';

export default function Page() {
  const sorted = useMemo(() => sortArticles(articles), []);

  const featured = sorted.find(a => a.featured);

  const tags = useMemo(() => getAllTags(articles), []);

  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const filtered = useMemo(() => {
    const base = activeTag
      ? sorted.filter(a => a.tags.includes(activeTag))
      : sorted;

    return base.filter(a => a.id !== featured?.id);
  }, [activeTag, sorted, featured]);

  return (
    <Container py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap={4}>
          <Title order={1}>Articles</Title>

          <Text c="dimmed">
            Une sélection d’articles techniques autour du testing, du CI/CD et
            de la data.
          </Text>
        </Stack>

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
      </Stack>
    </Container>
  );
}
