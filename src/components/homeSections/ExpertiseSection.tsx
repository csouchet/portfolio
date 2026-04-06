'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
} from '@mantine/core';

import { useContent } from '@/hooks/useContent';

export function ExpertiseSection() {
  const { home } = useContent();
  const content = home.expertise;

  return (
    <Container py="xl">
      <Stack gap="xl">
        <Stack gap={6}>
          <Title order={2}>{content.title}</Title>

          <Text c="dimmed">{content.description}</Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {content.items.map(item => (
            <Paper
              key={item.title}
              withBorder
              radius="md"
              p="lg"
              style={{
                transition: 'all 0.2s ease',
              }}
            >
              <Stack gap="xs">
                <Text fw={600}>{item.title}</Text>

                <Text size="sm" c="dimmed">
                  {item.description}
                </Text>

                <Text size="xs" c="blue" fw={500}>
                  {item.result}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
