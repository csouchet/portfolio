'use client';

import { Text, Group, Badge, Stack, Button, Divider, Box } from '@mantine/core';
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
      <Stack gap="md">
        {/* Header */}
        <Stack gap={6}>
          {project.category === 'product' && (
            <Badge variant="light" color="red" w="fit-content">
              Produit
            </Badge>
          )}

          <Text fw={600} size="lg">
            {project.title}
          </Text>

          <Text size="sm" c="dimmed" lineClamp={3}>
            {project.description}
          </Text>
        </Stack>

        {/* Highlights */}
        {project.highlights && (
          <Stack gap={4}>
            {project.highlights.slice(0, 3).map(item => (
              <Text key={item} size="sm" fw={500}>
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

        {/* Stack (désaccentuée) */}
        {project.stack && (
          <Group gap="xs">
            {project.stack.map(tech => (
              <Badge key={tech} variant="subtle" color="gray">
                {tech}
              </Badge>
            ))}
          </Group>
        )}

        {/* CTA */}
        {project.github && (
          <Button
            component="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: 'brand.5', to: 'brand.7' }}
            leftSection={<IconBrandGithub size={16} />}
            w="fit-content"
            style={{
              fontWeight: 500,
              transition: 'all 150ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--mantine-shadow-sm)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Voir sur GitHub
          </Button>
        )}

        {/* Sous-projets */}
        {isParent && (
          <>
            <Divider />

            <Stack gap="xs">
              <Text size="sm" fw={500}>
                Sous-projets
              </Text>

              {/* Container léger */}
              <Box
                p="sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  border: '1px solid var(--mantine-color-dark-4)',
                }}
              >
                <Stack gap="xs">
                  {children.map(child => (
                    <Box
                      key={child.id}
                      p="xs"
                      style={{
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 120ms ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background =
                          'var(--mantine-color-default-hover)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <Stack gap={2}>
                        <Text size="sm" fw={500}>
                          {child.title}
                        </Text>

                        <Text size="xs" c="dimmed" lineClamp={2}>
                          {child.description}
                        </Text>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </>
        )}
      </Stack>
    </BaseCard>
  );
}
