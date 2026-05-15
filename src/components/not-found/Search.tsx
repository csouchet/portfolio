'use client';

import { IconSearch } from '@tabler/icons-react';

import { Text, Group, rem, Paper } from '@mantine/core';

import { getContent } from '@/lib/i18n';

type Props = {
  content: ReturnType<typeof getContent>['notFound']['search'];
};

export function Search({ content }: Props) {
  return (
    <Group justify="center">
      <Paper radius="xl" withBorder px="xl" py="sm">
        <Group gap="sm" justify="center">
          <IconSearch size={rem(18)} color="grey" />
          <Text variant="metadata">{content.text}</Text>
          <Text variant="tertiary">{content.cta}</Text>
        </Group>
      </Paper>
    </Group>
  );
}
