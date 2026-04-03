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
            <Title order={1} style={{ lineHeight: 1.2, maxWidth: 700 }}>
              Je travaille sur des systèmes qui deviennent trop complexes pour
              rester simples.
            </Title>

            <Text size="lg" c="dimmed" style={{ maxWidth: 600 }}>
              Là où les équipes ralentissent, où les releases deviennent
              fragiles, et où la complexité prend le dessus.
            </Text>
          </Stack>

          <Divider opacity={0.4} />

          {/* PARCOURS */}
          <Stack gap="md">
            <Title order={2}>Mon parcours</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                J’ai commencé par faire du backend et du frontend, en
                travaillant sur des applications métier.
              </Text>

              <Text c="dimmed">
                Mais rapidement, les problèmes les plus difficiles n’étaient pas
                dans les features. Ils étaient dans le système : architecture,
                pipelines, qualité.
              </Text>

              <Text fw={500}>
                C’est là que j’ai commencé à me concentrer sur ces sujets :
                structurer, stabiliser, rendre les systèmes fiables.
              </Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* AUJOURD'HUI */}
          <Stack gap="md">
            <Title order={2}>Ce que je fais aujourd’hui</Title>

            <Stack gap="sm">
              <Text c="dimmed">
                J’interviens quand un système commence à poser problème.
              </Text>

              <Text c="dimmed">
                Pas parce qu’il ne fonctionne pas, mais parce qu’il devient
                difficile à faire évoluer.
              </Text>

              <Text fw={500}>
                Mon travail, c’est de remettre de la maîtrise : sur la qualité,
                les livraisons et la capacité à avancer.
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
                Je commence par comprendre comment le système fonctionne
                réellement, et où ça coince.
              </Text>

              <Stack gap={6}>
                <Text>• comprendre ce qui ralentit réellement</Text>
                <Text>• simplifier plutôt que complexifier</Text>
                <Text>• fiabiliser avant d’optimiser</Text>
              </Stack>

              <Text fw={500}>
                L’objectif est simple : rendre le système plus utilisable par
                l’équipe.
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
