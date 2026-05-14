import { CSSProperties, MantineThemeComponents, Stack } from '@mantine/core';

export const StackTheme: MantineThemeComponents['Stack'] = Stack.extend({
  defaultProps: { gap: 'md' },

  styles: (theme, props) => {
    const variants: Record<string, CSSProperties> = {
      page: {
        gap: 'clamp(4rem, 8vw, 6rem)',
        paddingTop: 'clamp(4rem, 8vw, 6rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      },

      header: {
        paddingTop: 'clamp(3rem, 8vw, 6rem)',
        paddingBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
        gap: theme.spacing.md,
      },

      section: {
        gap: theme.spacing.xl,
      },
    };

    return {
      root: variants[props.variant ?? 'default'],
    };
  },
});
