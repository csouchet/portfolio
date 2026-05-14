import { Pagination, MantineThemeComponents } from '@mantine/core';

export const PaginationTheme: MantineThemeComponents['Pagination'] =
  Pagination.extend({
    defaultProps: {
      color: 'brand.6',
      autoContrast: true,
    },

    styles: () => ({
      control: {
        border: 'none',
        fontWeight: 600,
      },
    }),
  });
