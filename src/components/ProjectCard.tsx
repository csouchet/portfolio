'use client';

import { Card, Text, Group, Badge, Stack, Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { Project } from '@/types/project';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <Card
      component="a"
      href={project.github}
      target="_blank"
      radius="md"
      withBorder
      p="lg"
      style={theme => ({
        textDecoration: 'none',
        transition: 'all 150ms ease',

        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows.md,
            borderColor: 'var(--mantine-color-brand-4)',
          },
        },

        '&:focusVisible': {
          outline: `2px solid var(--mantine-color-brand-5)`,
          outlineOffset: 2,
        },
      })}
    >
      <Stack gap="sm">
        <Text fw={600} size="lg">
          {project.title}
        </Text>

        <Text
          size="sm"
          c="dimmed"
          style={theme => ({
            maxWidth: theme.other.layout.textMaxWidth,
          })}
          lineClamp={3}
        >
          {project.description}
        </Text>

        <Group gap="xs">
          {project.stack.map(tech => (
            <Badge key={tech} variant="light" color="brand">
              {tech}
            </Badge>
          ))}
        </Group>

        <Button
          variant="light"
          color="brand"
          leftSection={<IconBrandGithub size={16} />}
          mt="sm"
        >
          Voir sur GitHub
        </Button>
      </Stack>
    </Card>
  );
}
