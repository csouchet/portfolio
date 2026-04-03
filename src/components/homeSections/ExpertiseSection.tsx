'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
} from '@mantine/core';

const items = [
  {
    title: 'Platform & CI/CD',
    description:
      'Pipelines fiables, automatisation des builds et des releases, réduction du time-to-market et sécurisation des livraisons.',
  },
  {
    title: 'Architecture & systèmes',
    description:
      'Structuration de systèmes complexes, découplage, scalabilité et capacité à faire évoluer le produit dans le temps.',
  },
  {
    title: 'Developer Experience',
    description:
      'Outils, standards et workflows pour accélérer les équipes et réduire la friction au quotidien.',
  },
  {
    title: 'Produit & impact',
    description:
      'Alignement technique avec les enjeux produit, suivi des KPIs et amélioration continue de la valeur délivrée.',
  },
];

export function ExpertiseSection() {
  return (
    <Container py="xl">
      <Stack gap="xl">
        <Stack gap={6}>
          <Title order={2}>Domaines d’expertise</Title>

          <Text c="dimmed">
            J’interviens sur les leviers techniques qui ont un impact direct sur
            la performance des équipes et la qualité des systèmes.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {items.map(item => (
            <Paper
              key={item.title}
              withBorder
              radius="md"
              p="lg"
              style={{
                transition: 'all 0.2s ease',
              }}
            >
              <Stack gap="xs">
                <Text fw={600}>{item.title}</Text>

                <Text size="sm" c="dimmed">
                  {item.description}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
