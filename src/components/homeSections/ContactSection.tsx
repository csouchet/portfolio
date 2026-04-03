'use client';

import Link from 'next/link';

import { Text, Stack, Button } from '@mantine/core';

import { HomeSection } from './HomeSection';

export function ContactSection() {
  return (
    <HomeSection title="Travaillons ensemble">
      <Stack align="center" gap="md" ta="center">
        <Text size="lg">
          Un système complexe à stabiliser ou un projet à structurer ?
        </Text>

        <Button component={Link} href="/contact" radius="xl" size="md">
          Discutons-en
        </Button>

        <Text size="sm" c="dimmed">
          Freelance · Remote / Grenoble
        </Text>
      </Stack>
    </HomeSection>
  );
}
