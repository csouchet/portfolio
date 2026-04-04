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
    <Box>
      <Container size="md" py={80}>
        <Stack gap={60}>
          {/* HERO */}
          <Stack gap="lg">
            <Title order={1} style={{ lineHeight: 1.2, maxWidth: 720 }}>
              Construire des systèmes fiables, sans complexité inutile.
            </Title>

            <Text size="lg" c="dimmed" style={{ maxWidth: 600 }}>
              Ingénieure logiciel, spécialisée dans les systèmes complexes, la
              CI/CD et l’architecture.
            </Text>
          </Stack>

          <Divider opacity={0.4} />

          {/* PARCOURS */}
          <Stack gap="md">
            <Title order={2}>Mon parcours</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                J’ai commencé au plus haut niveau de support technique sur les
                applications qui géraient la téléphonie mobile chez Orange, puis
                très vite, je me suis spécialisée commedéveloppeuse backend, sur
                des applications métier.
              </Text>

              <Text c="dimmed">
                Mais rapidement, les problèmes les plus intéressants n’étaient
                pas dans les fonctionnalités. Ils étaient dans ce qui les
                supporte : l’architecture, les pipelines, la qualité.
              </Text>

              <Text fw={500}>
                J’ai progressivement déplacé mon focus vers ces sujets :
                comprendre, structurer et stabiliser les systèmes.
              </Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* AUJOURD'HUI */}
          <Stack gap="md">
            <Title order={2}>Aujourd’hui</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                J’interviens quand un système commence à freiner une équipe.
              </Text>

              <Text c="dimmed">
                Pas parce qu’il ne fonctionne pas, mais parce qu’il devient
                difficile à faire évoluer, à livrer ou à comprendre.
              </Text>

              <Text fw={500}>
                Mon travail consiste à remettre de la clarté, de la fiabilité et
                de la fluidité.
              </Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* APPROCHE */}
          <Stack gap="md">
            <Title order={2}>Ma manière de travailler</Title>

            <Stack gap="sm">
              <Text c="dimmed">Je ne pars jamais d’une solution.</Text>

              <Text c="dimmed">
                Je commence par comprendre le système tel qu’il est réellement,
                et identifier où se situent les frictions.
              </Text>

              <Text>
                Mon travail consiste à comprendre où se situe réellement le
                problème, puis à simplifier : architecture, pipelines,
                organisation du code.
              </Text>

              <Stack gap={6}>
                <Text>• comprendre ce qui bloque vraiment</Text>
                <Text>• simplifier plutôt qu’ajouter</Text>
                <Text>• fiabiliser avant d’optimiser</Text>
              </Stack>

              <Text fw={500}>
                L’objectif est simple : rendre le système plus lisible, plus
                fiable et plus facile à faire évoluer.
              </Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* PERSONAL TOUCH */}
          <Stack gap="md">
            <Title order={2}>Au-delà du code</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                En parallèle de mon travail d’ingénieure, je développe une
                activité en poterie.
              </Text>
            </Stack>
          </Stack>

          {/* CTA */}
          <Stack align="center" gap="md" mt={40}>
            <Text size="lg">Un système à structurer ou à stabiliser ?</Text>

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
