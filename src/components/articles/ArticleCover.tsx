'use client';

import { Box, Badge } from '@mantine/core';

import { Article, Tag } from '@/types/article';

type Props = {
  article: Article;
};

const tagGradient: Record<Tag, string> = {
  Testing: 'rgba(59,130,246,0.25)',
  Playwright: 'rgba(99,102,241,0.25)',
  TypeScript: 'rgba(37,99,235,0.25)',
  'CI/CD': 'rgba(249,115,22,0.25)',
  Database: 'rgba(16,185,129,0.25)',
  DevOps: 'rgba(234,88,12,0.25)',
  Data: 'rgba(34,197,94,0.25)',
  Analytics: 'rgba(6,182,212,0.25)',
  Superset: 'rgba(168,85,247,0.25)',
  'Open Source': 'rgba(244,63,94,0.25)',
  Community: 'rgba(236,72,153,0.25)',
  Event: 'rgba(251,146,60,0.25)',
  Tooling: 'rgba(14,165,233,0.25)',
  BPMN: 'rgba(132,204,22,0.25)',
  R: 'rgba(59,130,246,0.25)',
  Visualization: 'rgba(56,189,248,0.25)',
  Webinar: 'rgba(192,132,252,0.25)',
  Newsletter: 'rgba(250,204,21,0.25)',
  News: 'rgba(163,163,163,0.25)',
  Automation: 'rgba(244,63,94,0.25)',
  'Visual Testing': 'rgba(99,102,241,0.25)',
};

export function ArticleCover({ article }: Props) {
  const mainTag = article.tags[0];
  const gradientColor = tagGradient[mainTag];

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
            ${gradientColor},
            transparent 40%
          ),
          radial-gradient(
            circle at 80% 0%,
            rgba(236,72,153,0.12),
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
