'use client';

import { IconCode } from '@tabler/icons-react';

import { PageLayout } from '@/components/layout/PageLayout';
import { Section } from '@/components/layout/Section';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { TechGroup } from '@/components/TechGroup';
import { projectStacks } from '@/data/projectStacks';
import { useProjectDetail } from '@/hooks/useProjectDetail';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';
import { Project } from '@/types/project';

import { ProjectActions } from './ProjectActions';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import { ProjectChildren } from './ProjectChildren';
import { ProjectNavigation } from './ProjectNavigation';
import { ProjectSummaryCard } from './ProjectSummaryCard';

type Props = {
  projectId: string;
  projects: Project[];
  content: ReturnType<typeof getContent>['projects']['project'];
  locale: Locale;
};

export function ProjectDetailClient({
  projectId,
  projects,
  content,
  locale,
}: Props) {
  const { project, childrenProjects, previousProject, nextProject } =
    useProjectDetail(projects, projectId);

  if (!project) return null;

  const stack = projectStacks[project.id] || [];

  const breadcrumbs = (
    <PageBreadcrumbs
      locale={locale}
      items={[{ label: 'Projets', href: `/${locale}/projects` }]}
      activeItem={project.title}
    />
  );

  return (
    <PageLayout
      title={project.title}
      description={project.description}
      badge={project.category}
      breadcrumbs={breadcrumbs}
      headerChildren={
        <ProjectActions
          github={project.github}
          hasChildren={childrenProjects.length > 0}
          content={content.actions}
        />
      }
      headerFooter={
        <ProjectSummaryCard project={project} content={content.summary} />
      }
    >
      <ProjectCaseStudy project={project} content={content.caseStudy} />

      <Section id="stacks" title={content.stacks.title} icon={IconCode}>
        <TechGroup stack={stack} />
      </Section>

      <ProjectChildren
        childrenProjects={childrenProjects}
        locale={locale}
        content={content.relatedProjects}
      />

      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
        locale={locale}
        content={content.navigation}
      />
    </PageLayout>
  );
}
