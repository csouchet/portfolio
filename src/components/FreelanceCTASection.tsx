'use client';

import { HomeSection } from './HomeSection';
import { Text, Stack, Badge, Group, Grid, Button, Paper } from '@mantine/core';
import Link from 'next/link';

export function FreelanceCTASection() {
  return (
    <HomeSection title="Collaboration" gradientPosition="left">
      <Grid gutter="xl" align="center">
        {/* LEFT */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="md">
            <Text size="md" maw="55ch">
              J’interviens sur des projets où la qualité d’exécution, la clarté
              et la fiabilité ne sont pas négociables.
            </Text>

            <Text size="md" maw="55ch">
              Mon approche combine exigence technique et sens du détail, pour
              construire des interfaces durables, performantes et réellement
              utiles.
            </Text>
          </Stack>
        </Grid.Col>

        {/* RIGHT */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="xs" align="flex-start" ml={{ md: 'auto' }}>
            <Group gap="xs">
              <Badge variant="light" color="green" radius="xl">
                Disponible mi-novembre
              </Badge>

              <Text size="sm" c="dimmed">
                Freelance
              </Text>
            </Group>

            <Text size="sm" c="dimmed">
              Grenoble • Remote possible
            </Text>

            <Button
              component={Link}
              href="/contact"
              variant="subtle"
              size="sm"
              px={0}
            >
              Accéder au contact →
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </HomeSection>
  );
}
