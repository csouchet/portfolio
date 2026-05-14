import type { Metadata } from 'next';

import { Container, Stack, Title, Text } from '@mantine/core';

import { ArticlesClient } from '@/components/articles/ArticlesClient';
import { articles as articlesData } from '@/data/articles';
import { sortArticles } from '@/lib/articles';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale).articles;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${locale}/articles`,
      languages: {
        fr: '/fr/articles',
        en: '/en/articles',
      },
    },
  };
}

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).articles;

  const sorted = sortArticles(articlesData);

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
          content={content}
          labels={{
            featured: content.featured,
            filter: content.filter,
            all: content.all,
          }}
          locale={locale}
        />
      </Stack>
    </Container>
  );
}
