'use client';

import {
  ActionIcon,
  Tooltip,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('light');

  const isDark = computed === 'dark';

  const toggle = () => {
    setColorScheme(isDark ? 'light' : 'dark');
  };

  return (
    <Tooltip
      label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      withArrow
      position="bottom"
      openDelay={200}
    >
      <ActionIcon
        onClick={toggle}
        variant="subtle"
        size="lg"
        radius="xl"
        aria-label="Toggle color scheme"
        aria-pressed={isDark}
        style={{
          transition: 'transform 0.15s ease',
        }}
        onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.92)')}
        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
      </ActionIcon>
    </Tooltip>
  );
}
