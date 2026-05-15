'use client';

import { IconFingerprint, IconTarget } from '@tabler/icons-react';

import { SimpleGrid } from '@mantine/core';

import { SectionCard } from '@/components/layout/SectionCard';
import { getContent } from '@/lib/i18n';

type Props = {
  solutionsContent: ReturnType<typeof getContent>['home']['solutions'];
  differentiatorsContent: ReturnType<
    typeof getContent
  >['home']['differentiators'];
};

export function ValueProposition({
  solutionsContent,
  differentiatorsContent,
}: Props) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
      <SectionCard
        title={solutionsContent.title}
        icon={IconTarget}
        iconColor="orange"
        description={solutionsContent.intro}
        items={solutionsContent.items}
      />

      <SectionCard
        title={differentiatorsContent.title}
        icon={IconFingerprint}
        iconColor="violet"
        description={differentiatorsContent.intro}
        items={differentiatorsContent.items}
      />
    </SimpleGrid>
  );
}
