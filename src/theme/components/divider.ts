import { Divider, MantineThemeComponents } from '@mantine/core';

export const DividerTheme: MantineThemeComponents['Divider'] = Divider.extend({
  styles: theme => ({
    root: {
      borderColor: theme.other.border.subtle,
    },
    label: {
      color:
        'light-dark(var(--mantine-color-dark-5), var(--mantine-color-dark-3))',
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      backgroundColor: 'transparent',
    },
  }),
});
