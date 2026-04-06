'use client';

import Link from 'next/link';

import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Box,
} from '@mantine/core';

import { useContent } from '@/hooks/useContent';

export function HeroSection() {
  const { home } = useContent();
  const content = home.hero;

  return (
    <Box
      component="section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="sm">
        <Stack gap="lg">
          <Title order={1} style={{ lineHeight: 1.1 }}>
            {content.title}
          </Title>

          <Text size="lg" c="dimmed">
            {content.description}
          </Text>

          <Text size="sm" c="dimmed">
            {content.proof}
          </Text>

          <Group mt="md">
            <Button component={Link} href="/projects" radius="xl">
              {content.cta.primary}
            </Button>

            <Button
              component={Link}
              href="/services"
              variant="subtle"
              radius="xl"
            >
              {content.cta.secondary}
            </Button>
          </Group>

          <Text size="sm" c="dimmed">
            {content.availability}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
