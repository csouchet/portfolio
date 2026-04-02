'use client';

import { IconBrandGithub, IconChevronRight } from '@tabler/icons-react';

import { Text, Group, Badge, Stack, Button, Divider, Box } from '@mantine/core';

import { getChildProjects } from '@/lib/projects';
import { Project } from '@/types/project';

import { BaseCard } from './BaseCard';

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
  packaging: 'gray',
};

export function ProjectCard({ project }: Props) {
  const children = getChildProjects(project.id);
  const isParent = children.length > 0;
  const isOpenSource = !!project.github;

  return (
    <BaseCard>
      <Stack gap="md">
        {/* ---------------- HEADER ---------------- */}
        <Stack gap={6}>
          <Group justify="space-between" align="center">
            {/* TYPE */}
            <Group gap="xs">
              {project.category === 'product' && (
                <Badge variant="light" color="red">
                  Produit
                </Badge>
              )}

              {isOpenSource && (
                <Badge
                  variant="subtle"
                  color="green"
                  styles={{
                    root: {
                      fontWeight: 500,
                    },
                  }}
                >
                  Open source
                </Badge>
              )}
            </Group>

            {/* COMPANY */}
            <Text size="xs" c="dimmed">
              {project.company}
            </Text>
          </Group>

          <Text fw={600} size="lg">
            {project.title}
          </Text>

          <Text size="sm" c="dimmed" lineClamp={3}>
            {project.description}
          </Text>
        </Stack>

        {/* ---------------- HIGHLIGHTS ---------------- */}
        {project.highlights && (
          <Stack gap={4}>
            {project.highlights.slice(0, 3).map(item => (
              <Text key={item} size="sm" fw={500}>
                • {item}
              </Text>
            ))}
          </Stack>
        )}

        {/* ---------------- CONTRIBUTIONS ---------------- */}
        {project.contributions && (
          <Group gap="xs">
            {project.contributions.map(c => (
              <Badge key={c} color={contributionColor[c]} variant="light">
                {c}
              </Badge>
            ))}
          </Group>
        )}

        {/* ---------------- STACK ---------------- */}
        {project.stack && (
          <Group gap="xs">
            {project.stack.slice(0, 6).map(tech => (
              <Badge key={tech} variant="subtle" color="gray">
                {tech}
              </Badge>
            ))}
          </Group>
        )}

        {/* ---------------- CTA ---------------- */}
        {project.github && (
          <Button
            component="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            rightSection={<IconBrandGithub size={16} />}
            styles={{
              root: {
                paddingInline: 0,
                fontWeight: 500,
              },
            }}
          >
            Voir le code
          </Button>
        )}

        {/* ---------------- SUB PROJECTS ---------------- */}
        {isParent && (
          <>
            <Divider />

            <Stack gap="xs">
              <Text size="sm" fw={500}>
                Sous-projets
              </Text>

              <Box
                p="sm"
                style={{
                  background:
                    'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.03))',
                  borderRadius: 10,
                  border:
                    '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))',
                }}
              >
                <Stack gap="xs">
                  {children.map(child => (
                    <Box
                      key={child.id}
                      p="sm"
                      style={{
                        borderRadius: 8,
                        cursor: 'pointer',
                        transition: 'all 120ms ease',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background =
                          'var(--mantine-color-default-hover)';
                        e.currentTarget.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <Stack gap={2} style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                          {child.title}
                        </Text>

                        <Text size="xs" c="dimmed" lineClamp={2}>
                          {child.description}
                        </Text>
                      </Stack>

                      <IconChevronRight size={16} opacity={0.4} />
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
