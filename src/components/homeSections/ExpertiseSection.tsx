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
      'Pipelines fiables, automatisation des builds et des releases.',
    result: '→ releases rapides et fiables',
  },
  {
    title: 'Architecture & systèmes',
    description:
      'Structuration de systèmes complexes, découplage et scalabilité.',
    result: '→ système maintenable sur le long terme',
  },
  {
    title: 'Developer Experience',
    description: 'Outils, standards et workflows pour accélérer les équipes.',
    result: '→ gain de vitesse au quotidien',
  },
  {
    title: 'Produit & impact',
    description: 'Alignement technique avec les enjeux produit et les KPIs.',
    result: '→ meilleure valeur délivrée',
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
            la capacité des équipes à livrer et à faire évoluer leur système.
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

                <Text size="xs" c="blue" fw={500}>
                  {item.result}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
