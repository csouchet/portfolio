'use client';

import { Group, Pagination, rem } from '@mantine/core';

type Props = {
  totalPages: number;
  page: number;
  onChangeAction: (page: number) => void;
  mt?: string | number;
};

export function CollectionPagination({
  totalPages,
  page,
  onChangeAction,
  mt = 60,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <Pagination.Root total={totalPages} value={page} onChange={onChangeAction}>
      <Group
        gap={rem(4)}
        justify="center"
        mt={typeof mt === 'number' ? rem(mt) : mt}
      >
        <Pagination.Previous c="brand.6" bg="transparent" />
        <Pagination.Items />
        <Pagination.Next c="brand.6" bg="transparent" />
      </Group>
    </Pagination.Root>
  );
}
