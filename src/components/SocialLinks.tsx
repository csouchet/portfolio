'use client';

import { Anchor, SimpleGrid, rem } from '@mantine/core';

import { socialLinks } from '@/data/social';
import { useBrandColor } from '@/hooks/useColors';
import { lightDark } from '@/lib/color';

type Props = {
  isSingleCol?: boolean;
  withColoredIcon?: boolean;
};

export function SocialLinks({
  isSingleCol = false,
  withColoredIcon = false,
}: Props) {
  const getBrandColor = useBrandColor();

  return (
    <SimpleGrid
      cols={isSingleCol ? 1 : { base: 2, sm: 3, md: 2 }}
      spacing="xl"
      verticalSpacing="xs"
      mx={isSingleCol ? undefined : 'auto'}
      styles={
        isSingleCol
          ? undefined
          : {
              root: {
                width: 'fit-content',
                gridTemplateColumns: 'max-content max-content',
              },
            }
      }
    >
      {socialLinks.map(link => {
        const Icon = link.icon!;
        const iconColor = withColoredIcon
          ? lightDark(getBrandColor(link.name))
          : 'currentColor';

        return (
          <Anchor
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            c="dimmed"
          >
            <Icon size={rem(18)} stroke="1.5" color={iconColor} />
            <span>{link.name}</span>
          </Anchor>
        );
      })}
    </SimpleGrid>
  );
}
