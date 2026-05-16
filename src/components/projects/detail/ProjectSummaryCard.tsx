'use client';

import { IconBriefcase, IconExternalLink } from '@tabler/icons-react';

import { Badge, Paper, Group, rem, Text } from '@mantine/core';

import { COMPANY_URLS } from '@/data/companies';
import { useAccentColor } from '@/hooks/useColors';
import { getContent } from '@/lib/i18n';
import { Project } from '@/types/project';

type Props = {
  project: Project;
  content: ReturnType<typeof getContent>['projects']['project']['summary'];
};

export function ProjectSummaryCard({ project, content }: Props) {
  const getAccentColor = useAccentColor();
  const companyUrl = COMPANY_URLS[project.company];

  return (
    <Group gap="md">
      <Paper variant="summary">
        <Badge
          size="lg"
          color="brand"
          variant="light"
          leftSection={<IconBriefcase size={rem(14)} />}
          {...(companyUrl
            ? {
                rightSection: <IconExternalLink size={rem(14)} />,
                component: 'a',
                href: companyUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
                style: {
                  cursor: 'pointer',
                },
              }
            : {})}
        >
          {project.company}
        </Badge>
      </Paper>

      {project.contributions && project.contributions.length > 0 && (
        <Paper variant="summary">
          <Group gap="sm">
            <Text variant="body">{content.contributions}</Text>
            {project.contributions.map(contribution => (
              <Badge
                key={contribution}
                color={getAccentColor(contribution)}
                size="lg"
                variant="light"
              >
                {contribution}
              </Badge>
            ))}
          </Group>
        </Paper>
      )}
    </Group>
  );
}
