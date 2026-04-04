'use client';

import { Container, Stack, Title, Text, Button } from '@mantine/core';

import { ApproachSection } from '@/components/services/ApproachSection';
import { TypicalMissionsSection } from '@/components/services/TypicalMissionsSection';

export default function ServicesPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* HERO */}
        <Stack gap="md">
          <Title order={1}>
            J’aide les équipes à reprendre le contrôle de systèmes devenus trop
            complexes.
          </Title>

          <Text size="lg" c="dimmed">
            Architecture, CI/CD, qualité — j’interviens là où la complexité
            ralentit les équipes.
          </Text>
        </Stack>

        {/* WHAT I DO */}
        <Stack gap="sm">
          <Text>Je travaille sur :</Text>

          <Text>• la fiabilité des releases</Text>
          <Text>• la réduction de la complexité</Text>
          <Text>• la capacité des équipes à livrer sereinement</Text>
        </Stack>

        {/* MISSIONS */}
        <TypicalMissionsSection />

        {/* APPROACH */}
        <ApproachSection />

        {/* CTA */}
        <Stack mt="xl">
          <Text fw={500}>Vous êtes dans une de ces situations ?</Text>

          <Button radius="xl" size="md">
            Discuter de votre projet
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
