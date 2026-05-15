'use client';

import Link from 'next/link';

import { IconUser } from '@tabler/icons-react';

import { Stack, Group, Button, Image } from '@mantine/core';

import { ContactBanner } from '@/components/ContactBanner';
import { CTAButton } from '@/components/CTAButton';
import { CustomList } from '@/components/layout/CustomList';
import { PageLayout } from '@/components/layout/PageLayout';
import { Section } from '@/components/layout/Section';
import { SpotlightGrid } from '@/components/layout/SpotlightGrid';
import { getContent } from '@/lib/i18n';

import { AboutJourney } from './AboutJourney';
import { AboutPersonal } from './AboutPersonal';

type Props = {
  content: ReturnType<typeof getContent>['about'];
};

const highlightColors = ['sage', 'violet'];

export function AboutClient({ content }: Props) {
  const hero = content.hero;

  const headerExtraContent = (
    <Stack gap="xl">
      <CustomList
        items={hero.highlights}
        size="md"
        iconColor={index => highlightColors[index % highlightColors.length]}
        styles={{
          item: {
            fontWeight: 600,
          },
        }}
      />

      <Group>
        <CTAButton content={hero.cta.contact} href="/contact" />
        <Button component={Link} href="/projects" variant="outline">
          {hero.cta.projects}
        </Button>
      </Group>
    </Stack>
  );

  const headerImage = (
    <Image
      src="/portrait.png"
      alt="Céline Souchet"
      radius="xl"
      h={400}
      w="auto"
      mx="auto"
      fit="contain"
      style={{
        boxShadow: 'var(--mantine-shadow-xl)',
        border:
          '1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6))',
      }}
    />
  );

  return (
    <PageLayout
      headerChildren={headerExtraContent}
      headerRightSection={headerImage}
      badgeIcon={IconUser}
      {...hero}
    >
      <Section
        title={content.philosophy.title}
        description={content.philosophy.description}
      >
        <SpotlightGrid
          items={content.philosophy.items}
          category="philosophy"
          spotlightProps={{ layout: 'horizontal', withCard: true }}
        />
      </Section>

      <AboutJourney content={content.journey} />

      <AboutPersonal content={content.personal} />

      <ContactBanner
        title={content.cta.title}
        description={content.cta.description}
        cta={content.cta.cta}
      />
    </PageLayout>
  );
}
