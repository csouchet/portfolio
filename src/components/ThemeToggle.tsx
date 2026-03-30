'use client';

import {
  ActionIcon,
  Tooltip,
  VisuallyHidden,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  const computed = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const isDark = computed === 'dark';

  const toggle = () => {
    setColorScheme(isDark ? 'light' : 'dark');
  };

  return (
    <>
      <Tooltip
        label={isDark ? 'Mode clair' : 'Mode sombre'}
        withArrow
        position="bottom"
        openDelay={150}
      >
        <ActionIcon
          onClick={toggle}
          variant="subtle"
          size="lg"
          radius="xl"
          aria-label="Changer le thème"
          aria-pressed={isDark}
          styles={theme => ({
            root: {
              transition: 'transform 150ms ease, background-color 150ms ease',

              // hover propre Mantine
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
                transform: 'scale(1.05)',
              },
            },
          })}
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
        {isDark ? 'Mode sombre activé' : 'Mode clair activé'}
      </VisuallyHidden>
    </>
  );
}
