'use client';

import { useEffect, useState } from 'react';

import { IconSun, IconMoon } from '@tabler/icons-react';

import {
  ActionIcon,
  Tooltip,
  VisuallyHidden,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';

import { commonContent } from '@/content/fr/common';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  const computed = useComputedColorScheme('light');
  const [mounted, setMounted] = useState(false);

  const content = commonContent.theme;

  useEffect(() => {
    // Needed to avoid SSR hydration mismatch for color scheme
    // If we want to avoid to use mounted, we need to use cookies
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ActionIcon variant="subtle" size="lg" radius="xl" disabled />;
  }

  const isDark = computed === 'dark';

  const toggle = () => {
    setColorScheme(isDark ? 'light' : 'dark');
  };

  return (
    <>
      <Tooltip
        label={isDark ? content.light : content.dark}
        withArrow
        position="bottom"
        openDelay={150}
      >
        <ActionIcon
          onClick={toggle}
          variant="subtle"
          size="lg"
          radius="xl"
          aria-label={content.toggle}
          aria-pressed={isDark}
          styles={{
            root: {
              transition: 'transform 150ms ease, background-color 150ms ease',

              '&:hover': {
                backgroundColor: 'var(--mantine-color-default-hover)',
                transform: 'scale(1.05)',
              },
            },
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              transition: 'transform 250ms ease',
              transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          >
            {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </span>
        </ActionIcon>
      </Tooltip>

      <VisuallyHidden aria-live="polite">
        {isDark ? content.darkActive : content.lightActive}
      </VisuallyHidden>
    </>
  );
}
