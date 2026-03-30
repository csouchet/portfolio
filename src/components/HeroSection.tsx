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
        background:
          'radial-gradient(circle at 50% 30%, rgba(99,102,241,0.08), transparent 60%)',
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
          <Title
            order={1}
            style={{
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {siteConfig.name}
          </Title>

          <Text size="lg" c="dimmed">
            Ingénieure développeuse senior Java & React
          </Text>

          <Text
            size="lg"
            style={{
              fontWeight: 500,
            }}
          >
            Des expériences fiables, accessibles et{' '}
            <span style={{ color: 'var(--mantine-color-blue-6)' }}>
              soigneusement conçues
            </span>
          </Text>

          <Stack gap="sm" align="center">
            <Button
              component="a"
              href="#projects"
              size="md"
              style={{
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              }}
            >
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
