'use client';

import { IconCircleFilled } from '@tabler/icons-react';

import { List, ListProps, rem, MantineColor, MantineSize } from '@mantine/core';

import { parseFormattedText } from '@/lib/textFormat';

type Props = ListProps & {
  items: string[];
  iconColor?: MantineColor | ((index: number) => MantineColor);
};

const getIconSize = (listSize: MantineSize) => {
  switch (listSize) {
    case 'xs':
      return rem(4);
    case 'sm':
      return rem(6);
    case 'md':
      return rem(8);
    case 'lg':
      return rem(10);
    default:
      return rem(6);
  }
};

export function CustomList({
  children,
  items,
  iconColor = 'brand',
  size = 'sm',
  ...props
}: Props) {
  return (
    <List spacing="md" size={size} {...props}>
      {items.map((item, index) => {
        const resolvedColor =
          typeof iconColor === 'function' ? iconColor(index) : iconColor;

        return (
          <List.Item
            key={index}
            icon={
              <IconCircleFilled
                size={getIconSize(size)}
                color={`var(--mantine-color-${resolvedColor}-6)`}
              />
            }
          >
            {parseFormattedText(item)}
          </List.Item>
        );
      })}
      {children}
    </List>
  );
}
