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
import { getContent } from '@/lib/i18n';
import { categoryColor, contributionColor } from '@/lib/projectColors';
import { getChildProjects, getProjects } from '@/lib/projects';
import { Locale } from '@/types/i18n';

type Props = {
  params: Promise<{ locale: Locale; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;

  const projects = getProjects(locale);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return { title: 'Not found' };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/${locale}/projects/${id}`,
      languages: {
        fr: `/fr/projects/${id}`,
        en: `/en/projects/${id}`,
      },
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, id } = await params;

  const content = getContent(locale);
  const projectsContent = content.projects;

  const projects = getProjects(locale);
  const project = projects.find(p => p.id === id);

  if (!project) return notFound();

  const children = getChildProjects(project.id, locale);

  return (
    <main>
      <HomeSection
        title={project.title}
        description={project.description}
        gradientPosition="left"
      >
        <Stack gap="xl" maw={720}>
          {/* BACK */}
          <Link href={`/${locale}/projects`} style={{ textDecoration: 'none' }}>
            <Button variant="subtle" leftSection={<IconArrowLeft size={16} />}>
              {projectsContent.hero.title}
            </Button>
          </Link>

          {/* META */}
          <Group gap="xs">
            {project.category && (
              <Badge
                variant="light"
                color={categoryColor[project.category] ?? 'gray'}
              >
                {project.category.toUpperCase()}
              </Badge>
            )}

            <Badge variant="subtle" color="gray">
              {project.company.toUpperCase()}
            </Badge>

            {project.github && (
              <Badge color="green" variant="light">
                Open source
              </Badge>
            )}

            {project.contributions?.includes('ci-cd') && (
              <Badge color="cyan" variant="light">
                Platform
              </Badge>
            )}
          </Group>

          {/* CONTEXTE */}
          {project.caseStudy?.context && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>Contexte</Title>
                <Text c="dimmed">{project.caseStudy.context}</Text>
              </Stack>
            </>
          )}

          {/* CASE STUDY */}
          {project.caseStudy?.problems && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>{projectsContent.caseStudy.problems}</Title>
                {project.caseStudy.problems.map(problem => (
                  <Text key={problem} c="dimmed">
                    • {problem}
                  </Text>
                ))}
              </Stack>
            </>
          )}

          {/* ACTIONS */}
          {project.caseStudy?.actions && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>{projectsContent.caseStudy.actions}</Title>
                {project.caseStudy.actions.map(action => (
                  <Text key={action} c="dimmed">
                    • {action}
                  </Text>
                ))}
              </Stack>
            </>
          )}

          {/* RESULTATS */}
          {project.caseStudy?.results && (
            <>
              <Divider />
              <Stack gap="xs">
                <Title order={3}>{projectsContent.caseStudy.results}</Title>
                <Text>{project.caseStudy.results}</Text>
              </Stack>
            </>
          )}

          {/* FALLBACK HIGHLIGHTS */}
          {!project.caseStudy && project.highlights && (
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
                    <Badge key={c} color={contributionColor[c]} variant="light">
                      {c}
                    </Badge>
                  ))}
                </Group>

                <Text size="sm" c="dimmed">
                  Intervention sur les aspects clés du système : développement,
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
                <Title order={3}>Stack technique</Title>

                <Group gap="xs">
                  {project.stack.map(tech => (
                    <Badge key={tech} variant="subtle" color="gray">
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
                <Title order={3}>Sous-projets</Title>

                <Stack gap="sm">
                  {children.map(child => (
                    <Link
                      key={child.id}
                      href={`/${locale}/projects/${child.id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Box
                        p="sm"
                        style={{
                          borderRadius: 10,
                          border:
                            '1px solid var(--mantine-color-default-border)',
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

          {/* GITHUB */}
          {project.github && (
            <>
              <Divider />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  leftSection={<IconBrandGithub size={16} />}
                  variant="gradient"
                  gradient={{ from: 'brand.5', to: 'brand.7' }}
                >
                  {projectsContent.caseStudy.cta}
                </Button>
              </a>
            </>
          )}
        </Stack>
      </HomeSection>
    </main>
  );
}
