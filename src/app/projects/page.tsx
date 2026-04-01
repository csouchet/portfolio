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
        description="Je conçois des produits et outils techniques robustes, avec une attention particulière portée à l’architecture, la qualité et l’expérience développeur."
        gradientPosition="left"
      >
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
                          position: 'relative',
                        }}
                      >
                        {/* Glow subtil derrière */}
                        <Box
                          style={{
                            position: 'absolute',
                            inset: -12,
                            borderRadius: 20,
                            background:
                              'radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)',
                            zIndex: 0,
                          }}
                        />

                        <Box style={{ position: 'relative', zIndex: 1 }}>
                          <ProjectCard project={projects[0]} />
                        </Box>
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
      </HomeSection>
    </main>
  );
}
