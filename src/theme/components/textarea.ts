import { MantineThemeComponents, rem, Textarea } from '@mantine/core';

export const TextareaTheme: MantineThemeComponents['Textarea'] =
  Textarea.extend({
    defaultProps: { size: 'sm', minRows: 10 },

    styles: theme => ({
      input: {
        backgroundColor: theme.other.surface.subtle,
        borderColor: theme.other.border.default,
        color:
          'light-dark(var(--mantine-color-black), var(--mantine-color-dark-1))',
      },

      label: {
        fontWeight: 500,
        marginBottom: rem(6),
        color:
          'light-dark(var(--mantine-color-black), var(--mantine-color-dark-2))',
      },

      description: {
        marginTop: rem(4),
        color:
          'light-dark(var(--mantine-color-dark-5), var(--mantine-color-dark-4))',
      },
    }),
  });
