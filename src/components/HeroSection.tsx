'use client';

import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';
import { siteConfig } from '@/config/site';

export function HeroSection() {
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
            animation: 'fadeUp 0.8s ease forwards',
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
            <span style={{ color: 'var(--mantine-color-blue-6)' }}>
              soigneusement conçues
            </span>
          </Text>

          {/* 🎯 CTA */}
          <Box style={{ position: 'relative' }}>
            {/* glow */}
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 180,
                height: 180,
                background: 'rgba(99,102,241,0.25)',
                filter: 'blur(90px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            <Button
              component="a"
              href="projects"
              size="md"
              radius="xl"
              style={{
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 10px 30px rgba(79,70,229,0.35)',
              }}
            >
              Voir mes projets
            </Button>

            <Text
              size="sm"
              c="dimmed"
              style={{
                marginTop: 12,
                opacity: 0.8,
              }}
            >
              Disponible pour missions freelance
            </Text>
          </Box>
        </Stack>
      </Container>

      {/* 🌿 bottom fade */}
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
