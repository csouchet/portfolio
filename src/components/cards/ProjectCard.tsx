import Link from 'next/link';

import { Card, Text, Group, Badge, Stack, Title } from '@mantine/core';

import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';
import { Project } from '@/types/project';

/**
 * Transforme le texte pour le rendre plus impactant
 */
function toImpact(result?: string, fallback?: string) {
  if (!result) return fallback ?? '';

  return result
    .replace(/^Mise en place d[’']une?\s/i, '')
    .replace(/^Mise en place de\s/i, '')
    .replace(/^Création d[’']une?\s/i, '')
    .replace(/^Création de\s/i, '')
    .replace(/^Construction d[’']une?\s/i, '')
    .trim();
}

/**
 * Améliore légèrement le wording sans toucher à la data
 */
function rewrite(text?: string) {
  if (!text) return '';

  return text
    .replace(/Mise en place/g, 'Construction')
    .replace(/Création/g, 'Conception');
}

type Props = {
  project: Project;
  content: ReturnType<typeof getContent>['projects'];
  locale: Locale;
};

export function ProjectCard({ project, content, locale }: Props) {
  const impact = toImpact(project.caseStudy?.results, project.description);

  const mainAction = project.caseStudy?.actions?.[0];

  const scope = project.parent ? content.card.subproject : content.card.main;

  return (
    <Link
      href={`/${locale}/projects/${project.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card
        withBorder
        radius="md"
        p="lg"
        style={{
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: project.featured
            ? '2px solid var(--mantine-color-blue-5)'
            : undefined,
        }}
      >
        <Stack gap="sm">
          {/* Header */}
          <Group justify="space-between" align="center">
            <Group gap={6}>
              <Badge variant="light" color="red">
                {project.category}
              </Badge>
            </Group>

            <Text size="xs" c="dimmed">
              {project.company}
            </Text>
          </Group>

          {/* Title */}
          <Title order={4}>{project.title}</Title>

          {/* Scope */}
          <Text size="xs" c="dimmed">
            {scope}
          </Text>

          {/* 💥 Impact */}
          <Text fw={500}>{impact}</Text>

          {/* Description */}
          <Text size="sm" c="dimmed">
            {rewrite(project.description)}
          </Text>

          {/* Action principale */}
          {mainAction && <Text size="sm">• {rewrite(mainAction)}</Text>}

          {/* Contributions */}
          {project.contributions && (
            <Group gap={6} mt="xs">
              {project.contributions.map(c => (
                <Badge key={c} size="xs" variant="light">
                  {c}
                </Badge>
              ))}
            </Group>
          )}
        </Stack>
      </Card>
    </Link>
  );
}
