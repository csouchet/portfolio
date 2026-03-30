'use client';

import { Container, Title, Text, Button, Stack } from '@mantine/core';

export function HeroSection() {
  return (
    <Container
      size="sm"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack
        align="center"
        gap="lg"
        style={{
          width: '100%',
          textAlign: 'center',
          maxWidth: '65ch',
          margin: '0 auto',
        }}
      >
        {/* Name */}
        <Title
          order={1}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 1.2,
          }}
        >
          Céline Souchet
        </Title>

        {/* Tagline */}
        <Text
          size="lg"
          c="dimmed"
          style={{
            lineHeight: 1.6,
          }}
        >
          Frontend developer crafting clean, accessible and meaningful digital
          experiences.
        </Text>

        {/* CTA */}
        <Button
          size="md"
          radius="xl"
          variant="filled"
          component="a"
          href="#projects"
          style={{
            marginTop: '0.5rem',
          }}
        >
          View my work
        </Button>
      </Stack>
    </Container>
  );
}
