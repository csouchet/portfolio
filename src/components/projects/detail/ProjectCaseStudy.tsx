'use client';

import {
  IconAlertTriangleFilled,
  IconCheckFilled,
  IconFlagFilled,
  IconReportSearch,
  IconTrophy,
} from '@tabler/icons-react';

import { Grid, Stack, Text } from '@mantine/core';

import { CustomList } from '@/components/layout/CustomList';
import { HighlightPaper } from '@/components/layout/HighlightPaper'; // Import du nouveau composant
import { Section } from '@/components/layout/Section';
import { getContent } from '@/lib/i18n';
import { Project } from '@/types/project';

type Props = {
  project: Project;
  content: ReturnType<typeof getContent>['projects']['project']['caseStudy'];
};

export function ProjectCaseStudy({ project, content }: Props) {
  if (!project.caseStudy) return null;

  return (
    <Section id="casestudy" title={content.title} icon={IconReportSearch}>
      <Grid gap="xl">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="xl">
            {project.caseStudy.context && (
              <HighlightPaper
                title={content.contextTitle}
                color="violet"
                icon={IconFlagFilled}
              >
                <Text variant="reading">{project.caseStudy.context}</Text>
              </HighlightPaper>
            )}

            {project.caseStudy.problems && (
              <HighlightPaper
                title={content.problemsTitle}
                color="brand"
                icon={IconAlertTriangleFilled}
              >
                <CustomList
                  iconColor="brand"
                  items={project.caseStudy.problems}
                />
              </HighlightPaper>
            )}

            {project.caseStudy.actions && (
              <HighlightPaper
                title={content.actionsTitle}
                color="sage"
                icon={IconCheckFilled}
              >
                <CustomList
                  iconColor="sage"
                  items={project.caseStudy.actions}
                />
              </HighlightPaper>
            )}
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          {project.caseStudy.results && (
            <HighlightPaper
              title={content.resultsTitle}
              color="blue"
              icon={IconTrophy}
              h="100%"
            >
              <Text variant="reading">{project.caseStudy.results}</Text>
            </HighlightPaper>
          )}
        </Grid.Col>
      </Grid>
    </Section>
  );
}
