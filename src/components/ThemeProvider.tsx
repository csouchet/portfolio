'use client';

import React from 'react';

import { MantineProvider, CSSVariablesResolver } from '@mantine/core';

import { baseTheme } from '@/theme/base';

const resolver: CSSVariablesResolver = () => ({
  variables: {},

  light: {
    '--mantine-color-body': '#FCFBFD',
  },

  dark: {
    '--mantine-color-body': '#060f24',
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={baseTheme}
      defaultColorScheme="auto"
      cssVariablesResolver={resolver}
    >
      {children}
    </MantineProvider>
  );
}
