'use client';

import Link from 'next/link';

import { IconArrowLeft } from '@tabler/icons-react';

import { Container, Stack, Title, Text, Button, Box } from '@mantine/core';

export default function NotFound() {
  return (
    <Container size="sm">
      <Stack
        align="center"
        justify="center"
        h="85vh"
        gap="xl"
        style={{ position: 'relative' }}
      >
        {/* Glow background */}
        <Box
          style={{
            position: 'absolute',
            inset: -40,
            borderRadius: 32,
            background:
              'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.12), transparent 70%)',
            zIndex: 0,
          }}
        />

        <Stack
          align="center"
          gap="lg"
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* 404 gradient */}
          <Title
            order={1}
            style={{
              fontSize: 'clamp(4rem, 10vw, 6rem)',
              lineHeight: 1,
              letterSpacing: '-2px',
              background:
                'linear-gradient(135deg, var(--mantine-color-brand-5), var(--mantine-color-brand-3))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </Title>

          {/* Title */}
          <Title order={2} ta="center">
            Page not found
          </Title>

          {/* Description */}
          <Text c="dimmed" ta="center" maw={420}>
            La page que vous recherchez n’existe pas ou a été déplacée.
          </Text>

          {/* CTA */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              leftSection={<IconArrowLeft size={16} />}
              variant="gradient"
              gradient={{ from: 'brand.5', to: 'brand.7' }}
              style={{
                transition: 'all 150ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--mantine-shadow-sm)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Retour à l’accueil
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
