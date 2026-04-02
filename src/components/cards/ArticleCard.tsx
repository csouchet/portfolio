'use client';

import { Text, Group, Badge, Stack, Anchor, Image } from '@mantine/core';

import { getArticleImage } from '@/lib/articles';
import { Article } from '@/types/article';

import { BaseCard } from './BaseCard';

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <BaseCard>
      <Stack gap="sm">
        {/* Header */}
        <Image
          src={getArticleImage(article)}
          alt={article.title}
          radius="md"
          style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
        />

        <Group justify="space-between">
          <Badge variant="light" color="brand">
            {article.platform}
          </Badge>

          <Text size="xs" c="dimmed">
            {formattedDate} · {article.readingTime}
          </Text>
        </Group>

        {/* Title */}
        <Text fw={600} size="md" lineClamp={3}>
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
          size="sm"
          fw={500}
          c="brand.6"
          style={{
            alignSelf: 'flex-start',
            transition: 'all 120ms ease',
          }}
        >
          Lire l’article →
        </Anchor>
      </Stack>
    </BaseCard>
  );
}
