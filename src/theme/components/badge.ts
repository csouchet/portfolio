import { Badge, MantineThemeComponents } from '@mantine/core';

export const BadgeTheme: MantineThemeComponents['Badge'] = Badge.extend({
  defaultProps: { size: 'md', radius: 'xs', variant: 'light', color: 'brand' },
  styles: {
    root: {
      textTransform: 'capitalize',
      fontWeight: 600,
    },
  },
});
