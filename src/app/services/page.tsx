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
import { HomeSection } from '@/components/homeSections/HomeSection';

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <HomeSection
        title="Staff / Platform Engineer"
        description="J’aide les équipes à construire des systèmes fiables, scalables et livrables."
        gradientPosition="left"
      >
        <Stack maw={720} gap="md">
          <Text size="lg">
            J’interviens sur des projets techniques complexes — lorsque la
            qualité, la vitesse de livraison ou la maintenabilité deviennent
            critiques.
          </Text>

          <Text fw={600} size="lg">
            Je transforme des systèmes qui ralentissent les équipes en systèmes
            qui les accélèrent.
          </Text>

          <Text>
            Mon rôle : améliorer durablement la capacité d’une équipe à
            construire, livrer et faire évoluer son produit.
          </Text>

          <Group gap="xs">
            <Badge color="green" variant="light">
              Disponible mi-novembre
            </Badge>

            <Text size="sm" c="dimmed">
              Freelance • Remote / Grenoble
            </Text>
          </Group>

          <Button
            component={Link}
            href="/contact"
            variant="gradient"
            gradient={{ from: 'brand.5', to: 'brand.7' }}
            w="fit-content"
          >
            Discuter d’un contexte technique
          </Button>
        </Stack>
      </HomeSection>

      {/* CONTEXT */}
      <HomeSection title="Quand j’interviens" gradientPosition="right">
        <Stack maw={720} gap="md">
          <Text>
            J’interviens généralement lorsque le système commence à ralentir
            l’équipe ou à freiner le produit.
          </Text>

          <Stack gap="xs">
            <Text c="dimmed">• Livraisons lentes ou imprévisibles</Text>
            <Text c="dimmed">• Complexité technique difficile à maîtriser</Text>
            <Text c="dimmed">• Manque de confiance dans le code</Text>
            <Text c="dimmed">• Difficulté à faire évoluer l’architecture</Text>
            <Text c="dimmed">• Expérience développeur dégradée</Text>
          </Stack>
        </Stack>
      </HomeSection>

      {/* EXPERTISE */}
      <HomeSection title="Domaines d’intervention" gradientPosition="left">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <BaseCard>
            <Title order={4}>Platform & CI/CD</Title>
            <Text size="sm" c="dimmed">
              Pipelines complexes, automatisation des builds, tests et releases,
              optimisation des performances et des coûts.
            </Text>
          </BaseCard>

          <BaseCard>
            <Title order={4}>Architecture & systèmes</Title>
            <Text size="sm" c="dimmed">
              Structuration de systèmes robustes et évolutifs sur des projets
              complexes.
            </Text>
          </BaseCard>

          <BaseCard>
            <Title order={4}>Developer Experience</Title>
            <Text size="sm" c="dimmed">
              Amélioration de l’onboarding, des outils et des standards pour
              accélérer les équipes.
            </Text>
          </BaseCard>

          <BaseCard>
            <Title order={4}>Produit & impact</Title>
            <Text size="sm" c="dimmed">
              Contribution à la roadmap, analyse des KPIs et amélioration de
              l’adoption produit.
            </Text>
          </BaseCard>
        </SimpleGrid>
      </HomeSection>

      {/* ACTION */}
      <HomeSection
        title="Ce que je mets en place concrètement"
        gradientPosition="right"
      >
        <Stack maw={720} gap="md">
          <Stack gap="xs">
            <Text c="dimmed">
              • Clarification de l’architecture et des responsabilités
            </Text>
            <Text c="dimmed">
              • Mise en place ou refonte de pipelines CI/CD
            </Text>
            <Text c="dimmed">• Automatisation des tests et des releases</Text>
            <Text c="dimmed">
              • Réduction de la dette technique et simplification du code
            </Text>
            <Text c="dimmed">• Amélioration de l’expérience développeur</Text>
          </Stack>
        </Stack>
      </HomeSection>

      {/* PROOF */}
      <HomeSection title="Exemple récent" gradientPosition="left">
        <Stack maw={720} gap="md">
          <Text fw={600}>
            Mise en place d’une plateforme CI/CD complète sur un projet
            multi-composants
          </Text>

          <Text c="dimmed">
            Contexte : pipelines lents, releases manuelles, manque de confiance
            dans les livraisons.
          </Text>

          <Stack gap="xs">
            <Text c="dimmed">• Pipelines multi-OS (Linux, macOS, Windows)</Text>
            <Text c="dimmed">• Tests E2E multi-navigateurs</Text>
            <Text c="dimmed">• Automatisation complète des releases</Text>
            <Text c="dimmed">• Analyse qualité et sécurité continue</Text>
          </Stack>

          <Text fw={500}>
            Résultat : un système fiable, des livraisons fluides et une équipe
            qui avance plus vite.
          </Text>
        </Stack>
      </HomeSection>

      {/* RESULTS */}
      <HomeSection title="Résultats" gradientPosition="right">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <BaseCard>
            <Text fw={600}>Systèmes plus fiables</Text>
            <Text size="sm" c="dimmed">
              Moins de bugs et de régressions
            </Text>
          </BaseCard>

          <BaseCard>
            <Text fw={600}>Livraisons accélérées</Text>
            <Text size="sm" c="dimmed">
              Pipelines fluides et automatisés
            </Text>
          </BaseCard>

          <BaseCard>
            <Text fw={600}>Équipe plus efficace</Text>
            <Text size="sm" c="dimmed">
              Meilleure compréhension et onboarding facilité
            </Text>
          </BaseCard>
        </SimpleGrid>
      </HomeSection>

      {/* APPROACH */}
      <HomeSection title="Approche" gradientPosition="left">
        <Stack maw={720} gap="md">
          <Text fw={500}>
            Je travaille sur les points de levier qui débloquent réellement une
            équipe.
          </Text>

          <Text c="dimmed">
            Code, CI/CD, architecture et organisation sont liés : les améliorer
            ensemble permet un impact durable.
          </Text>

          <Text>
            Mon objectif n’est pas d’ajouter de la complexité, mais de rendre
            les systèmes plus simples à comprendre, à maintenir et à faire
            évoluer.
          </Text>
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
            href="/contact"
            variant="gradient"
            gradient={{ from: 'brand.5', to: 'brand.7' }}
          >
            Me contacter
          </Button>
        </Stack>
      </HomeSection>
    </main>
  );
}
