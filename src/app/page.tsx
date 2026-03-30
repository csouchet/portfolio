'use client';

import {
  Container,
  Stack,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
} from '@mantine/core';
import Link from 'next/link';

import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/*      <ProjectsSection />
      <AboutSection />
      <ContactSection />*/}
    </main>
  );
}

function ProjectsSection() {
  return (
    <Container id="projects" size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={2}>Projets</Title>
          <Text c="dimmed">Une sélection de projets récents.</Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {[1, 2, 3].map(p => (
            <Card
              key={p}
              padding="lg"
              radius="md"
              withBorder
              style={{
                transition: 'transform 0.2s ease',
              }}
            >
              <Stack gap="xs">
                <Title order={3}>Projet {p}</Title>
                <Text size="sm" c="dimmed">
                  Description courte du projet, technologies utilisées et
                  enjeux.
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

function AboutSection() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="md" style={{ textAlign: 'center' }}>
        <Title order={2}>À propos</Title>

        <Text c="dimmed">
          Développeuse senior spécialisée en Java (Spring) et React /
          TypeScript, je conçois des applications fiables, maintenables et
          performantes.
        </Text>

        <Text c="dimmed">
          En parallèle, je me forme à la céramique, avec une approche centrée
          sur le geste, la matière et le détail — des valeurs que j’applique
          aussi au code.
        </Text>
      </Stack>
    </Container>
  );
}

function ContactSection() {
  return (
    <Container size="sm" py="xl">
      <Stack align="center" gap="md" style={{ textAlign: 'center' }}>
        <Title order={2}>Travaillons ensemble</Title>

        <Text c="dimmed">
          Disponible pour des missions freelance ou des collaborations.
        </Text>

        <Button component={Link} href="/contact">
          Me contacter
        </Button>
      </Stack>
    </Container>
  );
}
