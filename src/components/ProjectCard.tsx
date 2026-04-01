'use client';

import { Text, Group, Badge, Stack, Button, Divider } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { Project } from '@/types/project';
import { BaseCard } from './BaseCard';
import { getChildProjects } from '@/lib/projects';

type Props = {
  project: Project;
};

const contributionColor: Record<string, string> = {
  frontend: 'blue',
  backend: 'orange',
  'ci-cd': 'cyan',
  testing: 'grape',
  release: 'lime',
  devex: 'violet',
  architecture: 'pink',
  product: 'red',
};

export function ProjectCard({ project }: Props) {
  const children = getChildProjects(project.id);
  const isParent = children.length > 0;

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

        {/* Highlights */}
        {project.highlights && (
          <Stack gap={4}>
            {project.highlights.slice(0, 3).map(item => (
              <Text key={item} size="xs" c="dimmed">
                • {item}
              </Text>
            ))}
          </Stack>
        )}

        {/* Contributions */}
        {project.contributions && (
          <Group gap="xs">
            {project.contributions.map(c => (
              <Badge key={c} color={contributionColor[c]} variant="light">
                {c}
              </Badge>
            ))}
          </Group>
        )}

        {/* Stack */}
        {project.stack && (
          <Group gap="xs">
            {project.stack.map(tech => (
              <Badge key={tech} variant="light" color="brand">
                {tech}
              </Badge>
            ))}
          </Group>
        )}

        {/* GitHub */}
        {project.github && (
          <Button
            component="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="brand"
            leftSection={<IconBrandGithub size={16} />}
            mt="sm"
            styles={theme => ({
              root: {
                fontWeight: 500,
                alignSelf: 'flex-start',
                transition: 'all 150ms ease',

                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows.sm,
                },

                '&:focusVisible': {
                  outline: '2px solid var(--mantine-color-brand-5)',
                  outlineOffset: 2,
                },
              },
            })}
          >
            Voir sur GitHub
          </Button>
        )}

        {/* Sous-projets */}
        {isParent && (
          <>
            <Divider my="sm" />

            <Stack gap="xs">
              <Text size="sm" fw={500}>
                Sous-projets
              </Text>

              {children.map(child => (
                <Stack key={child.id} gap={2}>
                  <Text size="sm" fw={500}>
                    {child.title}
                  </Text>
                  <Text size="xs" c="dimmed" lineClamp={2}>
                    {child.description}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </BaseCard>
  );
}
