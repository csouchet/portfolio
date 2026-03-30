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
        position: 'relative',
        overflow: 'hidden',

        background: `
  radial-gradient(
    circle at 50% 30%,
    rgba(99,102,241,0.12),
    transparent 60%
  ),
  linear-gradient(
    to bottom,
    transparent,
    rgba(0,0,0,0.02)
  )
`,
      }}
    >
      <Container size="sm">
        <Stack
          align="center"
          gap="xl"
          style={{
            textAlign: 'center',
            maxWidth: '65ch',
            margin: '0 auto',

            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <Title
            order={1}
            style={{
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
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
              maxWidth: '50ch',
            }}
          >
            Des expériences fiables, accessibles et{' '}
            <span
              style={{
                color: 'var(--mantine-color-blue-6)',
              }}
            >
              soigneusement conçues
            </span>
          </Text>

          {/* 🎯 CTA */}
          <Stack gap="xs" align="center">
            <Button
              component="a"
              href="#projects"
              size="md"
              radius="xl"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 10px 30px rgba(79,70,229,0.35)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 14px 40px rgba(0,0,0,0.16)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 10px 30px rgba(0,0,0,0.12)';
              }}
            >
              Voir mes projets
            </Button>

            <Box
              style={{
                position: 'absolute',
                width: 200,
                height: 200,
                background: 'rgba(99,102,241,0.15)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            <Text size="sm" c="dimmed" style={{ opacity: 0.8 }}>
              Disponible pour missions freelance
            </Text>
          </Stack>
        </Stack>
      </Container>

      {/* 🌿 subtle bottom fade */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, transparent, var(--mantine-color-body))',
        }}
      />
    </Box>
  );
}
