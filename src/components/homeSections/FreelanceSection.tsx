'use client';

import { Container, Stack, Title, Text } from '@mantine/core';

import { FreelanceLinks } from '@/components/FreelanceLinks';
import freelanceData from '@/data/freelance.json';

export function FreelanceSection() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Stack gap={4}>
          <Title order={2}>Me retrouver en freelance</Title>

          <Text c="dimmed" size="sm">
            Disponible sur plusieurs plateformes pour des missions freelance.
          </Text>
        </Stack>

        <FreelanceLinks data={freelanceData} />
      </Stack>
    </Container>
  );
}
