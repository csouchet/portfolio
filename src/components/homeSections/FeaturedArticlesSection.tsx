'use client';

import { SimpleGrid } from '@mantine/core';

import { ArticleCard } from '@/components/cards/ArticleCard';
import { HomeSection } from '@/components/homeSections/HomeSection';
import { articles } from '@/data/articles';

export function FeaturedArticlesSection() {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  return (
    <HomeSection
      title="Articles"
      description="Quelques retours d’expérience sur la qualité logicielle et les systèmes fiables."
      cta={{
        label: 'Voir tous les articles',
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
