import { Menu, MantineThemeComponents, rem } from '@mantine/core';

export const MenuTheme: MantineThemeComponents['Menu'] = Menu.extend({
  defaultProps: {
    shadow: 'md',
  },

  styles: theme => ({
    dropdown: {
      backgroundColor: theme.other.surface.elevated,
      border: `1px solid ${theme.other.border.default}`,
      boxShadow: theme.shadows.card,
      padding: rem(4),
    },
    item: {
      fontWeight: 500,
      color:
        'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
      borderRadius: theme.radius.sm,
    },
    divider: {
      borderColor: theme.other.border.subtle,
    },
  }),
});
