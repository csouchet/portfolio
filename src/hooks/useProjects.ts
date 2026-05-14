'use client';

import { useMemo } from 'react';

import { Project, ProjectCategory } from '@/types/project';

import { useCollection } from './useCollection';

export function useProjects(projects: Project[]) {
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const getYear = (dateStr: string) => {
        const years = dateStr.match(/\d{4}/g);
        return years ? Math.max(...years.map(Number)) : 0;
      };

      return getYear(b.date) - getYear(a.date);
    });
  }, [projects]);

  const categories = useMemo(() => {
    const cats = new Set(
      sortedProjects.map(p => p.category).filter(Boolean) as ProjectCategory[],
    );
    return Array.from(cats);
  }, [sortedProjects]);

  const collection = useCollection<Project, ProjectCategory>({
    items: sortedProjects,
    filterAction: (project, category) => project.category === category,
  });

  return {
    categories,
    ...collection,
  };
}
