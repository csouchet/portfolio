import { projects } from '@/data/projects';
import { Project } from '@/types/project';

export function getChildProjects(parentId: string): Project[] {
  return projects.filter(p => p.parent === parentId);
}

export function getFeaturedParentProjects(): Project[] {
  return projects.filter(p => p.featured && !p.parent);
}
