import {
  Card,
  CardProps,
  CSSProperties,
  MantineThemeComponents,
} from '@mantine/core';

export const CardTheme: MantineThemeComponents['Card'] = Card.extend({
  defaultProps: {
    padding: 'xl',
  },

  styles: (theme, props: CardProps) => {
    const base: CSSProperties = {
      backgroundColor: theme.other.surface.elevated,
      border: `1px solid ${theme.other.border.default}`,
      boxShadow: 'none',
    };

    const variants: Record<string, CSSProperties> = {
      default: base,

      item: {
        ...base,
        boxShadow: theme.shadows.card,
        border: 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },

      section: {
        ...base,
        boxShadow: theme.shadows.card,
        border: 'none',
        height: '100%',
        padding: theme.spacing.xxl,
      },

      banner: {
        padding: theme.spacing.xxl,
        border: 'none',
        overflow: 'hidden',
      },
    };

    return {
      root: variants[props.variant ?? 'default'],
    };
  },
});
