'use client';

import { Stack, SimpleGrid, Title } from '@mantine/core';

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

export default function ProjectsPage() {
  const groupedProjects = getParentProjectsGroupedByCategory();

  return (
    <main>
      <HomeSection
        title="Projets & Contributions"
        description="Une vue d’ensemble des projets sur lesquels j’ai travaillé, incluant produits, librairies et contributions techniques."
        gradientPosition="left"
      >
        <Stack gap="xl">
          {Object.entries(groupedProjects).map(([category, projects]) => (
            <Stack key={category} gap="md">
              {/* Category title */}
              <Title order={3}>{categoryLabels[category] ?? category}</Title>

              {/* Grid */}
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                {projects.map(project => (
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
