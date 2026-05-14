import { MantineTheme, rem } from '@mantine/core';

export const typography: Pick<
  MantineTheme,
  'fontFamily' | 'fontFamilyMonospace' | 'headings'
> = {
  fontFamily:
    'var(--font-sans), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',

  headings: {
    fontFamily:
      'var(--font-sans), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    fontWeight: '600',

    textWrap: 'balance' as const,

    sizes: {
      h1: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        lineHeight: '1.2',
        fontWeight: '700',
      },

      h2: {
        fontSize: 'clamp(1.5rem, 3.5vw, 1.875rem)',
        lineHeight: '1.3',
        fontWeight: '650',
      },

      h3: { fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', lineHeight: '1.4' },

      h4: {
        fontSize: rem(18),
        lineHeight: '1.4',
      },

      h5: {
        fontSize: rem(16),
        lineHeight: '1.4',
      },

      h6: {
        fontSize: rem(14),
        lineHeight: '1.4',
      },
    },
  },
};
