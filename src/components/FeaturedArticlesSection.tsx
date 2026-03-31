'use client';

import { Container, Title, Text, Stack, SimpleGrid, Box } from '@mantine/core';
import { articles } from '@/data/articles';
import { ArticleCard } from './ArticleCard';

export function FeaturedArticlesSection() {
  const featuredArticles = articles
    .filter(a => a.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Box
      component="section"
      style={theme => ({
        paddingBlock: theme.other.layout.sectionSpacing,

        background: `
          linear-gradient(
            to bottom,
            transparent,
            var(--mantine-color-body)
          )
        `,

        borderTop: `1px solid var(--mantine-color-default-border)`,
      })}
    >
      <Container>
        <Stack gap="xl" mt="md">
          {/* Header */}
          <Stack gap={6}>
            <Title order={2}>Articles</Title>

            <Text
              c="dimmed"
              style={theme => ({
                maxWidth: theme.other.layout.textMaxWidth,
              })}
            >
              Une sélection d’articles techniques autour du testing, du CI/CD et
              de la data.
            </Text>
          </Stack>

          {/* Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
