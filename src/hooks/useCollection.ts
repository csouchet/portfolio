'use client';

import { useMemo, useState } from 'react';

type UseCollectionProps<TItem, TFilter> = {
  items: TItem[];
  filterAction: (item: TItem, filterValue: TFilter) => boolean;
  itemsPerPage?: number;
};

export function useCollection<TItem, TFilter>({
  items = [],
  filterAction,
  itemsPerPage = 9,
}: UseCollectionProps<TItem, TFilter>) {
  const [filterValue, setFilterValue] = useState<TFilter | null>(null);
  const [page, setPage] = useState(1);

  const handleFilterChange = (newFilter: TFilter | null) => {
    setFilterValue(newFilter);
    setPage(1);
  };

  const filteredItems = useMemo(() => {
    const baseItems = items || [];
    if (!filterValue) return baseItems;
    return baseItems.filter(item => filterAction(item, filterValue));
  }, [filterValue, items, filterAction]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const visibleItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, page, itemsPerPage]);

  return {
    filterValue,
    onFilterChange: handleFilterChange,
    page,
    onPageChange: setPage,
    filteredItems,
    visibleItems,
    totalPages,
  };
}
