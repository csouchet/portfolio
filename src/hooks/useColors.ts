'use client';

import { useCallback } from 'react';

import { useMantineTheme } from '@mantine/core';

import { accentColors } from '@/theme/utils/colors';
import { ColorSchemeMapping } from '@/types/color';

export function useAccentColor() {
  return useCallback((value: string | number): string => {
    if (typeof value === 'number') {
      return accentColors[value % accentColors.length];
    }

    const finalIndex = 0;

    return accentColors[finalIndex % accentColors.length];
  }, []);
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
