'use client';

import { HomeSection } from './HomeSection';
import { Text, Stack, Badge, Group, Grid, Button } from '@mantine/core';
import Link from 'next/link';

export function FreelanceCTASection() {
  return (
    <HomeSection title="Collaboration" gradientPosition="left">
      <Grid gutter="xl" align="center">
        {/* LEFT — contenu */}
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

        {/* RIGHT — infos + CTA léger */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack
            gap="sm"
            p="xl"
            ml={{ md: 'auto' }}
            style={{
              border: '1px solid var(--mantine-color-dark-6)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <Group gap="xs">
              <Badge
                variant="light"
                color="green"
                radius="xl"
                size="md"
                styles={{
                  root: {
                    textTransform: 'none',
                    fontWeight: 500,
                  },
                }}
              >
                Disponible mi-novembre
              </Badge>

              <Text size="sm" c="dimmed">
                Freelance
              </Text>
            </Group>

            <Text size="sm" c="gray.5">
              Grenoble • Remote possible
            </Text>

            <Button
              component={Link}
              href="/contact"
              variant="light"
              radius="xl"
              styles={{
                root: {
                  transition: 'transform 0.15s ease',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                  },
                },
              }}
            >
              Contacter
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </HomeSection>
  );
}
