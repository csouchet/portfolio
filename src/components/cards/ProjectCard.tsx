'use client';

import Link from 'next/link';

import { IconBrandGithub, IconChevronRight } from '@tabler/icons-react';

import { Text, Group, Badge, Stack, Button, Divider, Box } from '@mantine/core';

import { contributionColor } from '@/lib/projectColors';
import { getChildProjects } from '@/lib/projects';
import { Project } from '@/types/project';

import { BaseCard } from './BaseCard';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const children = getChildProjects(project.id);
  const isParent = children.length > 0;
  const isOpenSource = !!project.github;

  return (
    <BaseCard
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)',
          opacity: 0,
          transition: 'opacity 200ms ease',
        }}
        className="card-glow"
      />

      <Stack gap="md">
        {/* HEADER */}
        <Stack gap={6}>
          <Group justify="space-between" align="center">
            {/* BADGES */}
            <Group gap="xs">
              {project.category === 'product' && (
                <Badge
                  variant="light"
                  color="red"
                  styles={{
                    root: { fontWeight: 600 },
                  }}
                >
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
                      letterSpacing: '0.02em',
                    },
                  }}
                >
                  Open source
                </Badge>
              )}
            </Group>

            {/* COMPANY */}
            <Text size="xs" c="dimmed" fw={500}>
              {project.company}
            </Text>
          </Group>

          {/* TITLE */}
          <Text fw={600} size="lg">
            <Link
              href={`/projects/${project.id}`}
              aria-label={`Voir le projet ${project.title}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {project.title}
            </Link>
          </Text>

          {/* DESCRIPTION */}
          <Text size="sm" c="dimmed" lineClamp={3}>
            {project.description}
          </Text>
        </Stack>

        {/* HIGHLIGHTS */}
        {project.highlights && (
          <Stack gap={2}>
            {project.highlights.map(item => (
              <Text key={item} size="sm" c="dimmed" style={{ lineHeight: 1.4 }}>
                <span style={{ opacity: 0.6 }}>•</span> {item}
              </Text>
            ))}
          </Stack>
        )}

        {/* CONTRIBUTIONS */}
        {project.contributions && (
          <Group gap="xs">
            {project.contributions.map(c => (
              <Badge key={c} color={contributionColor[c]} variant="light">
                {c}
              </Badge>
            ))}
          </Group>
        )}

        {/* STACK */}
        {project.stack && (
          <Group gap="xs">
            {project.stack.map(tech => (
              <Badge key={tech} variant="subtle" color="gray">
                {tech}
              </Badge>
            ))}
          </Group>
        )}

        {/* CTA GitHub */}
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
            Voir le code
          </Button>
        )}

        {/* SUBPROJECTS */}
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
                    <Link
                      key={child.id}
                      href={`/projects/${child.id}`}
                      aria-label={`Voir le sous-projet ${child.title}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Box
                        p="sm"
                        style={{
                          borderRadius: 8,
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
                    </Link>
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
