'use client';

import { Text, Group, Badge, Stack, Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { Project } from '@/types/project';
import { BaseCard } from './BaseCard';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <BaseCard>
      <Stack gap="sm">
        {/* Title */}
        <Text fw={600} size="lg">
          {project.title}
        </Text>

        {/* Description */}
        <Text size="sm" c="dimmed" lineClamp={3}>
          {project.description}
        </Text>

        {/* Stack */}
        <Group gap="xs">
          {project.stack.map(tech => (
            <Badge key={tech} variant="light" color="brand">
              {tech}
            </Badge>
          ))}
        </Group>

        {/* CTA */}
        <Button
          component="a"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          color="brand"
          leftSection={<IconBrandGithub size={16} />}
          mt="sm"
          styles={{
            root: {
              fontWeight: 500,
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(99,102,241,0.12)',
              transition: 'all 150ms ease',

              '&:hover': {
                backgroundColor: 'rgba(99,102,241,0.2)',
                transform: 'translateY(-1px)',
              },

              '&:focusVisible': {
                outline: '2px solid var(--mantine-color-brand-5)',
                outlineOffset: 2,
              },
            },
          }}
        >
          Voir sur GitHub
        </Button>
      </Stack>
    </BaseCard>
  );
}
