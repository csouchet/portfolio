'use client';

import Link from 'next/link';

import {
  IconArrowLeft,
  IconArrowRight,
  IconLayoutGrid,
} from '@tabler/icons-react';

import { Button, Group } from '@mantine/core';

import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';
import { Project } from '@/types/project';

type Props = {
  previousProject?: Project;
  nextProject?: Project;
  locale: Locale;
  content: ReturnType<typeof getContent>['projects']['project']['navigation'];
};

export function ProjectNavigation({
  previousProject,
  nextProject,
  locale,
  content,
}: Props) {
  return (
    <Group justify="space-between">
      {previousProject ? (
        <Button
          component={Link}
          href={`/${locale}/projects/${previousProject.id}`}
          variant="outline"
          leftSection={<IconArrowLeft />}
        >
          {content.previous}
        </Button>
      ) : (
        <Button variant="outline" leftSection={<IconArrowLeft />} disabled>
          {content.previous}
        </Button>
      )}

      <Button
        component={Link}
        href={`/${locale}/projects`}
        variant="outline"
        leftSection={<IconLayoutGrid />}
      >
        {content.all}
      </Button>

      {nextProject ? (
        <Button
          component={Link}
          href={`/${locale}/projects/${nextProject.id}`}
          variant="outline"
          rightSection={<IconArrowRight />}
        >
          {content.next}
        </Button>
      ) : (
        <Button variant="outline" rightSection={<IconArrowRight />} disabled>
          {content.next}
        </Button>
      )}
    </Group>
  );
}
