import { NavLink, rem } from '@mantine/core';

export const NavLinkTheme = NavLink.extend({
  defaultProps: {
    variant: 'light',
  },

  styles: {
    root: {
      minHeight: rem(44),
      paddingInline: rem(14),
    },

    label: {
      fontWeight: 600,
      fontSize: rem(15),
    },

    description: {
      fontSize: rem(13),
    },
  },
});
