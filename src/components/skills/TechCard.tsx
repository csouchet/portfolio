'use client';

import { Card, Stack, Text, Title } from '@mantine/core';

import { TechGroup } from '@/components/TechGroup';
import { useAccentColor } from '@/hooks/useColors';
import { getContent } from '@/lib/i18n';

type Props = {
  category: ReturnType<
    typeof getContent
  >['skills']['technical']['categories'][0];
  index: number;
};

export function TechCard({ category, index }: Props) {
  const getAccentColor = useAccentColor();
  const color = getAccentColor(index);

  return (
    <Card variant="item">
      <Card.Section
        bg={`light-dark(var(--mantine-color-${color}Light-1), var(--mantine-color-${color}Dark-9))`}
        inheritPadding
        pt="lg"
        pb="md"
      >
        <Stack gap="xs">
          <Title
            order={3}
            variant="card"
            c={`light-dark(var(--mantine-color-${color}Light-9), var(--mantine-color-${color}Dark-0))`}
          >
            {category.name}
          </Title>
          <Text variant="metadata">{category.subtitle}</Text>
        </Stack>
      </Card.Section>

      <TechGroup stack={category.skills} mt="md" />
    </Card>
  );
}
