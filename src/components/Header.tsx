'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Container,
  Group,
  Anchor,
  Text,
  Burger,
  Drawer,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const links = navLinks.map(link => {
    const isActive = pathname === link.href;

    return (
      <Anchor
        key={link.label}
        component={Link}
        href={link.href}
        onClick={close}
        size="sm"
        fw={500}
        aria-current={isActive ? 'page' : undefined}
        style={{
          position: 'relative',
          padding: '4px 0',
          color: isActive
            ? 'var(--mantine-color-text)'
            : 'var(--mantine-color-dimmed)',
        }}
      >
        {link.label}

        {isActive && (
          <span
            style={{
              position: 'absolute',
              bottom: -6,
              left: 0,
              right: 0,
              height: 2,
              borderRadius: 999,
              background: 'var(--mantine-color-blue-6)',
            }}
          />
        )}
      </Anchor>
    );
  });

  return (
    <>
      {/* Top bar */}
      <Container
        size="lg"
        px="md"
        py="xs"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          backgroundColor:
            'light-dark(rgba(255,255,255,0.6), rgba(10,10,10,0.6))',
          borderBottom: '1px solid var(--mantine-color-default-border)',
        }}
      >
        <Group justify="space-between" align="center">
          {/* Logo */}
          <Text
            component={Link}
            href="/"
            fw={700}
            size="md"
            style={{ textDecoration: 'none' }}
          >
            {siteConfig.name}
          </Text>

          {/* Desktop navigation */}
          <Group gap="xl" visibleFrom="sm">
            {links}
          </Group>

          <Group gap="sm">
            <ThemeToggle />
            {/* Mobile burger */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
          </Group>
        </Group>
      </Container>

      {/* Mobile menu */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="100%"
        overlayProps={{
          opacity: 0.55,
          blur: 4,
        }}
      >
        <Stack gap="lg" mt="md">
          {links}
        </Stack>
      </Drawer>
    </>
  );
}
