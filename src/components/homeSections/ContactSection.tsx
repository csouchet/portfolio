'use client';

import Link from 'next/link';

import { Text, Stack, Button } from '@mantine/core';

import { useContent } from '@/hooks/useContent';

import { HomeSection } from './HomeSection';

export function ContactSection() {
  const { home, locale } = useContent();
  const content = home.contact;

  return (
    <HomeSection title={content.title}>
      <Stack align="center" gap="md" ta="center">
        <Text size="lg">{content.description}</Text>

        <Button
          component={Link}
          href={`/${locale}/contact`}
          radius="xl"
          size="md"
        >
          {content.cta}
        </Button>

        <Text size="sm" c="dimmed">
          {content.footer}
        </Text>
      </Stack>
    </HomeSection>
  );
}
