import { IconExternalLink, IconStar } from '@tabler/icons-react';

import { Stack, Group, Text, Badge, ThemeIcon } from '@mantine/core';

import { BaseCard } from '@/components/cards/BaseCard';

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
        <BaseCard
          key={item.name}
          component="a"
          href={item.url}
          target="_blank"
          style={{ cursor: 'pointer' }}
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
        </BaseCard>
      ))}
    </Stack>
  );
}
