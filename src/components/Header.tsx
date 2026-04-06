'use client';

import { useState } from 'react';

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
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { LanguageSwitch } from '@/components/LanguageSwitch';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteConfig } from '@/config/site';
import { commonContent } from '@/content/fr/common';
import { NAV_KEYS } from '@/types/navigation';

type NavItemProps = {
  label: string;
  href: string;
  pathname: string;
  onClick?: () => void;
};

function NavItem({ label, href, pathname, onClick }: NavItemProps) {
  const [hovered, setHovered] = useState(false);

  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
  const isVisible = isActive || hovered;

  return (
    <Anchor
      component={Link}
      href={href}
      underline="never"
      onClick={onClick}
      size="sm"
      fw={500}
      aria-current={isActive ? 'page' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '4px 0',
        color: isVisible
          ? 'var(--mantine-color-text)'
          : 'var(--mantine-color-dimmed)',
        transition: 'color 0.2s ease',
      }}
    >
      {label}

      <Box
        component="span"
        style={{
          position: 'absolute',
          bottom: -6,
          left: 0,
          height: 2,
          borderRadius: 999,
          background: 'var(--mantine-color-blue-6)',
          width: isVisible ? '100%' : '0%',
          transition: 'width 0.2s ease',
        }}
      />
    </Anchor>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const content = commonContent.navigation;

  const links = NAV_KEYS.map(key => ({
    key,
    href: key === 'home' ? '/' : `/${key}`,
    label: content.labels[key],
  }));

  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(16px)',
        backgroundColor:
          'light-dark(rgba(255,255,255,0.6), rgba(10,10,10,0.6))',
        borderBottom: '1px solid var(--mantine-color-default-border)',
      }}
    >
      {/* Top bar */}
      <Container size="lg" px="md" py="xs">
        <Group justify="space-between" align="center">
          {/* Logo */}
          <Text
            component={Link}
            href="/"
            fw={700}
            size="md"
            style={{
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            {siteConfig.name}
          </Text>

          {/* Desktop navigation */}
          <Group gap="xl" visibleFrom="sm">
            {links.map(({ key, ...link }) => (
              <NavItem key={key} {...link} pathname={pathname} />
            ))}
          </Group>

          {/* Right actions */}
          <Group gap="sm">
            <ThemeToggle />
            <LanguageSwitch />

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label={content.toggle}
            />
          </Group>
        </Group>
      </Container>

      {/* Mobile menu */}
      <Drawer
        opened={opened}
        onClose={close}
        title={content.menu}
        padding="md"
        size="100%"
        withCloseButton
        trapFocus
        closeOnClickOutside
        closeOnEscape
        overlayProps={{
          opacity: 0.55,
          blur: 4,
        }}
      >
        <Stack gap="lg" mt="md">
          {links.map(({ key, ...link }) => (
            <NavItem key={key} {...link} pathname={pathname} onClick={close} />
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
