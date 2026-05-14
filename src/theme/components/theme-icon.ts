import {
  CSSProperties,
  MantineThemeComponents,
  ThemeIcon,
} from '@mantine/core';

export const ThemeIconTheme: MantineThemeComponents['ThemeIcon'] =
  ThemeIcon.extend({
    defaultProps: {
      size: 44,
    },

    styles: (_theme, props) => {
      const variants: Record<string, CSSProperties> = {
        feature: {
          backgroundColor:
            'light-dark(var(--mantine-color-brand-0), rgba(255, 107, 102, 0.1))',
          color: 'var(--mantine-color-brand-6)',
          border:
            '1px solid light-dark(transparent, rgba(255, 107, 102, 0.15))',
        },
      };

      return {
        root: variants[props.variant ?? 'default'],
      };
    },
  });
