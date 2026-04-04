'use client';

import { Stack, Text } from '@mantine/core';

import { HomeSection } from './HomeSection';

export function ApproachSection() {
  return (
    <HomeSection
      title="Comment je travaille"
      description="Ma manière d’aborder un système complexe."
    >
      <Stack gap="md" maw={700}>
        <Text>
          Je ne commence pas par ajouter des outils ou des couches techniques.
        </Text>

        <Text>
          Je commence par comprendre où le système bloque réellement :
          livraison, architecture, dépendances, ou organisation.
        </Text>

        <Text>
          Ensuite, je simplifie. Moins de friction, moins d’incertitude, moins
          de complexité inutile.
        </Text>

        <Text>
          L’objectif n’est pas un système “parfait”, mais un système sur lequel
          une équipe peut s’appuyer pour avancer vite.
        </Text>
      </Stack>
    </HomeSection>
  );
}
