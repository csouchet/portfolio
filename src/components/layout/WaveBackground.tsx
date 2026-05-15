'use client';

import { Box, BoxProps } from '@mantine/core';

type Props = BoxProps & {
  baseImageName: string;
  backgroundColor?: { light: string; dark: string };
};

export function WaveBackground({
  baseImageName,
  backgroundColor,
  bgsz = { base: '60% auto', sm: 'auto 75%' },
  bgp = 'bottom right',
  style,
  ...props
}: Props) {
  const waveStyles = {
    position: 'absolute' as const,
    inset: 0,
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
        bgsz={bgsz}
        bgp={bgp}
        {...props}
      />
      <Box
        lightHidden
        style={{
          ...waveStyles,
          backgroundColor: backgroundColor?.dark,
          backgroundImage: `url('/${baseImageName}-dark.svg')`,
        }}
        bgsz={bgsz}
        bgp={bgp}
        {...props}
      />
    </>
  );
}
