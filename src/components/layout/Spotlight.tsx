'use client';

import { ElementType } from 'react';

import {
  Card,
  Flex,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
  MantineColor,
} from '@mantine/core';

export type SpotlightProps = {
  title: string;
  description: string;
  icon: ElementType;
  iconSize?: number;
  color: MantineColor; // La couleur est maintenant injectée
  layout?: 'horizontal' | 'vertical';
  withCard?: boolean;
};

export function Spotlight({
  title,
  description,
  icon: Icon,
  iconSize = 28,
  color,
  layout = 'vertical',
  withCard = false,
}: SpotlightProps) {
  const isVertical = layout === 'vertical';

  const content = (
    <Flex
      direction={isVertical ? 'column' : 'row'}
      align="center"
      justify={'flex-start'}
      gap="md"
      h={withCard ? '100%' : 'auto'}
    >
      <ThemeIcon
        size={rem(iconSize * 2)}
        radius="lg"
        variant="light"
        color={color}
        style={{ flexShrink: 0 }}
      >
        <Icon size={rem(iconSize)} stroke={2} />
      </ThemeIcon>

      <Stack
        gap={rem(4)}
        align={isVertical ? 'center' : 'flex-start'}
        ta={isVertical ? 'center' : 'left'}
      >
        <Title order={3} variant="card">
          {title}
        </Title>
        <Text variant="metadata">{description}</Text>
      </Stack>
    </Flex>
  );

  if (withCard) {
    return <Card variant="item">{content}</Card>;
  }

  return content;
}
