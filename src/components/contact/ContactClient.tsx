'use client';

import { IconCalendarEvent } from '@tabler/icons-react';

import { Box, Grid, Group, Text, rem, Card } from '@mantine/core';

import { PageLayout } from '@/components/layout/PageLayout';
import { SpotlightGrid } from '@/components/layout/SpotlightGrid';
import { freelanceLinks } from '@/data/freelance';
import { socialLinks } from '@/data/social';
import { getContent } from '@/lib/i18n';
import { Link } from '@/types/link';

import { ContactForm } from './ContactForm';
import { ContactLinks } from './ContactLinks';

type Props = {
  content: ReturnType<typeof getContent>['contact'];
};

export function ContactClient({ content }: Props) {
  const ENABLE_FORM = false;

  const filteredSocials = socialLinks.filter(
    link => link.name === 'GitHub' || link.name === 'LinkedIn',
  );

  const allLinks: Link[] = [...freelanceLinks, ...filteredSocials];

  return (
    <PageLayout {...content.hero}>
      <Grid
        gap={{ base: rem(40), lg: rem(40) }}
        align="stretch"
        justify="center"
      >
        <Grid.Col span={{ base: 12, md: ENABLE_FORM ? 5 : 8 }}>
          <ContactLinks
            title={content.reachMe.title}
            intro={content.reachMe.intro}
            links={allLinks}
          />
        </Grid.Col>

        {ENABLE_FORM && (
          <Grid.Col span={{ base: 12, md: 7 }}>
            <ContactForm
              title={content.form.title}
              content={content.form.content}
            />
          </Grid.Col>
        )}
      </Grid>

      <Box
        mx="auto"
        style={{
          border: '1px solid var(--mantine-other-border-default)',
          borderRadius: 'var(--mantine-radius-xl)',
          backgroundColor: 'var(--mantine-other-surface-elevated)',
          boxShadow: 'var(--mantine-other-shadows-card)',
        }}
      >
        <Group gap="sm" wrap="nowrap" justify="center">
          <IconCalendarEvent size={rem(20)} color="brand" />
          <Text variant="metadata" fw={500}>
            {content.availability}
          </Text>
        </Group>
      </Box>

      <Card variant="banner">
        <SpotlightGrid
          items={content.features}
          category="feature"
          spotlightProps={{ iconSize: 30 }}
          gridProps={{ spacing: 'xxl', verticalSpacing: 'xxl' }}
        />
      </Card>
    </PageLayout>
  );
}
