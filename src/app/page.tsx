'use client';

import Link from 'next/link';

import {
  Stack,
  Title,
  Text,
  SimpleGrid,
  Button,
  Group,
  Badge,
} from '@mantine/core';

import { BaseCard } from '@/components/cards/BaseCard';
import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { HomeSection } from '@/components/homeSections/HomeSection';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <HomeSection
        title="Staff / Platform Engineer"
        description="Je conçois des systèmes fiables, scalables et livrables."
        gradientPosition="left"
      >
        <Stack maw={720} gap="md">
          <Text size="lg">
            J’interviens sur des systèmes complexes — lorsque la qualité, la
            vitesse de livraison ou la maintenabilité deviennent critiques.
          </Text>

          <Text fw={600} size="lg">
            Je transforme des systèmes qui ralentissent les équipes en systèmes
            qui les accélèrent.
          </Text>

          <Group gap="xs">
            <Badge color="green" variant="light">
              Disponible mi-novembre
            </Badge>

            <Text size="sm" c="dimmed">
              Freelance • Remote / Grenoble
            </Text>
          </Group>

          <Group>
            <Button
              component={Link}
              href="/services"
              variant="gradient"
              gradient={{ from: 'brand.5', to: 'brand.7' }}
            >
              Voir mon approche
            </Button>

            <Button component={Link} href="/projects" variant="subtle">
              Voir les projets
            </Button>
          </Group>
        </Stack>
      </HomeSection>

      {/* CONTEXT */}
      <HomeSection title="Quand j’interviens" gradientPosition="right">
        <Stack maw={720} gap="md">
          <Text>
            J’interviens lorsque le système commence à ralentir l’équipe ou à
            freiner le produit.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            {[
              'Livraisons lentes ou imprévisibles',
              'Complexité technique difficile à maîtriser',
              'Manque de confiance dans le code',
              'Architecture difficile à faire évoluer',
            ].map(item => (
              <BaseCard key={item}>
                <Text>{item}</Text>
              </BaseCard>
            ))}
          </SimpleGrid>
        </Stack>
      </HomeSection>

      {/* EXPERTISE */}
      <HomeSection title="Domaines d’expertise" gradientPosition="left">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <BaseCard>
            <Title order={4}>Platform & CI/CD</Title>
            <Text size="sm" c="dimmed">
              Pipelines complexes, automatisation des builds, tests et releases.
            </Text>
          </BaseCard>

          <BaseCard>
            <Title order={4}>Architecture & systèmes</Title>
            <Text size="sm" c="dimmed">
              Structuration de systèmes robustes et évolutifs.
            </Text>
          </BaseCard>

          <BaseCard>
            <Title order={4}>Developer Experience</Title>
            <Text size="sm" c="dimmed">
              Outils, standards et onboarding pour accélérer les équipes.
            </Text>
          </BaseCard>

          <BaseCard>
            <Title order={4}>Produit & impact</Title>
            <Text size="sm" c="dimmed">
              Roadmap, KPIs et amélioration de l’adoption produit.
            </Text>
          </BaseCard>
        </SimpleGrid>
      </HomeSection>

      {/* PROJECTS */}
      <HomeSection title="Projets sélectionnés" gradientPosition="right">
        <Stack gap="md">
          <Text maw={720}>
            Une sélection de projets sur lesquels j’ai travaillé, avec un focus
            sur l’architecture, la CI/CD et les systèmes complexes.
          </Text>

          <FeaturedProjectsSection />

          <Button component={Link} href="/projects" variant="subtle">
            Voir tous les projets
          </Button>
        </Stack>
      </HomeSection>

      {/* ARTICLES */}
      <HomeSection title="Articles" gradientPosition="left">
        <Stack gap="md">
          <Text maw={720}>
            J’écris sur l’ingénierie logicielle, la qualité et la construction
            de systèmes fiables.
          </Text>

          <FeaturedArticlesSection />

          <Button component={Link} href="/articles" variant="subtle">
            Voir tous les articles
          </Button>
        </Stack>
      </HomeSection>

      {/* CTA */}
      <HomeSection title="Travaillons ensemble" gradientPosition="right">
        <Stack align="center" gap="md">
          <Text ta="center" maw={500}>
            Un système complexe à stabiliser ou un projet à structurer ?
            Discutons-en.
          </Text>

          <Button
            component={Link}
            href="/services"
            variant="gradient"
            gradient={{ from: 'brand.5', to: 'brand.7' }}
          >
            Voir mon approche
          </Button>
        </Stack>
      </HomeSection>
    </main>
  );
}
