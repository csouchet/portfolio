'use client';

import { IconExternalLink, IconStar } from '@tabler/icons-react';

import { Stack, Card, Group, Text, Badge, ThemeIcon } from '@mantine/core';

type FreelanceLink = {
  name: string;
  url: string;
  badge?: string;
  rating?: number;
};

type Props = {
  data: FreelanceLink[];
};

export function FreelanceLinks({ data }: Props) {
  return (
    <Stack gap="sm">
      {data.map(item => (
        <Card
          key={item.name}
          padding="md"
          radius="md"
          withBorder
          component="a"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transition: 'all 150ms ease',
            cursor: 'pointer',
            backgroundColor: 'var(--mantine-color-body)',
          }}
          styles={{
            root: {
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 'var(--mantine-shadow-md)',
              },
            },
          }}
        >
          <Group justify="space-between" align="center">
            {/* LEFT */}
            <Stack gap={4}>
              <Group gap="xs">
                <Text fw={600}>{item.name}</Text>

                {item.badge && (
                  <Badge size="sm" variant="light" color="pink">
                    {item.badge}
                  </Badge>
                )}
              </Group>

              {item.rating && (
                <Group gap={4}>
                  <IconStar size={14} />
                  <Text size="sm" c="dimmed">
                    {item.rating.toFixed(1)}
                  </Text>
                </Group>
              )}
            </Stack>

            {/* RIGHT */}
            <ThemeIcon variant="light" size="lg">
              <IconExternalLink size={16} />
            </ThemeIcon>
          </Group>
        </Card>
      ))}
    </Stack>
  );
}
