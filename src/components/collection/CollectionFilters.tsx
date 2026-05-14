'use client';

import React from 'react';

import { Chip, Group } from '@mantine/core';

export type FilterOption<T = string> = {
  value: T;
  label: string;
  color?: string;
};

type Props<T> = {
  options: FilterOption<T>[];
  value: T | null;
  onChangeAction: (value: T | null) => void;
  allLabel: string;
};

export function CollectionFilters<T>({
  options,
  value,
  onChangeAction,
  allLabel,
}: Props<T>) {
  return (
    <Chip.Group>
      <Group wrap="wrap" gap="xs">
        {/* Filtre "Tous" */}
        <Chip
          checked={value === null}
          onChange={() => onChangeAction(null)}
          variant="filled"
        >
          {allLabel}
        </Chip>

        {/* Autres Filtres */}
        {options.map(option => {
          const color = option.color || 'brand';

          return (
            <Chip
              key={String(option.value)}
              color={color}
              checked={value === option.value}
              onChange={() => onChangeAction(option.value)}
            >
              {option.label}
            </Chip>
          );
        })}
      </Group>
    </Chip.Group>
  );
}
