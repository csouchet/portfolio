'use client';

import { Stack, SimpleGrid, Title, Text, Box, Group } from '@mantine/core';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { HomeSection } from '@/components/homeSections/HomeSection';
import { getParentProjectsGroupedByCategory } from '@/lib/projects';

const categoryLabels: Record<string, string> = {
  product: 'Produits',
  application: 'Applications',
  library: 'Librairies',
  tooling: 'Tooling',
  engine: 'Moteur',
  website: 'Sites',
  other: 'Autres',
};

const orderedCategories = [
  'product',
  'application',
  'library',
  'tooling',
  'engine',
  'website',
  'other',
];

export default function ProjectsPage() {
  const grouped = getParentProjectsGroupedByCategory();

  return (
    <main>
      <HomeSection
        title="Projets & Contributions"
        description="Des systèmes complexes, conçus pour être fiables, maintenables et évolutifs."
        gradientPosition="left"
      >
        <Stack gap="3rem">
          {/* 🔥 INTRO STAFF */}
          <Stack maw={720} gap="md">
            <Text>
              Je travaille principalement sur des systèmes techniques complexes,
              où la qualité, la performance et la capacité à livrer sont des
              enjeux clés.
            </Text>

            <Text c="dimmed">
              Ces projets illustrent mon travail sur l’architecture, la CI/CD,
              la developer experience et la construction de produits robustes.
            </Text>
          </Stack>

          {/* 🔥 CASE STUDY (MOMENT FORT) */}
          <Box
            p="xl"
            style={theme => ({
              borderRadius: 16,
              background:
                'linear-gradient(135deg, rgba(99,102,241,0.06), transparent)',
              border: `1px solid ${theme.colors.gray[3]}`,
            })}
          >
            <Stack maw={720} gap="md">
              <Text fw={600}>
                Industrialisation complète d’une plateforme CI/CD
              </Text>

              <Text c="dimmed">
                Projet multi-composants avec pipelines lents, releases manuelles
                et manque de fiabilité.
              </Text>

              <Stack gap="xs">
                <Text c="dimmed">• Pipelines multi-plateformes</Text>
                <Text c="dimmed">• Tests E2E multi-navigateurs</Text>
                <Text c="dimmed">• Automatisation complète des releases</Text>
                <Text c="dimmed">• Analyse qualité et sécurité</Text>
              </Stack>

              <Text fw={500}>
                Résultat : livraisons plus rapides, système fiable et équipe
                plus efficace.
              </Text>
            </Stack>
          </Box>

          {/* GRID PAR CATÉGORIES */}
          <Stack gap="3.5rem">
            {orderedCategories
              .filter(category => grouped[category]?.length)
              .map((category, index) => {
                const projects = grouped[category];
                const isSingle = projects.length === 1;

                return (
                  <Stack key={category} gap="md">
                    {/* HEADER */}
                    <Stack gap={4}>
                      <Group align="flex-end" gap="xs">
                        <Title order={3}>
                          {categoryLabels[category] ?? category}
                        </Title>

                        <Text size="sm" c="dimmed">
                          {projects.length}
                        </Text>
                      </Group>

                      <Box
                        w={44}
                        h={3}
                        style={theme => ({
                          borderRadius: 999,
                          background: `linear-gradient(
                            90deg,
                            ${theme.colors.brand[5]},
                            ${theme.colors.brand[3]}
                          )`,
                          opacity: 0.7,
                        })}
                      />
                    </Stack>

                    {/* GRID */}
                    {isSingle ? (
                      <Box
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: 8,
                        }}
                      >
                        <Box
                          style={{
                            width: '100%',
                            maxWidth: 520,
                          }}
                        >
                          <ProjectCard project={projects[0]} />
                        </Box>
                      </Box>
                    ) : (
                      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                        {projects.map(project => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                      </SimpleGrid>
                    )}

                    {/* SEPARATOR */}
                    {index !== orderedCategories.length - 1 && (
                      <Box
                        mt="lg"
                        style={{
                          height: 1,
                          opacity: 0.05,
                          background:
                            'linear-gradient(to right, transparent, currentColor, transparent)',
                        }}
                      />
                    )}
                  </Stack>
                );
              })}
          </Stack>
        </Stack>
      </HomeSection>
    </main>
  );
}
