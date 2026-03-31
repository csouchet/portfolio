'use client';

import { SimpleGrid } from '@mantine/core';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { HomeSection } from './HomeSection';

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <HomeSection
      title="Projets"
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
