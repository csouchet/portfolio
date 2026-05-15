'use client';

import { Box, Image } from '@mantine/core';

import { useAccentColor } from '@/hooks/useColors';
import { Article } from '@/types/article';

type Props = {
  article: Article;
};

export function ArticleCover({ article }: Props) {
  const getAccentColor = useAccentColor();

  const mainTag = article.tags[0];
  const color = getAccentColor(mainTag);

  return (
    <Box
      style={{
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        backgroundColor: `light-dark(var(--mantine-color-${color}Light-0), var(--mantine-color-${color}Dark-5))`,
      }}
    >
      <Image
        src={article.image}
        alt={`Couverture de l'article : ${article.title}`}
        w="100%"
        h="100%"
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
}
