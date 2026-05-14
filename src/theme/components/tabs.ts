import { Tabs, MantineThemeComponents } from '@mantine/core';

export const TabsTheme: MantineThemeComponents['Tabs'] = Tabs.extend({
  defaultProps: {
    radius: 'xs',
  },

  styles: theme => ({
    list: {
      '--tab-border-color': 'transparent',
    },
    tab: {
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
      paddingBottom: theme.spacing.md,
    },
  }),
});
