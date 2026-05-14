import { SegmentedControl, MantineThemeComponents } from '@mantine/core';

export const SegmentedControlTheme: MantineThemeComponents['SegmentedControl'] =
  SegmentedControl.extend({
    defaultProps: {
      radius: 'xl',
      size: 'xs',
      autoContrast: true,
      bg: 'brand.6',
    },

    styles: () => ({
      root: {
        border: 'none',
        padding: '4px',
      },
      label: {
        fontWeight: 600,
      },
      indicator: {
        boxShadow: 'none',
        border: 'none',
      },
    }),
  });
