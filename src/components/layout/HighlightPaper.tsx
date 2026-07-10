'use client';

import React, { PropsWithChildren } from 'react';

import { IconProps } from '@tabler/icons-react';

import { Group, Paper, Title, rem, PaperProps } from '@mantine/core';

type AccentPaperColor =
  'violet' | 'brand' | 'sage' | 'blue' | 'orange' | 'pink';

type Props = PaperProps & {
  title: string;
  color: AccentPaperColor;
  icon: React.FC<IconProps>;
};

export function HighlightPaper({
  title,
  color,
  icon: Icon,
  children,
  ...otherProps
}: PropsWithChildren<Props>) {
  const bgColor = `light-dark(var(--mantine-color-${color}-1), var(--mantine-color-${color}-9))`;
  const iconColor = `var(--mantine-color-${color}-6)`;

  return (
    <Paper bg={bgColor} shadow="none" {...otherProps}>
      <Group gap="sm" mb="sm">
        <Icon color={iconColor} size={rem(24)} />
        <Title order={3} fz="h4">
          {title}
        </Title>
      </Group>

      {children}
    </Paper>
  );
}
