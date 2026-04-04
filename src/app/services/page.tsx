import Link from 'next/link';

import { Metadata } from 'next';

import { Stack, Text, Button } from '@mantine/core';

import { HomeSection } from '@/components/homeSections/HomeSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <HomeSection
        title="Systèmes trop complexes, livraisons instables, équipe ralentie."
        description="J’interviens pour remettre de la fiabilité, de la clarté et de la fluidité."
      >
        <Stack maw={720} gap="md">
          <Text size="lg">
            Quand un système devient difficile à comprendre ou à faire évoluer,
            il finit par freiner tout le produit.
          </Text>

          <Text fw={600}>
            Mon rôle : débloquer ces situations et permettre à l’équipe
            d’avancer sereinement.
          </Text>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="gradient" w="fit-content">
              Discuter d’un contexte technique
            </Button>
          </Link>
        </Stack>
      </HomeSection>

      {/* WHEN */}
      <HomeSection title="Quand j’interviens">
        <Stack maw={720} gap="md">
          <Text>
            J’interviens quand le système commence à devenir un frein.
          </Text>

          <Stack gap="xs">
            <Text c="dimmed">
              • Les livraisons sont lentes ou imprévisibles
            </Text>
            <Text c="dimmed">
              • Le code est difficile à comprendre ou modifier
            </Text>
            <Text c="dimmed">• L’architecture ne tient plus</Text>
            <Text c="dimmed">
              • Les équipes perdent du temps sur des problèmes techniques
            </Text>
          </Stack>
        </Stack>
      </HomeSection>

      {/* MISSIONS */}
      <HomeSection title="Types de missions">
        <Stack maw={720} gap="md">
          <Stack gap="md">
            <Stack gap={4}>
              <Text fw={500}>Construire une plateforme from scratch</Text>
              <Text size="sm" c="dimmed">
                Architecture, fondations techniques et mise en place des
                pratiques de développement.
              </Text>
            </Stack>

            <Stack gap={4}>
              <Text fw={500}>
                Reprendre un système devenu difficile à faire évoluer
              </Text>
              <Text size="sm" c="dimmed">
                Simplification de l’architecture et réduction de la complexité.
              </Text>
            </Stack>

            <Stack gap={4}>
              <Text fw={500}>Fiabiliser des livraisons instables</Text>
              <Text size="sm" c="dimmed">
                Mise en place de pipelines robustes, automatisation des tests et
                des releases.
              </Text>
            </Stack>

            <Stack gap={4}>
              <Text fw={500}>
                Accélérer une équipe ralentie par son système
              </Text>
              <Text size="sm" c="dimmed">
                Suppression des frictions techniques et amélioration de la
                fluidité.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </HomeSection>

      {/* CASE STUDY */}
      <HomeSection title="Exemple">
        <Stack maw={720} gap="md">
          <Text fw={600}>Plateforme CI/CD sur un projet multi-composants</Text>

          <Text c="dimmed">
            Pipelines lents, releases manuelles, manque de confiance dans les
            livraisons.
          </Text>

          <Text>
            Mise en place de pipelines multi-environnements, automatisation des
            tests et des releases, validation continue.
          </Text>

          <Text fw={500}>
            Résultat : livraisons fiables, moins de risques et une équipe qui
            avance plus vite.
          </Text>
        </Stack>
      </HomeSection>

      {/* CTA */}
      <HomeSection title="Travaillons ensemble">
        <Stack align="center" gap="md">
          <Text ta="center" maw={500}>
            Si votre système commence à ralentir votre équipe, on peut en
            parler.
          </Text>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="gradient">Me contacter</Button>
          </Link>
        </Stack>
      </HomeSection>
    </main>
  );
}
