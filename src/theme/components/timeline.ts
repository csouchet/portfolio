import { MantineThemeComponents, Timeline } from '@mantine/core';

export const TimelineTheme: MantineThemeComponents['Timeline'] =
  Timeline.extend({
    defaultProps: {
      bulletSize: 24,
      lineWidth: 2,
    },
  });
