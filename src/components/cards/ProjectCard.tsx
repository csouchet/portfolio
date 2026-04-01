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
};

export function ProjectCard({ project }: Props) {
  const children = getChildProjects(project.id);
  const isParent = children.length > 0;

  return (
    <BaseCard>
      <Stack gap="lg">
        {/* ---------------- HEADER ---------------- */}
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

        {/* ---------------- HIGHLIGHTS ---------------- */}
        {project.highlights && (
          <Stack gap={4}>
            {project.highlights.map(item => (
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
            {project.stack.map(tech => (
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

        {/* ---------------- SUB PROJECTS ---------------- */}
        {isParent && (
          <>
            <Divider />

            <Stack gap="xs">
              <Text size="sm" fw={500}>
                Sous-projets
              </Text>

              {/* Container */}
              <Box
                p="sm"
                style={{
                  background:
                    'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.03))',
                  borderRadius: '10px',
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
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 140ms ease',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '8px',
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
                      {/* Texte */}
                      <Stack gap={2} style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                          {child.title}
                        </Text>

                        <Text size="xs" c="dimmed" lineClamp={2}>
                          {child.description}
                        </Text>
                      </Stack>

                      {/* Icône navigation (future-proof) */}
                      <Box
                        style={{
                          opacity: 0.4,
                          transition: 'opacity 120ms ease',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        className="child-arrow"
                      >
                        <IconChevronRight size={16} />
                      </Box>
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
