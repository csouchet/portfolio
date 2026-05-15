import { Burger, Group, rem } from '@mantine/core';

import { LanguageSwitch } from '@/components/navbar/LanguageSwitch';
import { ThemeToggle } from '@/components/navbar/ThemeToggle';

type Props = {
  opened: boolean;
  toggle: () => void;
  ariaLabel: string;
};

export function NavbarActions({ opened, toggle, ariaLabel }: Props) {
  return (
    <Group gap="sm">
      <ThemeToggle />
      <LanguageSwitch />

      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        lineSize={2}
        color="var(--mantine-color-white)"
        aria-label={ariaLabel}
        styles={{
          root: {
            width: rem(38),
            height: rem(38),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 150ms ease',
            '&:active': {
              transform: 'scale(0.92)',
            },
          },
        }}
      />
    </Group>
  );
}
