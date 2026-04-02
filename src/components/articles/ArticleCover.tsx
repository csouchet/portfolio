'use client';

import { Box, Badge } from '@mantine/core';

import { Article } from '@/types/article';

type Props = {
  article: Article;
};

export function ArticleCover({ article }: Props) {
  return (
    <Box
      style={theme => ({
        borderRadius: theme.radius.md,
        aspectRatio: '16 / 9',

        background: `
          radial-gradient(
            circle at 20% 0%,
            rgba(99,102,241,0.15),
            transparent 50%
          ),
          linear-gradient(
            to bottom,
            var(--mantine-color-body),
            var(--mantine-color-default)
          )
        `,

        border: '1px solid var(--mantine-color-default-border)',

        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        padding: theme.spacing.sm,
      })}
    >
      <Badge variant="light" color="brand">
        {article.platform}
      </Badge>
    </Box>
  );
}
