'use client';

import { Stack, SimpleGrid, Title, Box } from '@mantine/core';

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
        description="Une sélection de projets produits, librairies et contributions techniques, avec un focus sur la qualité, l’architecture et l’expérience développeur."
        gradientPosition="left"
      >
        <Stack gap="3rem">
          {orderedCategories
            .filter(category => grouped[category]?.length)
            .map(category => (
              <Stack key={category} gap="md">
                {/* Category header */}
                <Stack gap={4}>
                  <Title order={3}>
                    {categoryLabels[category] ?? category}
                  </Title>

                  <Box
                    w={40}
                    h={3}
                    style={{
                      borderRadius: 999,
                      background: 'var(--mantine-color-brand-5)',
                      opacity: 0.6,
                    }}
                  />
                </Stack>

                {/* Projects grid */}
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                  {grouped[category].map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </SimpleGrid>
              </Stack>
            ))}
        </Stack>
      </HomeSection>
    </main>
  );
}
