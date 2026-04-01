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
      description="Une sélection de projets sur lesquels j’ai travaillé, avec un focus sur la performance, la scalabilité et l’expérience développeur."
      cta={{
        label: 'Voir tous les projets',
        href: '/projects',
      }}
      gradientPosition="left"
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
