'use client';

import Link from 'next/link';

import { Text, Stack, Badge, Group, Grid, Button } from '@mantine/core';

import { HomeSection } from './HomeSection';

export function ContactSection() {
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
              border: '1px solid var(--mantine-color-default-border)',
              borderRadius: '16px',
              background: 'var(--mantine-color-body)',
            }}
          >
            <Group gap="xs">
              <Badge
                variant="light"
                color="green"
                radius="xl"
                size="sm"
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

            <Text size="sm" c="dimmed">
              Grenoble • Remote possible
            </Text>

            <Text
              size="xs"
              c="dimmed"
              component="a"
              href="/contact"
              style={{ opacity: 0.7, textDecoration: 'none' }}
            >
              Disponible sur Malt, Upwork et Fiverr
            </Text>

            <Button
              component={Link}
              href="/contact"
              radius="xl"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 10px 30px rgba(79,70,229,0.35)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              styles={{
                root: {
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 14px 40px rgba(79,70,229,0.45)',
                  },
                  '&:focusVisible:not(:hover)': {
                    outline: '2px solid var(--mantine-color-brand-5)',
                    outlineOffset: '2px',
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
