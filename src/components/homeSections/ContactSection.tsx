'use client';

import Link from 'next/link';

import { Text, Stack, Button } from '@mantine/core';

import { homeContent } from '@/content/fr/home';

import { HomeSection } from './HomeSection';

export function ContactSection() {
  const content = homeContent.contact;

  return (
    <HomeSection title={content.title}>
      <Stack align="center" gap="md" ta="center">
        <Text size="lg">{content.description}</Text>

        <Button component={Link} href="/contact" radius="xl" size="md">
          {content.cta}
        </Button>

        <Text size="sm" c="dimmed">
          {content.footer}
        </Text>
      </Stack>
    </HomeSection>
  );
}
