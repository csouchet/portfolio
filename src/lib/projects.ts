import { projects } from '@/data/projects';
import { Project } from '@/types/project';

export function getChildProjects(parentId: string): Project[] {
  return projects.filter(p => p.parent === parentId);
}

export function getFeaturedParentProjects(): Project[] {
  return projects.filter(p => p.featured && !p.parent);
}

export function getParentProjects(): Project[] {
  return projects.filter(p => !p.parent);
}

export function getProjectsByCategory(
  category: Project['category'],
): Project[] {
  return projects.filter(p => p.category === category && !p.parent);
}

export function getParentProjectsGroupedByCategory() {
  const parents = getParentProjects();

  return parents.reduce<Record<string, Project[]>>((acc, project) => {
    const category = project.category ?? 'other';

    if (!acc[category]) acc[category] = [];
    acc[category].push(project);

    return acc;
  }, {});
}
