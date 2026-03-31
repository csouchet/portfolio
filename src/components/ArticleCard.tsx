'use client';

import { Card, Text, Group, Badge, Stack } from '@mantine/core';
import { Article } from '@/types/article';

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <Card
      component="a"
      href={article.url}
      target="_blank"
      radius="md"
      withBorder
      p="lg"
      style={theme => ({
        textDecoration: 'none',
        transition: 'all 180ms ease',

        backgroundColor: 'var(--mantine-color-body)',
        border: '1px solid var(--mantine-color-default-border)',

        background: `
          linear-gradient(
            to bottom,
            var(--mantine-color-body),
            rgba(99,102,241,0.05)
          )
        `,

        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: theme.shadows.lg,
            borderColor: 'var(--mantine-color-brand-4)',
          },
        },

        '&:focusVisible': {
          outline: `2px solid var(--mantine-color-brand-5)`,
          outlineOffset: 2,
        },
      })}
    >
      <Stack gap="sm">
        {/* Header */}
        <Group justify="space-between">
          <Badge variant="light" color="brand">
            {article.platform}
          </Badge>

          <Text size="xs" c="dimmed">
            {formattedDate} · {article.readingTime}
          </Text>
        </Group>

        {/* Title */}
        <Text fw={600} size="md" style={{ lineHeight: 1.4 }}>
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
        <Text size="sm" fw={500} c="brand.6" style={{ marginTop: '4px' }}>
          Lire l’article →
        </Text>
      </Stack>
    </Card>
  );
}
