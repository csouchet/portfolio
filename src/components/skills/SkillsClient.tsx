'use client';

import { IconHeart } from '@tabler/icons-react';

import { rem } from '@mantine/core';

import { ContactBanner } from '@/components/ContactBanner';
import { PageLayout } from '@/components/layout/PageLayout';
import { Section } from '@/components/layout/Section';
import { SectionCard } from '@/components/layout/SectionCard';
import { SpotlightGrid } from '@/components/layout/SpotlightGrid';
import { getContent } from '@/lib/i18n';

import { SignatureSection } from './SignatureSection';
import { TechSection } from './TechSection';

type Props = {
  content: ReturnType<typeof getContent>['skills'] & {
    cta?: { title: string; description: string; cta: string };
  };
};

export function SkillsClient({ content }: Props) {
  return (
    <PageLayout {...content.hero}>
      <SectionCard
        title={content.approach.title}
        description={content.approach.description}
      >
        <SpotlightGrid
          items={content.approach.items}
          category="approch"
          spotlightProps={{ iconSize: 32 }}
          gridProps={{
            spacing: 'xxl',
            verticalSpacing: 'xxl',
            mt: { base: 'xl', md: rem(40) },
          }}
        />
      </SectionCard>

      <TechSection content={content.technical} />

      <Section title={content.softSkills.title} icon={IconHeart}>
        <SpotlightGrid
          items={content.softSkills.items}
          category="soft"
          spotlightProps={{ layout: 'horizontal', withCard: true }}
        />
      </Section>

      <SignatureSection content={content.signature} />

      <ContactBanner
        title={content.cta.title}
        description={content.cta.description}
        cta={content.cta.cta}
      />
    </PageLayout>
  );
}
