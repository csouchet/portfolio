import React from 'react';

import Link from 'next/link';

import { Anchor, SimpleGrid } from '@mantine/core';

import { NavKey } from '@/types/navigation';

type Props = { locale: string; labels: Record<string, string> };

const navLinks: NavKey[] = [
  'projects',
  'services',
  'about',
  'articles',
  'contact',
];

export function NavLinks({ locale, labels }: Props) {
  return (
    <SimpleGrid
      cols={2}
      spacing="xl"
      verticalSpacing="xs"
      mx="auto"
      styles={{
        root: {
          width: 'fit-content',
          gridTemplateColumns: 'max-content max-content',
        },
      }}
    >
      {navLinks.map(key => (
        <Anchor
          key={key}
          component={Link}
          href={`/${locale}/${key}`}
          c="dimmed"
          fw={500}
          fz="sm"
        >
          {labels[key]}
        </Anchor>
      ))}
    </SimpleGrid>
  );
}
