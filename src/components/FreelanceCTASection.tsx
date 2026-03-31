'use client';

import { HomeSection } from './HomeSection';
import { Text, Stack, Badge, Group, Grid, Button, Paper } from '@mantine/core';
import Link from 'next/link';

export function FreelanceCTASection() {
  return (
    <HomeSection
      title="Un projet en tête ?"
      description="Disponible pour de nouvelles collaborations."
      gradientPosition="left"
    >
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

        {/* RIGHT — encart */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper
            p="lg"
            radius="md"
            withBorder
            style={{
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <Stack gap="md">
              <Group gap="xs">
                <Badge
                  variant="light"
                  color="green"
                  radius="xl"
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
                  Missions freelance
                </Text>
              </Group>

              <Button
                component={Link}
                href="/contact"
                fullWidth
                size="md"
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
                Discuter de votre projet
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </HomeSection>
  );
}
