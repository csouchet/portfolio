import { Drawer, MantineThemeComponents } from '@mantine/core';

export const DrawerTheme: MantineThemeComponents['Drawer'] = Drawer.extend({
  defaultProps: {
    overlayProps: {
      backgroundOpacity: 0.55,
      blur: 4,
    },
  },

  styles: theme => ({
    content: {
      backgroundColor: theme.other.surface.elevated,
      border: `1px solid ${theme.other.border.default}`,
    },
    header: {
      backgroundColor: 'transparent',
    },
    title: {
      fontWeight: 600,
      color:
        'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
    },
    close: {
      color:
        'light-dark(var(--mantine-color-dark-5), var(--mantine-color-dark-3))',
    },
  }),
});
