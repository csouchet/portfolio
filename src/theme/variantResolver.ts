import {
  defaultVariantColorsResolver,
  VariantColorsResolver,
} from '@mantine/core';

export const customVariantColorResolver: VariantColorsResolver = input => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  if (input.variant === 'light' && input.color === 'brand') {
    return {
      ...defaultResolvedColors,
      background: `light-dark(var(--mantine-color-${input.color}Light-0), var(--mantine-color-${input.color}Dark-9))`,
      backgroundBlendMode: 'overlay',
      color: `light-dark(var(--mantine-color-${input.color}Light-6), var(--mantine-color-${input.color}Dark-6))`,
      hover: `light-dark(var(--mantine-color-${input.color}Light-1), var(--mantine-color-${input.color}Dark-8))`,
      border: 'transparent',
    };
  }

  return defaultResolvedColors;
};
