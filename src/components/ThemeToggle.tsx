'use client';

import {
    ActionIcon,
    useMantineColorScheme,
    useComputedColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computed = useComputedColorScheme('light');

    const toggle = () => {
        setColorScheme(computed === 'light' ? 'dark' : 'light');
    };

    return (
        <ActionIcon
            onClick={toggle}
            variant="subtle"
            size="lg"
            aria-label="Toggle color scheme"
        >
            {computed === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
        </ActionIcon>
    );
}