import { ElementType } from 'react';

import {
  Stack,
  Title,
  Text,
  Group,
  rem,
  Divider,
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
  withDivider?: boolean;
  variant?: 'card' | 'default';
};

export function SectionHeader({
  title,
  description,
  icon: Icon,
  iconColor = 'brand',
  withIconBackground = false,
  withDivider = false,
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
      <Group
        gap="sm"
        wrap="nowrap"
        mb={!Icon && !withDivider ? 'md' : undefined}
      >
        {renderIcon()}

        <Title
          order={2}
          variant={variant}
          mb={Icon || withDivider ? 0 : undefined}
          style={{
            flex: withDivider ? 0 : 1,
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Title>

        {withDivider && <Divider style={{ flex: 1 }} />}
      </Group>

      {description && (
        <Text variant="body">{parseFormattedText(description)}</Text>
      )}
    </Stack>
  );
}
