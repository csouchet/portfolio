'use client';

import { useEffect, useState } from 'react';

import { IconMoon, IconSunFilled } from '@tabler/icons-react';

import {
  ActionIcon,
  Tooltip,
  VisuallyHidden,
  useMantineColorScheme,
  useComputedColorScheme,
  rem,
} from '@mantine/core';

import { useContent } from '@/hooks/useContent';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('light');
  const [mounted, setMounted] = useState(false);

  const { common } = useContent();
  const content = common.theme;

  useEffect(() => {
    // Needed to avoid SSR hydration mismatch for color scheme
    // If we want to avoid to use mounted, we need to use cookies
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Skeleton d'attente pour éviter le flash d'hydratation (SSR)
  if (!mounted) {
    return (
      <ActionIcon
        variant="transparent"
        size="lg"
        color="white"
        disabled
        opacity={0.5}
      />
    );
  }

  const isDark = computed === 'dark';

  return (
    <>
      <Tooltip
        label={isDark ? content.light : content.dark}
        withArrow
        position="bottom"
        openDelay={200}
      >
        <ActionIcon
          onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
          variant="transparent"
          size="lg"
          color="white"
          aria-label={content.toggle}
          aria-pressed={isDark}
        >
          {isDark ? (
            <IconSunFilled size={rem(20)} stroke={1.5} />
          ) : (
            <IconMoon size={rem(20)} stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>

      <VisuallyHidden aria-live="polite">
        {isDark ? content.darkActive : content.lightActive}
      </VisuallyHidden>
    </>
  );
}
