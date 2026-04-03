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
      'Les délais s’allongent, les releases deviennent stressantes et la capacité à livrer se dégrade.',
    impact: '→ ralentit le business',
  },
  {
    title: 'Complexité technique difficile à maîtriser',
    description:
      'Accumulation de dette technique, manque de vision globale, système difficile à maintenir.',
    impact: '→ perte de maîtrise',
  },
  {
    title: 'Manque de confiance dans le code',
    description:
      'Tests insuffisants, bugs fréquents, difficulté à faire évoluer le produit sans régressions.',
    impact: '→ freine les équipes',
  },
  {
    title: 'Architecture difficile à faire évoluer',
    description: 'Couplage fort, rigidité, difficulté à scaler.',
    impact: '→ limite la croissance',
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

                <Text size="xs" c="red" fw={500}>
                  {item.impact}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
