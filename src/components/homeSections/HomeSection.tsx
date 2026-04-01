'use client';

import { ReactNode } from 'react';

import { Container, Title, Text, Stack, Box, Button } from '@mantine/core';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;

  cta?: {
    label: string;
    href: string;
  };

  gradientPosition?: 'left' | 'right';
};

export function HomeSection({
  title,
  description,
  children,
  cta,
  gradientPosition = 'right',
}: Props) {
  return (
    <Box
      component="section"
      style={theme => ({
        paddingBlock: theme.other.layout.sectionSpacing,

        background: `
          radial-gradient(
            circle at ${gradientPosition === 'right' ? '80%' : '20%'} 0%,
            rgba(99,102,241,0.06),
            transparent 50%
          ),
          linear-gradient(
            to bottom,
            transparent,
            var(--mantine-color-body)
          )
        `,

        borderTop: `1px solid var(--mantine-color-default-border)`,
      })}
    >
      <Container>
        <Stack gap="xl" mt="md">
          {/* Header */}
          <Stack gap={6}>
            <Title order={2}>{title}</Title>

            {description && (
              <Text size="md" c={{ light: 'gray.6', dark: 'gray.4' }} lh={1.5}>
                {description}
              </Text>
            )}
          </Stack>

          {/* Content */}
          {children}

          {/* CTA */}
          {cta && (
            <Button
              component="a"
              href={cta.href}
              variant="subtle"
              size="md"
              style={{ alignSelf: 'flex-start' }}
              rightSection="→"
            >
              {cta.label}
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
