'use client';

import { Grid, Stack, Title, Text, Image, Box } from '@mantine/core';

import { getContent } from '@/lib/i18n';

type Props = {
  content: ReturnType<typeof getContent>['about']['personal'];
};

export function AboutPersonal({ content }: Props) {
  return (
    <Grid
      component="section"
      gap="xl"
      align="center"
      aria-label={content.title}
    >
      <Grid.Col span={{ base: 12, sm: 4, md: 3 }} ta="center">
        <Image src="/vase.png" alt="Artisanat et céramique" radius="md" />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 8, md: 9 }}>
        <Stack gap="xs">
          <Title order={2}>{content.title}</Title>
          <Text>{content.description}</Text>

          <Box c="sage.5" mt="sm">
            <svg
              width="60"
              height="12"
              viewBox="0 0 60 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6C5 6 5 1 10 1C15 1 15 11 20 11C25 11 25 1 30 1C35 1 35 11 40 11C45 11 45 1 50 1C55 1 55 6 60 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
