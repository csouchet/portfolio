'use client';

import React, { PropsWithChildren, ReactNode } from 'react';

import Link from 'next/link';

import { IconArrowRight, IconCalendar, IconClock } from '@tabler/icons-react';

import {
  Anchor,
  Badge,
  Card,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { useAccentColor } from '@/hooks/useColors';

export type PublicationCardProps = {
  imageSection?: ReactNode;
  topBadge?: string;
  title: string;
  description?: string;
  date: string;
  readingTime?: string;
  tags: { items: string[]; isColored: boolean };
  footer: { label: string; href: string };
};

export function PublicationCard({
  imageSection,
  topBadge,
  title,
  description,
  date,
  readingTime,
  tags,
  footer,
  children,
}: PropsWithChildren<PublicationCardProps>) {
  const getAccentColor = useAccentColor();

  return (
    <Card variant="item">
      {imageSection && <Card.Section>{imageSection}</Card.Section>}

      <Stack gap="sm" mt={imageSection ? 'lg' : 0} style={{ flex: 1 }}>
        {topBadge && <Badge color={getAccentColor(topBadge)}>{topBadge}</Badge>}

        <Title
          order={3}
          variant="card"
          mb={
            children || description
              ? 'sm'
              : tags.items.length > 0
                ? 'xs'
                : 'auto'
          }
        >
          {title}
        </Title>

        {description && (
          <Text variant="metadata" mb="xs">
            {description}
          </Text>
        )}

        {children}

        {tags.items.length > 0 && (
          <Group gap="xs" mt={children ? 'xs' : 'auto'}>
            {tags.items.slice(0, 3).map(tag => (
              <Badge
                key={tag}
                {...(tags.isColored
                  ? { color: getAccentColor(tag) }
                  : {
                      variant: 'outline',
                      color:
                        'light-dark(var(--mantine-color-dark-7), var(--mantine-color-gray-3))',
                    })}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        )}
      </Stack>

      <Stack
        gap="sm"
        mt="xl"
        pt="md"
        style={{
          borderTop:
            '1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6))',
        }}
      >
        <Group gap="lg">
          <Group gap="xs">
            <IconCalendar
              size={rem(14)}
              stroke={1.5}
              color="var(--mantine-color-dimmed)"
            />
            <Text variant="metadata">{date}</Text>
          </Group>

          {readingTime && (
            <Group gap="xs">
              <IconClock
                size={rem(14)}
                stroke={1.5}
                color="var(--mantine-color-dimmed)"
              />
              <Text variant="metadata">{readingTime}</Text>
            </Group>
          )}
        </Group>

        <Anchor
          component={Link}
          href={footer.href}
          target={footer.href.startsWith('http') ? '_blank' : undefined}
          rel={
            footer.href.startsWith('http') ? 'noopener noreferrer' : undefined
          }
          fz={15}
        >
          {footer.label}
          <IconArrowRight size={rem(14)} stroke={2} />
        </Anchor>
      </Stack>
    </Card>
  );
}
