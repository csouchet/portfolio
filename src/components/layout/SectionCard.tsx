'use client';

import { PropsWithChildren } from 'react';

import { Card, CardProps, Stack } from '@mantine/core';

import { CustomList } from '@/components/layout/CustomList';

import { SectionHeader, SectionHeaderProps } from './SectionHeader';

type Props = CardProps &
  SectionHeaderProps & {
    items?: string[];
  };

export function SectionCard({
  title,
  description,
  icon,
  iconColor = 'brand',
  withIconBackground = true,
  items,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Card component="section" variant="section" aria-label={title} {...props}>
      <Card.Section inheritPadding pt="xl" pb="md">
        <SectionHeader
          title={title}
          description={description}
          icon={icon}
          iconColor={iconColor}
          withIconBackground={withIconBackground}
          variant={'card'}
        />
      </Card.Section>

      <Card.Section inheritPadding pb="xl">
        <Stack gap="md">
          {items?.length && <CustomList items={items} />}

          {children}
        </Stack>
      </Card.Section>
    </Card>
  );
}
