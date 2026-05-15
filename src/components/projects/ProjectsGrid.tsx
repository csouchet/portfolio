'use client';

import { List, SimpleGrid, SimpleGridProps } from '@mantine/core';

import { PublicationCard } from '@/components/layout/PublicationCard';
import { projectStacks } from '@/data/projectStacks';
import { Locale } from '@/types/i18n';
import { Project } from '@/types/project';

type Props = {
  projects: Project[];
  footerLabel: string;
  locale: Locale;
  gridProps?: Partial<SimpleGridProps>;
};

export function ProjectsGrid({
  projects,
  footerLabel,
  locale,
  gridProps,
}: Props) {
  if (projects.length === 0) return null;

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing="xl"
      verticalSpacing="xl"
      {...gridProps}
    >
      {projects.map(project => (
        <PublicationCard
          key={project.id}
          topBadge={project.category}
          title={project.title}
          description={project.description}
          date={project.date}
          tags={{ items: projectStacks[project.id] || [], isColored: false }}
          footer={{
            label: footerLabel,
            href: `/${locale}/projects/${project.id}`,
          }}
        >
          {project.highlights && project.highlights.length > 0 && (
            <List spacing="xs" size="sm" c="light-dark(dark.6, dark.2)">
              {project.highlights.map((highlight, index) => (
                <List.Item key={index}>{highlight}</List.Item>
              ))}
            </List>
          )}
        </PublicationCard>
      ))}
    </SimpleGrid>
  );
}
