'use client';

import {
  Stack,
  SimpleGrid,
  Title,
  Text,
  Box,
  Group,
  Container,
} from '@mantine/core';

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
        <Stack gap="4rem">
          {orderedCategories
            .filter(category => grouped[category]?.length)
            .map((category, index) => {
              const projects = grouped[category];
              const isSingle = projects.length === 1;

              return (
                <Stack key={category} gap="lg">
                  <Stack gap={6}>
                    <Group align="center" gap="sm">
                      <Title order={3}>
                        {categoryLabels[category] ?? category}
                      </Title>

                      <Text size="sm" c="dimmed">
                        {projects.length}
                      </Text>
                    </Group>

                    <Box
                      w={56}
                      h={4}
                      style={theme => ({
                        borderRadius: 999,
                        background: `linear-gradient(
                          90deg,
                          ${theme.colors.brand[5]},
                          ${theme.colors.brand[3]}
                        )`,
                        boxShadow: `0 0 12px ${theme.colors.brand[5]}33`,
                      })}
                    />
                  </Stack>

                  {isSingle ? (
                    <Container size={600} px={0}>
                      <ProjectCard project={projects[0]} />
                    </Container>
                  ) : (
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                      {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </SimpleGrid>
                  )}

                  {index !== orderedCategories.length - 1 && (
                    <Box
                      mt="md"
                      style={{
                        height: 1,
                        opacity: 0.08,
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
