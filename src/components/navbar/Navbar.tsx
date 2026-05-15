'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Box, Container, Group, Tabs, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { siteSharedContent } from '@/content/shared/site';
import { useContent } from '@/hooks/useContent';
import { NAV_KEYS } from '@/types/navigation';

import { NavbarActions } from './NavbarActions';
import { NavbarDrawer } from './NavbarDrawer';
import { NavbarLogo } from './NavbarLogo';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { common, locale } = useContent();
  const content = common.navigation;

  const links = NAV_KEYS.map(key => ({
    key,
    href: key === 'home' ? `/${locale}` : `/${locale}/${key}`,
    label: content.labels[key],
  }));

  const activeTab = links.find(link =>
    link.href === `/${locale}`
      ? pathname === `/${locale}`
      : pathname.startsWith(link.href),
  )?.href;

  return (
    <Box
      component="header"
      bg="var(--mantine-color-black)"
      color="var(--mantine-color-white)"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom:
          '1px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-7))',
      }}
    >
      <Container size="lg" px="md">
        <Group justify="space-between" align="center" h={rem(72)}>
          <NavbarLogo locale={locale} name={siteSharedContent.name} />

          <Tabs
            visibleFrom="md"
            value={activeTab}
            onChange={value => router.push(value as string)}
            c="white"
          >
            <Tabs.List
              grow
              justify="center"
              style={{ '--tab-hover-color': 'var(--mantine-color-dark-5)' }}
            >
              {links.map(({ key, href, label }) => (
                <Tabs.Tab key={key} value={href} aria-label={href}>
                  {label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          <NavbarActions
            opened={opened}
            toggle={toggle}
            ariaLabel={content.toggle}
          />
        </Group>
      </Container>

      <NavbarDrawer
        opened={opened}
        close={close}
        title={content.menu}
        links={links}
        pathname={pathname}
        locale={locale}
      />
    </Box>
  );
}
