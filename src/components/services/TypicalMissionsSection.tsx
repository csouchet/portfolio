'use client';

import { Stack, Text, Paper } from '@mantine/core';

const missions = [
  {
    title: 'Construire une plateforme from scratch',
    description:
      'Architecture, fondations techniques et mise en place des pratiques de développement.',
  },
  {
    title: 'Reprendre un système devenu difficile à faire évoluer',
    description:
      'Simplification de l’architecture et réduction de la dette technique.',
  },
  {
    title: 'Fiabiliser des releases instables',
    description:
      'Mise en place de pipelines robustes et réduction des risques de déploiement.',
  },
  {
    title: 'Accélérer une équipe ralentie par son système',
    description:
      'Suppression des frictions techniques et amélioration de la fluidité.',
  },
];

export function TypicalMissionsSection() {
  return (
    <Stack gap="lg" maw={800}>
      <Text size="xl" fw={600}>
        Quand j’interviens
      </Text>

      <Text c="dimmed">
        Voici les situations dans lesquelles j’apporte le plus de valeur.
      </Text>

      <Stack gap="md">
        {missions.map(m => (
          <Paper key={m.title} withBorder radius="md" p="lg">
            <Stack gap={4}>
              <Text fw={500}>{m.title}</Text>
              <Text size="sm" c="dimmed">
                {m.description}
              </Text>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
