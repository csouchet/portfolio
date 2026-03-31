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
        <Group justify="space-between">
          <Badge variant="light" color="brand">
            {article.platform}
          </Badge>

          <Text size="xs" c="dimmed">
            {formattedDate} · {article.readingTime}
          </Text>
        </Group>

        <Text fw={600} size="md">
          {article.title}
        </Text>

        <Group gap="xs">
          {article.tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant="subtle" color="gray">
              {tag}
            </Badge>
          ))}
        </Group>

        <Text size="sm" c="dimmed">
          Lire l’article →
        </Text>
      </Stack>
    </Card>
  );
}
