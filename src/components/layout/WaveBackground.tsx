'use client';

import { Box, BoxProps } from '@mantine/core';

type Props = BoxProps & {
  baseImageName: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundColor?: { light: string; dark: string };
};

export function WaveBackground({
  baseImageName,
  backgroundPosition = 'bottom right',
  backgroundSize = 'auto 75%',
  backgroundColor,
  style,
  ...props
}: Props) {
  const waveStyles = {
    position: 'absolute' as const,
    inset: 0,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat: 'no-repeat',
    pointerEvents: 'none' as const,
    zIndex: 0,
    ...style,
  };

  return (
    <>
      <Box
        darkHidden
        style={{
          ...waveStyles,
          backgroundColor: backgroundColor?.light,
          backgroundImage: `url('/${baseImageName}-light.svg')`,
        }}
        {...props}
      />
      <Box
        lightHidden
        style={{
          ...waveStyles,
          backgroundColor: backgroundColor?.dark,
          backgroundImage: `url('/${baseImageName}-dark.svg')`,
        }}
        {...props}
      />
    </>
  );
}
