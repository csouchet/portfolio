'use client';

import { SimpleGrid } from '@mantine/core';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { HomeSection } from '@/components/homeSections/HomeSection';
import { useContent } from '@/hooks/useContent';
import { getFeaturedParentProjects } from '@/lib/projects';

export function FeaturedProjectsSection() {
  const { home, locale, projects } = useContent();
  const content = home.featuredProjects;
  const featuredProjects = getFeaturedParentProjects(locale);

  return (
    <HomeSection
      title={content.title}
      description={content.description}
      cta={{
        label: content.cta,
        href: '/projects',
      }}
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} content={projects} />
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
