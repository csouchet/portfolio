import type { Metadata } from 'next';

import Link from 'next/link';
import { notFound } from 'next/navigation';

import { IconArrowLeft, IconBrandGithub } from '@tabler/icons-react';

import {
  Stack,
  Title,
  Text,
  Group,
  Badge,
  Button,
  Divider,
  Box,
} from '@mantine/core';

import { HomeSection } from '@/components/homeSections/HomeSection';
import { projects } from '@/data/projects';
import { getChildProjects } from '@/lib/projects';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Projet introuvable',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;

  const project = projects.find(p => p.id === id);

  if (!project) return notFound();

  const children = getChildProjects(project.id);

  return (
    <main>
      <HomeSection
        title={project.title}
        description={project.description}
        gradientPosition="left"
      >
        <Stack gap="xl" maw={720}>
          {/* BACK BUTTON */}
          <Link
            href="/projects"
            style={{ textDecoration: 'none', width: 'fit-content' }}
          >
            <Button variant="subtle" leftSection={<IconArrowLeft size={16} />}>
              Retour aux projets
            </Button>
          </Link>

          {/* META */}
          <Group gap="xs">
            {project.category && (
              <Badge variant="light">{project.category}</Badge>
            )}

            <Badge variant="subtle">{project.company}</Badge>

            {project.github && (
              <Badge color="green" variant="light">
                Open source
              </Badge>
            )}
          </Group>

          {/* HIGHLIGHTS */}
          {project.highlights && (
            <>
              <Divider />

              <Stack gap="xs">
                <Title order={3}>Highlights</Title>

                {project.highlights.map(item => (
                  <Text key={item} c="dimmed">
                    • {item}
                  </Text>
                ))}
              </Stack>
            </>
          )}

          {/* CONTRIBUTIONS */}
          {project.contributions && (
            <>
              <Divider />

              <Stack gap="xs">
                <Title order={3}>Contributions</Title>

                <Group gap="xs">
                  {project.contributions.map(c => (
                    <Badge key={c} variant="light">
                      {c}
                    </Badge>
                  ))}
                </Group>

                <Text c="dimmed" size="sm">
                  Contributions sur les aspects clés du projet : développement,
                  architecture et qualité.
                </Text>
              </Stack>
            </>
          )}

          {/* STACK */}
          {project.stack && (
            <>
              <Divider />

              <Stack gap="xs">
                <Title order={3}>Technical Stack</Title>

                <Group gap="xs">
                  {project.stack.map(tech => (
                    <Badge key={tech} variant="subtle">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </>
          )}

          {/* SUBPROJECTS */}
          {children.length > 0 && (
            <>
              <Divider />

              <Stack gap="md">
                <Title order={3}>Subprojects</Title>

                <Stack gap="sm">
                  {children.map(child => (
                    <Link
                      key={child.id}
                      href={`/projects/${child.id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Box
                        p="sm"
                        style={{
                          borderRadius: 12,
                          border:
                            '1px solid var(--mantine-color-default-border)',
                          transition: 'all 150ms ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'translateX(4px)';
                          e.currentTarget.style.background =
                            'var(--mantine-color-default-hover)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <Text fw={500}>{child.title}</Text>

                        <Text size="sm" c="dimmed">
                          {child.description}
                        </Text>
                      </Box>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </>
          )}

          {/* GITHUB CTA */}
          {project.github && (
            <>
              <Divider />

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: 'fit-content' }}
              >
                <Button
                  leftSection={<IconBrandGithub size={16} />}
                  variant="gradient"
                  gradient={{ from: 'brand.5', to: 'brand.7' }}
                >
                  Voir le code
                </Button>
              </a>
            </>
          )}
        </Stack>
      </HomeSection>
    </main>
  );
}
