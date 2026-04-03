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
} from '@mantine/core';

import { HomeSection } from '@/components/homeSections/HomeSection';
import { projects } from '@/data/projects';
import { contributionColor, categoryColor } from '@/lib/projectColors';
import { getChildProjects } from '@/lib/projects';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) return { title: 'Projet introuvable' };

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
          <Link href="/projects">
            <Button variant="subtle" leftSection={<IconArrowLeft size={16} />}>
              Retour aux projets
            </Button>
          </Link>

          {/* META */}
          <Group gap="xs">
            {project.category && (
              <Badge color={categoryColor[project.category]}>
                {project.category.toUpperCase()}
              </Badge>
            )}

            <Badge variant="subtle">{project.company.toUpperCase()}</Badge>

            {project.github && <Badge color="green">Open source</Badge>}
          </Group>

          {/* CONTEXTE */}
          <Divider />
          <Stack gap="xs">
            <Title order={3}>Contexte</Title>
            <Text c="dimmed">{project.description}</Text>
          </Stack>

          {/* PROBLÈMES */}
          {project.highlights && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>Problèmes</Title>
                {project.highlights.map(item => (
                  <Text key={item} c="dimmed">
                    • {item}
                  </Text>
                ))}
              </Stack>
            </>
          )}

          {/* ACTIONS */}
          {project.contributions && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>Actions</Title>
                <Group>
                  {project.contributions.map(c => (
                    <Badge key={c} color={contributionColor[c]}>
                      {c}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </>
          )}

          {/* RESULT */}
          <Divider />
          <Stack gap="xs">
            <Title order={3}>Résultats</Title>
            <Text>
              Amélioration de la fiabilité, de la performance et de la capacité
              à livrer rapidement.
            </Text>
          </Stack>

          {/* STACK */}
          {project.stack && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>Stack</Title>
                <Group>
                  {project.stack.map(s => (
                    <Badge key={s} variant="subtle">
                      {s}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </>
          )}

          {/* CHILDREN */}
          {children.length > 0 && (
            <>
              <Divider />
              <Stack>
                <Title order={3}>Sous-projets</Title>
                {children.map(child => (
                  <Link key={child.id} href={`/projects/${child.id}`}>
                    <Text fw={500}>{child.title}</Text>
                    <Text size="sm" c="dimmed">
                      {child.description}
                    </Text>
                  </Link>
                ))}
              </Stack>
            </>
          )}

          {/* CTA */}
          {project.github && (
            <>
              <Divider />
              <a href={project.github} target="_blank">
                <Button leftSection={<IconBrandGithub size={16} />}>
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
