'use client';

import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  return (
    <Box
      component="section"
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',

        background: `
          radial-gradient(
            circle at 50% 30%,
            rgba(99,102,241,0.14),
            transparent 60%
          ),
          linear-gradient(
            to bottom,
            transparent,
            rgba(0,0,0,0.03)
          )
        `,
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
            animation: 'fadeUp 0.8s ease forwards',
          }}
        >
          <Title
            order={1}
            style={{
              lineHeight: 1.03,
              letterSpacing: '-0.035em',
            }}
          >
            {siteConfig.name}
          </Title>

          <Text size="lg" c="dimmed" style={{ opacity: 0.85 }}>
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
            <span style={{ color: 'var(--mantine-color-brand-6)' }}>
              soigneusement conçues
            </span>
          </Text>

          <Box style={{ position: 'relative' }}>
            {/* Glow */}
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -45%)',
                width: 220,
                height: 220,
                background: 'rgba(99,102,241,0.14)',
                filter: 'blur(140px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            <Stack
              align="center"
              gap="xs"
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Button
                component="a"
                href="/projects"
                size="md"
                radius="xl"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                  boxShadow: '0 10px 30px rgba(79,70,229,0.35)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                styles={{
                  root: {
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 14px 40px rgba(79,70,229,0.45)',
                    },
                    '&:focusVisible:not(:hover)': {
                      outline: '2px solid var(--mantine-color-brand-5)',
                      outlineOffset: '2px',
                    },
                  },
                }}
              >
                Voir mes projets
              </Button>

              <Text size="sm" c="dimmed" style={{ opacity: 0.8 }}>
                Disponible pour missions freelance
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>

      {/* 🌿 Bottom fade */}
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
