'use client';

import { Stack, Text, Paper } from '@mantine/core';

import { useContent } from '@/hooks/useContent';

import { HomeSection } from './HomeSection';

export function PrinciplesSection() {
  const { home } = useContent();
  const content = home.principles;

  return (
    <HomeSection title={content.title} description={content.description}>
      <Stack gap="lg" maw={700}>
        <Text fw={500}>{content.intro}</Text>

        {content.items.map(item => (
          <Paper key={item.title} withBorder radius="md" p="lg">
            <Stack gap="xs">
              <Text fw={600}>{item.title}</Text>

              <Text size="sm" c="dimmed">
                {item.description}
              </Text>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </HomeSection>
  );
}
