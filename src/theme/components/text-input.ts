import { TextInput, MantineThemeComponents } from '@mantine/core';

export const TextInputTheme: MantineThemeComponents['TextInput'] =
  TextInput.extend({
    defaultProps: { size: 'sm' },
    styles: {
      input: {
        background: 'light-dark(#FFFFFF,#0F1730)',
        border: '1px solid light-dark(#E7E9EF, rgba(255,255,255,.08))',
      },
    },
  });
