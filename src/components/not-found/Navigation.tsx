'use client';

import React from 'react';

import { IconHome, IconFolder, IconBook, IconMail } from '@tabler/icons-react';

import {
  SimpleGrid,
  Card,
  ThemeIcon,
  Title,
  Text,
  rem,
  Stack,
} from '@mantine/core';

import { CTAButton } from '@/components/CTAButton';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

const NAV_CONFIG = [
  { icon: IconHome, color: 'pink', path: '' },
  { icon: IconFolder, color: 'sage', path: '/projects' },
  { icon: IconBook, color: 'blue', path: '/articles' },
  { icon: IconMail, color: 'orange', path: '/contact' },
] as const;

type Props = {
  content: ReturnType<typeof getContent>['notFound']['navigation'];
  locale: Locale;
};

export function Navigation({ content, locale }: Props) {
  return (
    <Stack gap="xl">
      <Title order={2}>{content.title}</Title>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
        {content.items.map((item, index) => {
          const { icon: Icon, color, path } = NAV_CONFIG[index];

          return (
            <Card key={index} variant="item">
              <Stack gap="lg" h="100%">
                <Stack gap="sm" style={{ flex: 1 }}>
                  <ThemeIcon variant="light" color={color}>
                    <Icon size={rem(24)} stroke={1.5} />
                  </ThemeIcon>

                  <Title order={3} variant="card">
                    {item.label}
                  </Title>

                  <Text variant="metadata">{item.description}</Text>
                </Stack>

                <CTAButton
                  content={item.cta}
                  href={`/${locale}${path}`}
                  c={`light-dark(var(--mantine-color-${color}-9), var(--mantine-color-${color}-0))`}
                  variant="transparent"
                  size="compact-sm"
                  justify="flex-start"
                  p={0}
                />
              </Stack>
            </Card>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}
