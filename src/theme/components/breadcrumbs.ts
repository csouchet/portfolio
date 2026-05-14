import React from 'react';

import { IconChevronRight } from '@tabler/icons-react';

import { Breadcrumbs, rem } from '@mantine/core';

export const BreadcrumbsTheme = Breadcrumbs.extend({
  defaultProps: {
    separator: React.createElement(IconChevronRight, { size: rem(14) }),
    separatorMargin: 'sm',
    color: 'light-dark(black, white)',
  },

  styles: {
    breadcrumb: {
      fontSize: rem(14),
      fontWeight: 500,
    },

    separator: {
      opacity: 0.45,
    },
  },
});
