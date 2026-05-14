'use client';

import { Image, ImageProps } from '@mantine/core';

type Props = ImageProps & {
  baseImageName: string;
};

export function ThemedImage({ baseImageName, ...props }: Props) {
  return (
    <>
      <Image
        src={`/${baseImageName}-light.svg`}
        alt={`${baseImageName} pour le light theme`}
        darkHidden
        {...props}
      />
      <Image
        src={`/${baseImageName}-dark.svg`}
        alt={`${baseImageName} pour le dark theme`}
        lightHidden
        {...props}
      />
    </>
  );
}
