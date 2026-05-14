'use client';

import Link from 'next/link';

import { IconBrandGithub } from '@tabler/icons-react';

import { Button, Group } from '@mantine/core';

import { CTAButton } from '@/components/CTAButton';
import { getContent } from '@/lib/i18n';

type Props = {
  github?: string;
  hasChildren: boolean;
  content: ReturnType<typeof getContent>['projects']['project']['actions'];
};

export function ProjectActions({ github, hasChildren, content }: Props) {
  if (!github && !hasChildren) {
    return null;
  }

  return (
    <Group gap="md">
      {github && (
        <Button
          component={Link}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandGithub />}
        >
          {content.viewGithub}
        </Button>
      )}

      {hasChildren && (
        <CTAButton
          content={content.viewRelated}
          href="#subprojects"
          variant="outline"
        />
      )}
    </Group>
  );
}
