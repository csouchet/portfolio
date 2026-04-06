import type { Metadata } from 'next';

import { Container, Stack, Title, Text } from '@mantine/core';

import { ArticlesClient } from '@/components/articles/ArticlesClient';
import { articlesPageContent } from '@/content/fr/articles';
import { articles } from '@/data/articles';
import { sortArticles } from '@/lib/articles';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/articles',
    languages: {
      fr: '/fr/articles',
      en: '/en/articles',
    },
  },
  title: articlesPageContent.title,
  description: articlesPageContent.description,
};

export default function ArticlesPage() {
  const content = articlesPageContent;

  const sorted = sortArticles(articles);

  return (
    <Container py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap={4}>
          <Title order={1}>{content.title}</Title>

          <Text c="dimmed">{content.description}</Text>
        </Stack>

        {/* Client part */}
        <ArticlesClient
          articles={sorted}
          labels={{
            featured: content.featured,
            filter: content.filter,
            all: content.all,
          }}
        />
      </Stack>
    </Container>
  );
}
