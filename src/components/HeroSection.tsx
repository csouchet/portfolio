'use client';

import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      component="section"
      style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="sm">
        <Stack
          align="center"
          gap="lg"
          style={{
            textAlign: 'center',
            maxWidth: '65ch',
            margin: '0 auto',

            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Title order={1}>{siteConfig.name}</Title>

          <Text size="lg" c="dimmed">
            Ingénieure développeuse senior Java & React
            <br />
            <span
              style={{
                color: 'var(--mantine-color-text)',
                fontWeight: 500,
              }}
            >
              Des expériences fiables, accessibles et soigneusement conçues
            </span>
          </Text>

          <Stack gap="xs" align="center">
            <Button component="a" href="#projects">
              Voir mes projets
            </Button>

            <Text size="sm" c="dimmed">
              Disponible pour missions freelance
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
