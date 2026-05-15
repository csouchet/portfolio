'use client';

import { useMemo } from 'react';

import { Project } from '@/types/project';

export function useProjectDetail(projects: Project[], projectId: string) {
  return useMemo(() => {
    const project = projects.find(p => p.id === projectId);
    const childrenProjects = projects.filter(p => p.parent === projectId);

    const sortedParentProjects = [...projects]
      .filter(p => !p.parent)
      .sort((a, b) => {
        const getYear = (dateStr: string) => {
          const years = dateStr.match(/\d{4}/g);
          return years ? Math.max(...years.map(Number)) : 0;
        };
        return getYear(b.date) - getYear(a.date);
      });

    let previousProject: Project | undefined;
    let nextProject: Project | undefined;

    if (!project?.parent) {
      const currentIndex = sortedParentProjects.findIndex(
        p => p.id === projectId,
      );

      if (currentIndex !== -1) {
        previousProject =
          currentIndex > 0 ? sortedParentProjects[currentIndex - 1] : undefined;

        nextProject =
          currentIndex < sortedParentProjects.length - 1
            ? sortedParentProjects[currentIndex + 1]
            : undefined;
      }
    }

    return {
      project,
      childrenProjects,
      previousProject,
      nextProject,
    };
  }, [projects, projectId]);
}
