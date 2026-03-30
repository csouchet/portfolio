'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    brand: [
      '#eef2ff',
      '#e0e7ff',
      '#c7d2fe',
      '#a5b4fc',
      '#818cf8',
      '#6366f1',
      '#4f46e5',
      '#4338ca',
      '#3730a3',
      '#312e81',
    ],
  },

  primaryColor: 'brand',

  fontFamily: 'system-ui, -apple-system, sans-serif',

  defaultRadius: 'md',

  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  headings: {
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '2rem', lineHeight: '1.2' },
      h2: { fontSize: '1.6rem', lineHeight: '1.3' },
      h3: { fontSize: '1.3rem', lineHeight: '1.4' },
    },
  },

  components: {
    /* Layout */
    Container: {
      defaultProps: {
        size: 'lg',
        px: 'md', // ✔ mobile-first padding
      },
    },

    /* Typography */
    Text: {
      styles: {
        root: {
          lineHeight: 1.5,
        },
      },
    },

    Title: {
      styles: {
        root: {
          letterSpacing: '-0.5px',
        },
      },
    },

    /* Buttons */
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },

    /* Links */
    Anchor: {
      styles: {
        root: {
          textUnderlineOffset: '2px',
        },
      },
    },

    ActionIcon: {
      defaultProps: {
        radius: 'xl',
      },
    },
  },

  /* Tokens UX réutilisables */
  other: {
    layout: {
      textMaxWidth: '65ch',
    },
  },
});
