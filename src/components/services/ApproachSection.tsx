'use client';

import { Stack, Text } from '@mantine/core';

export function ApproachSection() {
  return (
    <Stack gap="md" maw={700}>
      <Text size="xl" fw={600}>
        Comment je travaille
      </Text>

      <Text>
        Je commence par comprendre où le système bloque réellement :
        architecture, livraison, dépendances ou organisation.
      </Text>

      <Text>
        Ensuite, je simplifie. L’objectif n’est pas d’ajouter des outils, mais
        de réduire la complexité inutile.
      </Text>

      <Text>
        Je privilégie des solutions robustes, compréhensibles et adaptées à
        l’équipe.
      </Text>
    </Stack>
  );
}
