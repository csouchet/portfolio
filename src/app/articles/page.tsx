import type { Metadata } from 'next';

import { Container, Stack, Title, Text } from '@mantine/core';

import { ArticlesClient } from '@/components/articles/ArticlesClient';
import { articles } from '@/data/articles';
import { sortArticles } from '@/lib/articles';

export const metadata: Metadata = {
  alternates: {
    canonical: '/articles',
  },
  title: 'Articles',
  description:
    'Articles techniques autour du CI/CD, du testing et des systèmes.',
};

export default function ArticlesPage() {
  const sorted = sortArticles(articles);

  return (
    <Container py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap={4}>
          <Title order={1}>Articles</Title>

          <Text c="dimmed">
            Une sélection d’articles techniques autour du CI/CD, du testing et
            des systèmes.
          </Text>
        </Stack>

        {/* Client part */}
        <ArticlesClient articles={sorted} />
      </Stack>
    </Container>
  );
}
