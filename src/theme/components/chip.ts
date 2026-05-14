import { Chip, MantineThemeComponents } from '@mantine/core';

export const ChipTheme: MantineThemeComponents['Chip'] = Chip.extend({
  defaultProps: {
    variant: 'light',
    size: 'sm',
    color: 'brand.6',
  },

  styles: {
    root: {
      textTransform: 'uppercase',
      fontWeight: '600',
    },
  },
});
