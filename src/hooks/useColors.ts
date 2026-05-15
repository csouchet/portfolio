'use client';

import { useMemo, useCallback } from 'react';

import { useMantineTheme } from '@mantine/core';

import { accentColors } from '@/theme/utils/colors';
import { ARTICLE_TAGS, Tag } from '@/types/article';
import { ColorSchemeMapping } from '@/types/color';
import {
  PROJECT_CATEGORIES,
  PROJECT_CONTRIBUTIONS,
  ProjectCategory,
  ProjectContribution,
} from '@/types/project';

export function useAccentColor() {
  const orders = useMemo(
    () => ({
      categories: PROJECT_CATEGORIES as readonly string[],
      contributions: PROJECT_CONTRIBUTIONS as readonly string[],
      tags: ARTICLE_TAGS as readonly string[],
    }),
    [],
  );

  return useCallback(
    (
      value: ProjectCategory | ProjectContribution | Tag | string | number,
    ): string => {
      if (typeof value === 'number') {
        return accentColors[value % accentColors.length];
      }

      let index = orders.categories.indexOf(value);
      if (index === -1) {
        index = orders.contributions.indexOf(value);
      }
      if (index === -1) {
        index = orders.tags.indexOf(value);
      }

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
