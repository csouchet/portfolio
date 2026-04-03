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
    title: 'Livraisons lentes ou imprévisibles',
    description:
      'Les délais s’allongent, les releases sont stressantes ou instables, et la vitesse de delivery devient un problème.',
  },
  {
    title: 'Complexité technique difficile à maîtriser',
    description:
      'Accumulation de dette technique, code difficile à maintenir ou manque de vision architecture globale.',
  },
  {
    title: 'Manque de confiance dans le code',
    description:
      'Tests insuffisants, bugs fréquents, difficulté à faire évoluer le produit sans régressions.',
  },
  {
    title: 'Architecture difficile à faire évoluer',
    description:
      'Le système freine les équipes au lieu de les aider : scaling complexe, dépendances fortes, rigidité.',
  },
];

export function WhenSection() {
  return (
    <Container py="xl">
      <Stack gap="xl">
        <Stack gap={6}>
          <Title order={2}>Quand j’interviens</Title>

          <Text c="dimmed">
            J’interviens lorsque le système commence à ralentir l’équipe ou à
            freiner la capacité à livrer.
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
