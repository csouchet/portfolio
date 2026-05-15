'use client';

import React from 'react';

import {
  Title,
  Text,
  Stack,
  Box,
  Container,
  Grid,
  Badge,
  rem,
  Space,
} from '@mantine/core';

import { WaveBackground } from '@/components/layout/WaveBackground';
import { parseFormattedText } from '@/lib/textFormat';

type Props = React.PropsWithChildren<{
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: React.ElementType;
  description?: string;
  rightSection?: React.ReactNode;
  headerFooter?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  withWaves?: boolean;
}>;

export function PageHeader({
  title,
  subtitle,
  badge,
  badgeIcon: BadgeIcon,
  description,
  rightSection,
  headerFooter,
  breadcrumbs,
  children,
  withWaves = true,
}: Props) {
  return (
    <>
      <Box component="section" pos="relative" style={{ overflow: 'hidden' }}>
        {withWaves && (
          <WaveBackground
            baseImageName="waves-title-page"
            bgsz={{ base: '45% auto ', sm: '50vw auto' }}
          />
        )}

        <Container pos="relative" style={{ zIndex: 1 }}>
          <Stack variant="header">
            {breadcrumbs}
            {breadcrumbs && <Space h="sm" />}

            <Grid gap="xl" align="center" pos="relative">
              <Grid.Col span={{ base: 12, md: rightSection ? 7 : 12 }}>
                <Stack
                  gap="xs"
                  maw={rem(500)}
                  pr={{ base: 0, md: rightSection ? 'xl' : 0 }}
                >
                  {badge && (
                    <Badge
                      leftSection={BadgeIcon ? <BadgeIcon size={16} /> : null}
                    >
                      {badge}
                    </Badge>
                  )}

                  <Title order={1}>{parseFormattedText(title)}</Title>

                  {subtitle && (
                    <Text variant="overline">
                      {parseFormattedText(subtitle)}
                    </Text>
                  )}

                  {description && (
                    <Text variant="body">
                      {parseFormattedText(description)}
                    </Text>
                  )}

                  {children && <Box mt="sm">{children}</Box>}
                </Stack>
              </Grid.Col>

              {rightSection && (
                <Grid.Col span={{ base: 12, md: 5 }}>{rightSection}</Grid.Col>
              )}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {headerFooter && (
        <Container>
          <Box mt="md">{headerFooter}</Box>
        </Container>
      )}
    </>
  );
}
