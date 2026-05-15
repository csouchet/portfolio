'use client';

import { IconLink } from '@tabler/icons-react';

import { Section } from '@/components/layout/Section';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';
import { Project } from '@/types/project';

type Props = {
  childrenProjects: Project[];
  locale: Locale;
  content: ReturnType<
    typeof getContent
  >['projects']['project']['relatedProjects'];
};

export function ProjectChildren({ childrenProjects, locale, content }: Props) {
  if (childrenProjects.length === 0) return null;

  return (
    <Section id="subprojects" title={content.title} icon={IconLink}>
      <ProjectsGrid
        projects={childrenProjects}
        locale={locale}
        footerLabel={content.view}
      />
    </Section>
  );
}
