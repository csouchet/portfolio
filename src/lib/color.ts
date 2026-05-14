import { ColorSchemeMapping } from '@/types/color';

export const lightDark = ({ light, dark }: ColorSchemeMapping) =>
  `light-dark(var(--mantine-color-${light.replace('.', '-')}), var(--mantine-color-${dark.replace('.', '-')}))`;
