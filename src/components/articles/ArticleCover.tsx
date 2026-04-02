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
        position: 'relative',
        overflow: 'hidden',

        border: '1px solid var(--mantine-color-default-border)',

        background: `
          radial-gradient(
            circle at 20% 20%,
            rgba(99,102,241,0.25),
            transparent 40%
          ),
          radial-gradient(
            circle at 80% 0%,
            rgba(236,72,153,0.15),
            transparent 40%
          ),
          linear-gradient(
            to bottom,
            var(--mantine-color-body),
            var(--mantine-color-default)
          )
        `,

        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: theme.spacing.sm,
      })}
    >
      {/* Glow overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.15))',
          pointerEvents: 'none',
        }}
      />

      {/* Platform badge */}
      <Badge
        variant="light"
        color="brand"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {article.platform}
      </Badge>
    </Box>
  );
}
