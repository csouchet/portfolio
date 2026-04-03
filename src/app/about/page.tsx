'use client';

import Link from 'next/link';

import { Container, Title, Text, Stack, Divider, Button } from '@mantine/core';

export default function AboutPage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        {/* HERO */}
        <Stack gap="md">
          <Title order={1}>
            Je conçois des systèmes qui accélèrent les équipes.
          </Title>

          <Text size="lg" c="dimmed">
            Ingénieure développeuse avec une approche orientée architecture,
            CI/CD et developer experience.
          </Text>
        </Stack>

        <Divider />

        {/* STORY */}
        <Stack gap="md">
          <Title order={2}>Mon parcours</Title>

          <Text>
            J’ai commencé par construire des applications backend et frontend,
            en travaillant sur des systèmes métier complexes.
          </Text>

          <Text>
            Très vite, j’ai constaté que les problèmes les plus difficiles
            n’étaient pas liés à une feature, mais à la structure globale du
            système : architecture, pipelines, qualité, collaboration.
          </Text>

          <Text>
            J’ai progressivement évolué vers des rôles où mon impact était plus
            large : structurer les systèmes, améliorer la fiabilité, et aider
            les équipes à livrer plus vite et plus sereinement.
          </Text>
        </Stack>

        <Divider />

        {/* POSITIONNEMENT */}
        <Stack gap="md">
          <Title order={2}>Ce que je fais aujourd’hui</Title>

          <Text>
            J’interviens sur des systèmes techniques complexes, là où la
            qualité, la performance et la capacité à livrer deviennent
            critiques.
          </Text>

          <Text fw={500}>
            Mon rôle n’est pas seulement de développer, mais de transformer des
            systèmes qui ralentissent les équipes en systèmes qui les
            accélèrent.
          </Text>
        </Stack>

        <Divider />

        {/* APPROCHE */}
        <Stack gap="md">
          <Title order={2}>Ma manière de travailler</Title>

          <Text>Je privilégie une approche pragmatique, orientée impact :</Text>

          <Text>
            • Comprendre le système existant et ses contraintes • Identifier les
            points de friction • Mettre en place des solutions simples, robustes
            et évolutives
          </Text>

          <Text>
            Mon objectif est toujours le même : améliorer la fiabilité du
            système et la vitesse des équipes.
          </Text>
        </Stack>

        <Divider />

        {/* CTA */}
        <Stack align="center" gap="md" mt="lg">
          <Text size="lg" ta="center">
            Un système à structurer ou à stabiliser ?
          </Text>

          <Button component={Link} href="/contact" radius="xl">
            Discutons-en
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
