import {
  MantineThemeComponents,
  rem,
  TextProps,
  Text,
  CSSProperties,
} from '@mantine/core';

export const TextTheme: MantineThemeComponents['Text'] = Text.extend({
  styles: (theme, props: TextProps) => {
    const variants: Record<string, CSSProperties> = {
      /**
       * overline: Used for subtitles (e.g., in PageHeader)
       */
      overline: {
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeights.sm,
        fontWeight: 700,
        color: 'var(--mantine-color-brand-6)',
        textTransform: 'uppercase',
        letterSpacing: rem(2),
        marginBottom: theme.spacing.sm,
      },

      /**
       * emphasis: High-contrast text for key callouts.
       */
      emphasis: {
        fontSize: theme.fontSizes.lg,
        lineHeight: theme.lineHeights.lg,
        fontWeight: 600,
        color:
          'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
      },

      /**
       * reading: Specifically for long-form text (articles/descriptions).
       */
      reading: {
        fontSize: theme.fontSizes.md,
        lineHeight: theme.lineHeights.md,
        color:
          'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-1))',
      },

      /**
       * metadata: Used for dates, tags, and secondary info (e.g., Spotlight descriptions).
       */
      metadata: {
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeights.sm,
        color:
          'light-dark(var(--mantine-color-dark-7), var(--mantine-color-dark-2))',
        whiteSpace: 'pre-line',
      },

      /**
       * body: Standard interface text.
       */
      body: {
        fontSize: theme.fontSizes.md,
        lineHeight: theme.lineHeights.md,
        color:
          'light-dark(var(--mantine-color-black), var(--mantine-color-white)',
      },

      /**
       * tertiary: Small bold accent text.
       */
      tertiary: {
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeights.sm,
        color: 'var(--mantine-color-brand-6)',
        fontWeight: 700,
        letterSpacing: rem(0.5),
      },

      /**
       * caption: Smallest utility text.
       */
      caption: {
        fontSize: theme.fontSizes.sm,
        lineHeight: 1.5,
        color: 'var(--mantine-color-dimmed)',
      },
    };

    return {
      root: variants[props.variant ?? 'default'],
    };
  },
});
