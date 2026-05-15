import { Drawer, Stack, Text, NavLink } from '@mantine/core';

import { Locale } from '@/types/i18n';

type LinkDef = {
  key: string;
  href: string;
  label: string;
};

type Props = {
  opened: boolean;
  close: () => void;
  title: string;
  links: LinkDef[];
  pathname: string;
  locale: Locale;
};

export function NavbarDrawer({
  opened,
  close,
  title,
  links,
  pathname,
  locale,
}: Props) {
  return (
    <Drawer.Root opened={opened} onClose={close} size="100%">
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            <Text>{title}</Text>
          </Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>

        <Drawer.Body>
          <Stack>
            {links.map(({ key, href, label }) => (
              <NavLink
                key={key}
                href={href}
                active={
                  href === `/${locale}`
                    ? pathname === `/${locale}`
                    : pathname.startsWith(href)
                }
                label={label}
                onClick={close}
              />
            ))}
          </Stack>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
