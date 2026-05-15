'use client';

import { IconFolderOpen } from '@tabler/icons-react';

import { Space, Stack } from '@mantine/core';

import {
  CollectionFilters,
  FilterOption,
} from '@/components/collection/CollectionFilters';
import { CollectionPagination } from '@/components/collection/CollectionPagination';
import { ContactBanner } from '@/components/ContactBanner';
import { PageLayout } from '@/components/layout/PageLayout';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { useAccentColor } from '@/hooks/useColors';
import { useProjects } from '@/hooks/useProjects';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';
import { Project, ProjectCategory } from '@/types/project';

type Props = {
  projects: Project[];
  content: {
    catalog: ReturnType<typeof getContent>['projects']['catalog'];
    common: ReturnType<typeof getContent>['projects']['common'];
  };
  locale: Locale;
};

export function ProjectsClient({ projects, content, locale }: Props) {
  const getAccentColor = useAccentColor();

  const {
    categories,
    filterValue,
    onFilterChange,
    page,
    onPageChange,
    visibleItems,
    totalPages,
  } = useProjects(projects);

  const filterOptions: FilterOption<ProjectCategory>[] = categories.map(
    category => ({
      value: category,
      label:
        content.common.categories[
          category as keyof typeof content.common.categories
        ]?.label || category,
      color: getAccentColor(category),
    }),
  );

  return (
    <PageLayout badgeIcon={IconFolderOpen} {...content.catalog.hero}>
      <Stack m={0}>
        <CollectionFilters
          options={filterOptions}
          value={filterValue}
          onChangeAction={onFilterChange}
          allLabel={content.catalog.filters.all}
        />
        <Space h="sm" />

        <ProjectsGrid
          projects={visibleItems}
          locale={locale}
          footerLabel={content.catalog.view}
        />
      </Stack>

      <CollectionPagination
        totalPages={totalPages}
        page={page}
        onChangeAction={onPageChange}
      />

      <ContactBanner
        mt="xl"
        title={content.catalog.cta.title}
        description={content.catalog.cta.description}
        cta={content.catalog.cta.button}
      />
    </PageLayout>
  );
}
