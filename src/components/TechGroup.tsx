'use client';

import { Group, GroupProps, Badge } from '@mantine/core';

import { getTechInfo } from '@/data/tech';

type Props = GroupProps & {
  stack: string[];
};

const defaultIconColor =
  'light-dark(var(--mantine-color-black), var(--mantine-color-white))';

export function TechGroup({ stack, ...props }: Props) {
  if (stack.length === 0) return null;

  return (
    <Group gap="sm" {...props}>
      {stack.map(techName => {
        const tech = getTechInfo(techName);
        const Icon = tech.icon;

        return (
          <Badge
            key={techName}
            variant="default"
            size="lg"
            radius="sm"
            leftSection={
              Icon && <Icon color={tech.color ?? defaultIconColor} />
            }
          >
            {tech.name}
          </Badge>
        );
      })}
    </Group>
  );
}
