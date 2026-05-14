'use client';

import { useMantineTheme } from '@mantine/core';

import { ColorSchemeMapping } from '@/types/color';

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
