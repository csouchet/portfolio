'use client';

import { ReactNode } from 'react';

import { Card, CardProps } from '@mantine/core';

type Props = CardProps & {
  children: ReactNode;
};

export function BaseCard({ children, ...props }: Props) {
  return (
    <Card
      radius="md"
      withBorder
      p="lg"
      {...props}
      styles={theme => ({
        root: {
          transition: 'all 180ms ease',
          backgroundColor: 'var(--mantine-color-body)',
          border: '1px solid var(--mantine-color-default-border)',

          '@media (hover: hover)': {
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: theme.shadows.lg,
              borderColor: 'var(--mantine-color-brand-4)',

              background: `
                linear-gradient(
                  to bottom,
                  var(--mantine-color-body),
                  rgba(99,102,241,0.05)
                )
              `,
            },
          },

          '&:focusVisible': {
            outline: `2px solid var(--mantine-color-brand-5)`,
            outlineOffset: 2,
          },
        },
      })}
    >
      {children}
    </Card>
  );
}
