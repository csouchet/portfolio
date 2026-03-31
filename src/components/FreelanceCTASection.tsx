'use client';

import { HomeSection } from './HomeSection';
import { Text, Stack, Badge, Group, Box, Button } from '@mantine/core';
import Link from 'next/link';

export function FreelanceCTASection() {
  return (
    <HomeSection
      title="Un projet en tête ?"
      description="Je suis disponible pour de nouvelles collaborations à partir de mi-novembre."
      gradientPosition="left"
    >
      <Box
        pl="md"
        style={{
          borderLeft: '2px solid var(--mantine-color-brand-6)',
        }}
      >
        <Stack gap="md">
          <Text size="md" maw="55ch">
            J’interviens sur des projets où la qualité d’exécution, la clarté et
            la fiabilité ne sont pas négociables.
          </Text>

          <Text size="md" maw="55ch">
            Mon approche combine exigence technique et sens du détail, pour
            construire des interfaces durables, performantes et réellement
            utiles.
          </Text>

          <Group gap="xs" mt="xs">
            <Badge
              variant="light"
              color="green"
              radius="xl"
              styles={{
                root: {
                  textTransform: 'none',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                },
              }}
            >
              Disponible mi-novembre
            </Badge>

            <Text size="sm" c="dimmed">
              Missions freelance
            </Text>
          </Group>

          {/* CTA principal */}
          <Button
            component={Link}
            href="/contact"
            size="md"
            radius="xl"
            mt="sm"
            aria-label="Discuter de votre projet freelance"
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
      </Box>
    </HomeSection>
  );
}
