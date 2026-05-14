import {
  MantineThemeComponents,
  Paper,
  PaperProps,
  CSSProperties,
} from '@mantine/core';

export const PaperTheme: MantineThemeComponents['Paper'] = Paper.extend({
  defaultProps: {
    withBorder: false,
  },

  styles: (theme, props: PaperProps) => {
    const base: CSSProperties = {
      backgroundColor: theme.other.surface.elevated,
      boxShadow: theme.shadows.sm,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    const variants: Record<string, CSSProperties> = {
      default: base,

      summary: {
        ...base,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: `1px solid ${theme.other.border.default}`,
        padding: theme.spacing.md,
      },
    };

    return {
      root: variants[props.variant ?? 'default'],
    };
  },
});
