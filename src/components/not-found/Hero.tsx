'use client';

import React from 'react';

import { IconAlertCircleFilled } from '@tabler/icons-react';

import { Title, Text, Group, Stack, Box, Grid, Badge } from '@mantine/core';

import { CTAButton } from '@/components/CTAButton';
import { ThemedImage } from '@/components/layout/ThemedImage';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

type Props = {
  content: ReturnType<typeof getContent>['notFound']['hero'];
  locale: Locale;
};

export function Hero({ content, locale }: Props) {
  return (
    <Stack variant="header">
      <Grid align="center" gap="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md" align="flex-start">
            <Badge leftSection={<IconAlertCircleFilled size={16} />}>
              {content.badge}
            </Badge>

            <Box>
              <Text
                variant="gradient"
                gradient={{ from: 'brand.6', to: 'violet.6', deg: 135 }}
                fw={800}
                fz="clamp(5rem, 15vw, 10rem)"
                lh={1}
                lts="-0.02em"
              >
                {content.code}
              </Text>

              <Title order={1} mt="xs" mb="sm" fz="clamp(1.5rem, 4vw, 2.5rem)">
                {content.title}
              </Title>

              <Text maw={450}>{content.description}</Text>
            </Box>

            <CTAButton content={content.cta} href={`/${locale}`} mt="sm" />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Group justify="center">
            <ThemedImage baseImageName="not-found" w="50vw" />
          </Group>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
