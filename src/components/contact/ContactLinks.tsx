'use client';

import Link from 'next/link';

import { IconChevronRight, IconMailOpened } from '@tabler/icons-react';

import { NavLink, Text } from '@mantine/core';

import { SectionCard } from '@/components/layout/SectionCard';
import { useBrandColor } from '@/hooks/useColors';
import { lightDark } from '@/lib/color';
import { Link as LinkType } from '@/types/link';

type Props = {
  title: string;
  intro: string;
  links: LinkType[];
};

export function ContactLinks({ title, intro, links }: Props) {
  const getBrandColor = useBrandColor();

  return (
    <SectionCard title={title} description={intro} icon={IconMailOpened}>
      {links.map(link => {
        const brand = getBrandColor(link.name);
        const Icon = link.icon;

        return (
          <NavLink
            key={link.name}
            component={Link}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            c={lightDark(brand)}
            p="md"
            leftSection={Icon && <Icon />}
            rightSection={
              <IconChevronRight color="var(--mantine-color-dimmed)" />
            }
            label={
              <Text fw={600} fz="md">
                {link.name}
              </Text>
            }
          />
        );
      })}
    </SectionCard>
  );
}
