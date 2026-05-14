'use client';

import Link from 'next/link';

import { IconHome } from '@tabler/icons-react';

import { Anchor, Breadcrumbs, Text, rem } from '@mantine/core';

import { Locale } from '@/types/i18n';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
  locale: Locale;
  activeItem: string;
};

export function PageBreadcrumbs({ items, locale, activeItem }: Props) {
  return (
    <Breadcrumbs>
      <Anchor component={Link} href={`/${locale}`} c="dimmed">
        <IconHome size={rem(16)} style={{ display: 'block' }} />
      </Anchor>

      {items.map((item, index) => (
        <Anchor key={index} component={Link} href={item.href} c="dimmed">
          {item.label}
        </Anchor>
      ))}

      <Text>{activeItem}</Text>
    </Breadcrumbs>
  );
}
