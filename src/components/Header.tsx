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
        fw={isActive ? 600 : 400}
        c={isActive ? 'blue.7' : 'dimmed'}
        size="lg"
      >
        {link.label}
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
          backgroundColor: 'white',
          borderBottom: '1px solid var(--mantine-color-gray-3)',
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

          {/* Mobile burger */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>

      {/* Mobile menu */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="100%"
      >
        <Stack gap="lg" mt="md">
          {links}
        </Stack>
      </Drawer>
    </>
  );
}
