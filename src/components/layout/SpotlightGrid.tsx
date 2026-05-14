'use client';

import { ElementType } from 'react';

import { SimpleGrid, SimpleGridProps } from '@mantine/core';

import { Spotlight, SpotlightProps } from '@/components/layout/Spotlight';
import {
  GLOBAL_ICON_REGISTRY,
  IconCategory,
  IconId,
} from '@/data/iconRegistry';
import { useAccentColor } from '@/hooks/useColors';

export type SpotlightItem<T extends IconCategory> = {
  id: IconId<T>;
  title: string;
  description: string;
};

export type SpotlightGridProps<T extends IconCategory> = {
  items: SpotlightItem<T>[];
  category: T;
  gridProps?: Partial<SimpleGridProps>;
  spotlightProps?: Partial<
    Omit<SpotlightProps, 'color' | 'title' | 'description' | 'icon'>
  >;
};

export function SpotlightGrid<T extends IconCategory>({
  items,
  category,
  gridProps,
  spotlightProps,
}: SpotlightGridProps<T>) {
  const getAccentColor = useAccentColor();

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3 }}
      spacing="xl"
      verticalSpacing="xl"
      {...gridProps}
    >
      {items.map((item, index) => {
        const categoryIcons = GLOBAL_ICON_REGISTRY[category] as Record<
          IconId<T>,
          ElementType
        >;
        const Icon = categoryIcons[item.id];

        return (
          <Spotlight
            key={item.id as string}
            title={item.title}
            description={item.description}
            icon={Icon}
            color={getAccentColor(index)}
            {...spotlightProps}
          />
        );
      })}
    </SimpleGrid>
  );
}
