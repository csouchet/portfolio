'use client';

import { Stack, Text, Paper } from '@mantine/core';

import { homeContent } from '@/content/fr/home';

import { HomeSection } from './HomeSection';

export function PrinciplesSection() {
  const content = homeContent.principles;

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
