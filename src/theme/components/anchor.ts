import { Anchor, MantineThemeComponents, rem } from '@mantine/core';

export const AnchorTheme: MantineThemeComponents['Anchor'] = Anchor.extend({
  defaultProps: {
    size: 'sm',
    c: 'brand',
    fw: 600,
    display: 'inline-flex',

    style: {
      alignItems: 'center',
      verticalAlign: 'middle',
      textUnderlineOffset: rem(4),
      gap: rem(8),
    },
  },
});
