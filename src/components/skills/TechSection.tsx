'use client';

import { IconCode } from '@tabler/icons-react';

import { SimpleGrid } from '@mantine/core';

import { Section } from '@/components/layout/Section';
import { getContent } from '@/lib/i18n';

import { TechCard } from './TechCard';

type Props = {
  content: ReturnType<typeof getContent>['skills']['technical'];
};

export function TechSection({ content }: Props) {
  return (
    <Section title={content.title} icon={IconCode}>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {content.categories.map((cat, index) => (
          <TechCard key={index} category={cat} index={index} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
