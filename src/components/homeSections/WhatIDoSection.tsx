'use client';

import { SimpleGrid, Paper, Stack, Text } from '@mantine/core';

import { homeContent } from '@/content/fr/home';

import { HomeSection } from './HomeSection';

export function WhatIDoSection() {
  const content = homeContent.whatIDo;

  return (
    <HomeSection title={content.title} description={content.description}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {content.items.map(item => (
          <Paper key={item.problem} withBorder radius="md" p="lg">
            <Stack gap="xs">
              <Text fw={500}>{item.problem}</Text>

              <Text size="sm" c="blue" fw={500}>
                {item.result}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
