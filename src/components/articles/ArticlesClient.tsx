'use client';

import { Stack, Grid, rem, Space } from '@mantine/core';

import { CollectionFilters } from '@/components/collection/CollectionFilters';
import { PageLayout } from '@/components/layout/PageLayout';
import { useArticles } from '@/hooks/useArticles';
import { useAccentColor } from '@/hooks/useColors';
import { getContent } from '@/lib/i18n';
import { Article, Tag } from '@/types/article';
import { Locale } from '@/types/i18n';

import { ArticlesContent } from './ArticlesContent';
import { ArticlesSidebar } from './ArticlesSidebar';

type Props = {
  articles: Article[];
  content: ReturnType<typeof getContent>['articles'];
  locale: Locale;
};

export function ArticlesClient({ articles, content, locale }: Props) {
  const getAccentColor = useAccentColor();

  const {
    featured,
    tags,
    categoryCounts,
    filterValue,
    onFilterChange,
    page,
    onPageChange,
    visibleItems,
    totalPages,
  } = useArticles(articles);

  const filterOptions = tags.map(tag => ({
    value: tag,
    label: tag,
    color: getAccentColor(tag),
  }));

  return (
    <PageLayout {...content.hero}>
      <Grid gap={{ base: rem(40), lg: rem(60) }}>
        <Grid.Col span={{ base: 12, lg: 9 }}>
          <Stack m={0}>
            <CollectionFilters<Tag>
              options={filterOptions}
              value={filterValue}
              onChangeAction={onFilterChange}
              allLabel={content.all}
            />
            <Space h="sm" />

            <ArticlesContent
              visibleItems={visibleItems}
              featuredArticle={featured}
              filterValue={filterValue}
              page={page}
              totalPages={totalPages}
              onPageChangeAction={onPageChange}
              content={content}
              locale={locale}
              featuredLabel={content.featured}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 3 }}>
          <ArticlesSidebar
            categoryCounts={categoryCounts}
            locale={locale}
            content={content}
          />
        </Grid.Col>
      </Grid>
    </PageLayout>
  );
}
