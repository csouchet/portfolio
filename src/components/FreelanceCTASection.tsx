'use client';

import { HomeSection } from './HomeSection';
import { Text, Stack, Badge, Group } from '@mantine/core';

export function FreelanceCTASection() {
  return (
    <HomeSection
      title="Un projet en tête ?"
      description="Je suis disponible pour de nouvelles collaborations à partir de mi-novembre."
      cta={{
        label: 'Discuter de votre projet',
        href: '/contact',
      }}
      gradientPosition="left"
    >
      <Stack gap="md">
        <Text size="md" maw="55ch">
          J’interviens sur des projets où la qualité d’exécution, la clarté et
          la fiabilité ne sont pas négociables.
        </Text>

        <Text size="md" maw="55ch">
          Mon approche combine exigence technique et sens du détail, pour
          construire des interfaces durables, performantes et réellement utiles.
        </Text>

        <Group gap="xs" mt="xs">
          <Badge variant="light" color="green" radius="xl">
            Disponible mi-novembre
          </Badge>

          <Text size="sm" c="dimmed">
            Missions freelance
          </Text>
        </Group>
      </Stack>
    </HomeSection>
  );
}
