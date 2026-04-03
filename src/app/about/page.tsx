'use client';

import Link from 'next/link';

import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
  Button,
  Box,
} from '@mantine/core';

export default function AboutPage() {
  return (
    <Box
      component="section"
      style={{
        background: `
          radial-gradient(circle at 80% 0%, rgba(99,102,241,0.05), transparent 50%)
        `,
      }}
    >
      <Container size="md" py={80}>
        <Stack gap={60}>
          {/* HERO */}
          <Stack gap="lg">
            <Title
              order={1}
              style={{
                lineHeight: 1.2,
                maxWidth: 700,
              }}
            >
              Je conçois des systèmes qui accélèrent les équipes.
            </Title>

            <Text size="lg" c="dimmed" style={{ maxWidth: 600 }}>
              Architecture, CI/CD et developer experience pour des systèmes
              fiables et scalables.
            </Text>
          </Stack>

          <Divider my="lg" opacity={0.4} />

          {/* PARCOURS */}
          <Stack gap="md">
            <Title order={2}>Mon parcours</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                J’ai commencé par construire des applications backend et
                frontend, en travaillant sur des systèmes métier complexes.
              </Text>

              <Text c="dimmed">
                Très vite, j’ai constaté que les problèmes les plus difficiles
                n’étaient pas liés à une feature, mais à la structure globale du
                système : architecture, pipelines, qualité et collaboration.
              </Text>

              <Text fw={500}>
                J’ai progressivement évolué vers des rôles où mon impact était
                plus large : structurer les systèmes, améliorer leur fiabilité
                et aider les équipes à livrer plus vite et plus sereinement.
              </Text>
            </Stack>
          </Stack>

          <Divider my="lg" opacity={0.4} />

          {/* AUJOURD'HUI */}
          <Stack gap="md">
            <Title order={2}>Ce que je fais aujourd’hui</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                J’interviens sur des systèmes techniques complexes, là où la
                qualité, la performance et la capacité à livrer deviennent
                critiques.
              </Text>

              <Text fw={500}>
                Mon rôle n’est pas seulement de développer, mais de transformer
                des systèmes qui ralentissent les équipes en systèmes qui les
                accélèrent.
              </Text>
            </Stack>
          </Stack>

          <Divider my="lg" opacity={0.4} />

          {/* APPROCHE */}
          <Stack gap="md">
            <Title order={2}>Ma manière de travailler</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                Je privilégie une approche pragmatique et orientée impact :
              </Text>

              <Stack gap={6}>
                <Text>• Comprendre le système existant et ses contraintes</Text>
                <Text>• Identifier les points de friction</Text>
                <Text>
                  • Mettre en place des solutions simples, robustes et
                  évolutives
                </Text>
              </Stack>

              <Text fw={500}>
                Objectif : améliorer la fiabilité du système et la vitesse des
                équipes.
              </Text>
            </Stack>
          </Stack>

          {/* CTA */}
          <Stack align="center" gap="md" mt={40}>
            <Text size="lg" ta="center">
              Un système à structurer ou à stabiliser ?
            </Text>

            <Button component={Link} href="/contact" radius="xl">
              Discutons-en
            </Button>

            <Text size="sm" c="dimmed">
              Freelance · Remote · Grenoble
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
