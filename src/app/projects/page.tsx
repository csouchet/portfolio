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

const categoryDescriptions: Record<string, string> = {
  product:
    'Produits sur lesquels j’ai contribué à la structuration technique et produit.',
  application:
    'Applications métiers avec enjeux de performance et maintenabilité.',
  library: 'Librairies techniques avec contraintes de qualité et distribution.',
  tooling: 'Outils internes pour améliorer la productivité et la qualité.',
  engine: 'Composants cœur nécessitant robustesse et scalabilité.',
  website: 'Sites techniques avec enjeux SEO, performance et contenu.',
  other: 'Autres projets.',
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
          {/* INTRO */}
          <Stack maw={720} gap="md">
            <Text>
              Je travaille sur des systèmes techniques complexes où la qualité,
              la performance et la capacité à livrer sont critiques.
            </Text>

            <Text c="dimmed">
              Ces projets illustrent mon travail sur l’architecture, la CI/CD,
              la developer experience et la construction de produits robustes.
            </Text>
          </Stack>

          {/* 🔥 CASE STUDY */}
          <Box
            p="xl"
            style={theme => ({
              borderRadius: 20,
              background:
                'linear-gradient(135deg, rgba(99,102,241,0.08), transparent)',
              border: `1px solid ${theme.colors.gray[3]}`,
            })}
          >
            <Stack maw={760} gap="lg">
              <Text size="sm" c="dimmed" fw={500}>
                CASE STUDY
              </Text>

              <Title order={3}>
                Industrialisation d’une plateforme CI/CD complexe
              </Title>

              <Text c="dimmed">
                Projet multi-composants avec pipelines lents, releases manuelles
                et manque de fiabilité.
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <Stack gap={4}>
                  <Text fw={500}>Problèmes</Text>
                  <Text size="sm" c="dimmed">
                    • Pipelines lents
                  </Text>
                  <Text size="sm" c="dimmed">
                    • Releases manuelles
                  </Text>
                  <Text size="sm" c="dimmed">
                    • Manque de confiance
                  </Text>
                </Stack>

                <Stack gap={4}>
                  <Text fw={500}>Actions</Text>
                  <Text size="sm" c="dimmed">
                    • CI multi-plateformes
                  </Text>
                  <Text size="sm" c="dimmed">
                    • Tests E2E
                  </Text>
                  <Text size="sm" c="dimmed">
                    • Release automatisée
                  </Text>
                </Stack>
              </SimpleGrid>

              <Text fw={600}>
                Résultat : système fiable, livraisons accélérées, équipe plus
                efficace.
              </Text>
            </Stack>
          </Box>

          {/* 🧠 PHRASE PIVOT */}
          <Text maw={720} c="dimmed">
            Ce type de projet est représentatif de mon travail : structurer,
            fiabiliser et accélérer des systèmes complexes.
          </Text>

          {/* GRID */}
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

                      <Text size="sm" c="dimmed">
                        {categoryDescriptions[category]}
                      </Text>

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
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Box style={{ width: '100%', maxWidth: 520 }}>
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
