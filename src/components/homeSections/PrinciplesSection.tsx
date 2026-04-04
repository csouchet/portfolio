'use client';

import { Stack, Text, Paper } from '@mantine/core';

import { HomeSection } from './HomeSection';

const principles = [
  {
    title: 'Ne pas masquer les problèmes avec des outils',
    description:
      'Un système lent ou fragile est rarement un problème d’outil, mais de conception.',
  },
  {
    title: 'Privilégier la simplicité utile',
    description:
      'Une architecture doit aider l’équipe à avancer, pas devenir une contrainte supplémentaire.',
  },
  {
    title: 'Stabiliser avant d’optimiser',
    description:
      'La fiabilité et la compréhension du système priment sur la performance prématurée.',
  },
  {
    title: 'Comprendre le produit avant le code',
    description:
      'Les décisions techniques n’ont de sens que si elles servent un usage réel.',
  },
];

export function PrinciplesSection() {
  return (
    <HomeSection
      title="Principes de travail"
      description="Les choix qui guident mes décisions sur des systèmes complexes."
    >
      <Stack gap="lg" maw={700}>
        <Text fw={500}>
          La plupart des problèmes techniques viennent de décisions prises trop
          vite ou pour de mauvaises raisons.
        </Text>

        {principles.map(item => (
          <Paper key={item.title} withBorder radius="md" p="lg">
            <Stack gap="xs">
              <Text fw={600}>{item.title}</Text>

              <Text size="sm" c="dimmed">
                {item.description}
              </Text>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </HomeSection>
  );
}
