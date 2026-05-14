import { projects as en } from '@/data/projects.en';
import { projects as fr } from '@/data/projects.fr';
import { Locale } from '@/types/i18n';
import { Project } from '@/types/project';

export function getProjects(locale: Locale) {
  return locale === 'fr' ? fr : en;
}

export function getChildProjects(parentId: string, locale: Locale): Project[] {
  return getProjects(locale).filter(p => p.parent === parentId);
}

export function getFeaturedParentProjects(locale: Locale) {
  return getProjects(locale).filter(p => p.featured && !p.parent);
}

export function getFeaturedCaseStudyProject(locale: Locale) {
  const withCaseStudy = getProjects(locale).filter(
    p => p.caseStudy && !p.parent,
  );

  const featured = withCaseStudy.find(p => p.featured);

  if (featured) return featured;

  return withCaseStudy[0] ?? null;
}

export function getParentProjects(locale: Locale): Project[] {
  return getProjects(locale).filter(p => !p.parent);
}

export function getProjectsByCategory(
  category: Project['category'],
  locale: Locale,
): Project[] {
  return getProjects(locale).filter(p => p.category === category && !p.parent);
}

export function getParentProjectsGroupedByCategory(locale: Locale) {
  const parents = getParentProjects(locale);

  return parents.reduce<Record<string, Project[]>>((acc, project) => {
    const category = project.category ?? 'other';

    if (!acc[category]) acc[category] = [];
    acc[category].push(project);

    return acc;
  }, {});
}
