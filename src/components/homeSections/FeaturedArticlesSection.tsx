'use client';

import { SimpleGrid } from '@mantine/core';
import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { HomeSection } from '@/components/homeSections/HomeSection';

export function FeaturedArticlesSection() {
  const featuredArticles = articles
    .filter(a => a.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <HomeSection
      title="Articles"
      description="Une sélection d’articles techniques autour du testing, du CI/CD et de la data."
      cta={{
        label: 'Voir tous les articles',
        href: '/articles',
      }}
      gradientPosition="right"
    >
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {featuredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
