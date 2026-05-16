import { ElementType } from 'react';

import {
  Stack,
  Title,
  Text,
  Group,
  rem,
  ThemeIcon,
  MantineColor,
} from '@mantine/core';

import { parseFormattedText } from '@/lib/textFormat';

export type SectionHeaderProps = {
  title: string;
  description?: string;
  icon?: ElementType;
  iconColor?: MantineColor;
  withIconBackground?: boolean;
  variant?: 'card' | 'default';
};

export function SectionHeader({
  title,
  description,
  icon: Icon,
  iconColor = 'brand',
  withIconBackground = false,
  variant = 'default',
}: SectionHeaderProps) {
  const renderIcon = () => {
    if (!Icon) return null;

    if (withIconBackground) {
      return (
        <ThemeIcon variant="light" color={iconColor} size={rem(44)}>
          <Icon size={rem(24)} stroke={1.5} />
        </ThemeIcon>
      );
    }

    return (
      <Icon
        color={`var(--mantine-color-${iconColor}-6)`}
        size={rem(24)}
        stroke={1.5}
      />
    );
  };

  return (
    <Stack gap="xs">
      <Group gap="sm">
        {renderIcon()}

        <Title
          order={2}
          variant={variant}
          mb={0}
          style={{
            flex: 1,
          }}
        >
          {title}
        </Title>
      </Group>

      {description && (
        <Text variant="body">{parseFormattedText(description)}</Text>
      )}
    </Stack>
  );
}
