'use client';

import { useMemo, useCallback } from 'react';

import { useMantineTheme } from '@mantine/core';

import { accentColors } from '@/theme/utils/colors';
import { ARTICLE_TAGS, Tag } from '@/types/article';
import { ColorSchemeMapping } from '@/types/color';

export function useAccentColor() {
  const orders = useMemo(
    () => ({
      tags: ARTICLE_TAGS as readonly string[],
    }),
    [],
  );

  return useCallback(
    (value: Tag | string | number): string => {
      if (typeof value === 'number') {
        return accentColors[value % accentColors.length];
      }

      const index = orders.tags.indexOf(value);

      const finalIndex = index === -1 ? 0 : index;

      return accentColors[finalIndex % accentColors.length];
    },
    [orders],
  );
}

/**
 * Hook spécifique pour les marques (LinkedIn, GitHub, etc.)
 */
export function useBrandColor() {
  const theme = useMantineTheme();
  return (name: string): ColorSchemeMapping =>
    theme.other.business.brands[
      name as keyof typeof theme.other.business.brands
    ] || theme.other.business.brands.default;
}
