'use client';

import Link from 'next/link';

import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Box,
} from '@mantine/core';

export function HeroSection() {
  return (
    <Box
      component="section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="sm">
        <Stack gap="lg">
          <Title order={1} style={{ lineHeight: 1.1 }}>
            J’interviens quand les systèmes deviennent trop complexes pour
            évoluer sereinement.
          </Title>

          <Text size="lg" c="dimmed">
            Je structure, fiabilise et simplifie pour que les équipes puissent
            livrer vite — sans se battre contre leur propre système.
          </Text>

          <Text size="sm" c="dimmed">
            15+ ans d’expérience · systèmes critiques · CI/CD avancée
          </Text>

          <Group mt="md">
            <Button component={Link} href="/projects" radius="xl">
              Voir mes projets
            </Button>

            <Button
              component={Link}
              href="/services"
              variant="subtle"
              radius="xl"
            >
              Mon approche
            </Button>
          </Group>

          <Text size="sm" c="dimmed">
            Disponible — Freelance · Remote / Grenoble
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
