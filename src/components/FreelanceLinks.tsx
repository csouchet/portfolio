'use client';

import { IconExternalLink, IconStar } from '@tabler/icons-react';

import { Stack, Group, Text, Badge, ActionIcon } from '@mantine/core';

import { BaseCard } from '@/components/cards/BaseCard';
import { contactContent } from '@/content/fr/contact';

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
  const content = contactContent.freelance;

  return (
    <Stack gap="sm">
      {data.map(item => (
        <BaseCard key={item.name}>
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
            <ActionIcon
              component="a"
              href={item.url}
              target="_blank"
              variant="light"
              size="lg"
              radius="xl"
              aria-label={`${content.aria} ${item.name}`}
            >
              <IconExternalLink size={16} />
            </ActionIcon>
          </Group>
        </BaseCard>
      ))}
    </Stack>
  );
}
