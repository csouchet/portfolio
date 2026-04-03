'use client';

import { Text, Group, Badge, Stack, Anchor } from '@mantine/core';

import { ArticleCover } from '@/components/articles/ArticleCover';
import { Article } from '@/types/article';

import { BaseCard } from './BaseCard';

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <BaseCard>
      <Stack gap="md">
        {/* Cover */}
        <ArticleCover article={article} />

        {/* Meta */}
        <Group justify="space-between">
          <Text size="xs" c="dimmed">
            {formattedDate} · {article.readingTime}
          </Text>
        </Group>

        {/* Title */}
        <Text fw={600} size="lg" lh={1.3}>
          {article.title}
        </Text>

        {/* Tags */}
        <Group gap="xs">
          {article.tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant="subtle" color="gray">
              {tag}
            </Badge>
          ))}
        </Group>

        {/* CTA */}
        <Anchor
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          fw={500}
          c="brand.6"
        >
          Lire l’article →
        </Anchor>
      </Stack>
    </BaseCard>
  );
}
