'use client';

import { Box } from '@mantine/core';

import { ThemedImage } from '@/components/layout/ThemedImage';

export function Banner() {
  return (
    <Box p={0} m={0}>
      <ThemedImage baseImageName="not-found-banner" w="100vw" />
    </Box>
  );
}
