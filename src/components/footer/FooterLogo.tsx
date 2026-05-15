'use client';

import { Group, Image, rem, Stack, Text } from '@mantine/core';

type Props = {
  name: string;
  signature: string;
};

export function FooterLogo({ name, signature }: Props) {
  return (
    <Group gap="sm" align="flex-start" wrap="nowrap" mx="auto" w="fit-content">
      <Image src="/logo-dark.svg" alt="" h={rem(70)} w="auto" lightHidden />
      <Image src="/logo-light.svg" alt="" h={rem(70)} w="auto" darkHidden />

      <Stack gap={2} mt={4}>
        <Text
          fw={700}
          size="sm"
          lh={1.2}
          lts="-0.01em"
          c="light-dark(var(--mantine-color-black), var(--mantine-color-white))"
        >
          {name}
        </Text>

        <Text variant="caption">{signature}</Text>
      </Stack>
    </Group>
  );
}
