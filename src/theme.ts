'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'brand',

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
      h1: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        lineHeight: '1.15',
      },
      h2: {
        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
        lineHeight: '1.2',
      },
      h3: {
        fontSize: '1.25rem',
        lineHeight: '1.3',
      },
    },
  },

  components: {
    Container: {
      defaultProps: {
        size: 'lg',
        px: 'md',
      },
    },

    Text: {
      styles: {
        root: {
          lineHeight: 1.6,
        },
      },
    },

    Title: {
      styles: {
        root: {
          letterSpacing: '-0.02em',
        },
      },
    },

    Button: {
      defaultProps: {
        radius: 'xl',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },

    Anchor: {
      styles: {
        root: {
          textUnderlineOffset: '3px',
        },
      },
    },

    ActionIcon: {
      defaultProps: {
        radius: 'xl',
      },
      styles: {
        root: {
          transition: 'transform 0.15s ease',
        },
      },
    },
  },

  other: {
    layout: {
      textMaxWidth: '65ch',
      sectionSpacing: 'clamp(3rem, 6vw, 6rem)',
    },
  },
});
