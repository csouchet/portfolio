import { Container, MantineThemeComponents } from '@mantine/core';

export const ContainerTheme: MantineThemeComponents['Container'] =
  Container.extend({
    defaultProps: { size: 'lg' },

    styles: () => ({
      root: {
        paddingLeft: 'clamp(1rem, 5vw, 2rem)',
        paddingRight: 'clamp(1rem, 5vw, 2rem)',
      },
    }),
  });
