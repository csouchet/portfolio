'use client';

import { Text, Group, Badge, Stack, Anchor } from '@mantine/core';

import { ArticleCover } from '@/components/articles/ArticleCover';
import { getContent } from '@/lib/i18n';
import { Article } from '@/types/article';
import { Locale } from '@/types/i18n';

import { BaseCard } from './BaseCard';

type Props = {
  article: Article;
  content: ReturnType<typeof getContent>['articles'];
  locale: Locale;
};

export function ArticleCard({ article, content, locale }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === 'fr' ? 'fr-FR' : 'en-US',
    {
      year: 'numeric',
      month: 'short',
    },
  );

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
          {content.read}
        </Anchor>
      </Stack>
    </BaseCard>
  );
}
