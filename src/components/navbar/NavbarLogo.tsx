'use client';

import Link from 'next/link';

import { Group, Text, UnstyledButton, Image, rem } from '@mantine/core';

import { Locale } from '@/types/i18n';

type Props = {
  locale: Locale;
  name: string;
};

export function NavbarLogo({ locale, name }: Props) {
  return (
    <UnstyledButton
      component={Link}
      href={`/${locale}`}
      style={{ userSelect: 'none' }}
    >
      <Group gap="sm" align="center">
        <Image src="/logo-dark.svg" alt="" h={rem(45)} w="auto" />

        <Text fw={700} size="lg" c="white" style={{ letterSpacing: '-0.01em' }}>
          {name}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
