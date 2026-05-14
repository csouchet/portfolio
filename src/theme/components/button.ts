import { Button, MantineThemeComponents } from '@mantine/core';

export const ButtonTheme: MantineThemeComponents['Button'] = Button.extend({
  defaultProps: { size: 'sm', color: 'brand', variant: 'filled' },
});
