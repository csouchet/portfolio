'use client';

import { Box, Text, Stack, Badge } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';

import { Article } from '@/types/article';

type Props = {
  article: Article;
};

export function ArticleCover({ article }: Props) {
  const { colorScheme } = useMantineColorScheme();

  const mainTag = article.tags[0];

  return (
    <Box
      style={theme => ({
        borderRadius: theme.radius.md,
        padding: theme.spacing.md,
        aspectRatio: '16 / 9',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        background: `
          radial-gradient(
            circle at 20% 0%,
            rgba(99,102,241,0.15),
            transparent 50%
          ),
          linear-gradient(
            to bottom,
            ${colorScheme === 'dark' ? theme.colors.dark[6] : theme.white},
            ${
              colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[0]
            }
          )
        `,

        border: '1px solid var(--mantine-color-default-border)',
      })}
    >
      <Badge variant="light" color="brand" w="fit-content">
        {article.platform}
      </Badge>

      <Stack gap={4}>
        <Text size="xs" c="dimmed">
          {mainTag}
        </Text>

        <Text fw={600} size="sm" lineClamp={3}>
          {article.title}
        </Text>
      </Stack>
    </Box>
  );
}
