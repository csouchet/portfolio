'use client';

import { SimpleGrid, Paper, Stack, Text } from '@mantine/core';

import { HomeSection } from './HomeSection';

const items = [
  {
    problem: 'Les releases deviennent lentes, stressantes ou imprévisibles',
    result: '→ des livraisons fiables, régulières et maîtrisées',
  },
  {
    problem: 'Le système est devenu trop complexe pour évoluer sereinement',
    result: '→ une architecture simplifiée et plus lisible',
  },
  {
    problem: 'Chaque changement introduit des bugs ou de l’incertitude',
    result: '→ un code sur lequel l’équipe peut s’appuyer',
  },
  {
    problem:
      'Les développeurs passent leur temps à débloquer au lieu d’avancer',
    result: '→ une équipe qui retrouve de la vitesse et de la fluidité',
  },
];

export function WhatIDoSection() {
  return (
    <HomeSection
      title="Comment j’aide"
      description="Je travaille sur les points de friction qui ralentissent réellement les équipes."
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {items.map(item => (
          <Paper key={item.problem} withBorder radius="md" p="lg">
            <Stack gap="xs">
              <Text fw={500}>{item.problem}</Text>

              <Text size="sm" c="blue" fw={500}>
                {item.result}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </HomeSection>
  );
}
