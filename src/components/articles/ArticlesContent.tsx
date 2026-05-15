'use client';

import React from 'react';

import { Box, SimpleGrid, Text, rem } from '@mantine/core';

import { ArticleCover } from '@/components/articles/ArticleCover';
import { CollectionPagination } from '@/components/collection/CollectionPagination';
import { PublicationCard } from '@/components/layout/PublicationCard';
import { formatDate } from '@/lib/articles';
import { getContent } from '@/lib/i18n';
import { Article, Tag } from '@/types/article';
import { Locale } from '@/types/i18n';

type Props = {
  visibleItems: Article[];
  featuredArticle?: Article;
  filterValue: Tag | null;
  page: number;
  totalPages: number;
  onPageChangeAction: (page: number) => void;
  content: ReturnType<typeof getContent>['articles'];
  locale: Locale;
  featuredLabel: string;
};

export function ArticlesContent({
  visibleItems,
  featuredArticle,
  filterValue,
  page,
  totalPages,
  onPageChangeAction,
  content,
  locale,
  featuredLabel,
}: Props) {
  return (
    <>
      {featuredArticle && filterValue === null && page === 1 && (
        <Box mb={rem(60)}>
          <Text variant="overline" mb="xs" style={{ display: 'block' }}>
            {featuredLabel}
          </Text>

          <PublicationCard
            imageSection={<ArticleCover article={featuredArticle} />}
            title={featuredArticle.title}
            date={formatDate(featuredArticle, locale)}
            readingTime={featuredArticle.readingTime}
            tags={{ items: featuredArticle.tags, isColored: true }}
            footer={{ label: content.read, href: featuredArticle.url }}
          />
        </Box>
      )}

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" verticalSpacing="xl">
        {visibleItems.map(article => (
          <PublicationCard
            key={article.id}
            imageSection={<ArticleCover article={article} />}
            title={article.title}
            date={formatDate(article, locale)}
            readingTime={article.readingTime}
            tags={{ items: article.tags, isColored: true }}
            footer={{ label: content.read, href: article.url }}
          />
        ))}
      </SimpleGrid>

      <CollectionPagination
        totalPages={totalPages}
        page={page}
        onChangeAction={onPageChangeAction}
        mt={rem(80)}
      />
    </>
  );
}
