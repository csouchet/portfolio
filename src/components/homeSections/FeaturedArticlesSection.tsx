'use client';

import { SimpleGrid } from '@mantine/core';

import { ArticleCard } from '@/components/cards/ArticleCard';
import { HomeSection } from '@/components/homeSections/HomeSection';
import { articles } from '@/data/articles';
import { useContent } from '@/hooks/useContent';

export function FeaturedArticlesSection() {
  const { home } = useContent();
  const content = home.featuredArticles;

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  return (
    <HomeSection
      title={content.title}
      description={content.description}
      cta={{
        label: content.cta,
        href: '/articles',
      }}
    >
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {featuredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
