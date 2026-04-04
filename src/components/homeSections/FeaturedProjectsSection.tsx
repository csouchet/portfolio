'use client';

import { SimpleGrid } from '@mantine/core';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { HomeSection } from '@/components/homeSections/HomeSection';
import { getFeaturedParentProjects } from '@/lib/projects';

export function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedParentProjects();

  return (
    <HomeSection
      title="Projets clés"
      description="Des systèmes que j’ai conçus ou structurés, avec un impact direct sur la fiabilité et la vitesse de delivery."
      cta={{
        label: 'Voir tous les projets',
        href: '/projects',
      }}
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
