import { Metadata } from 'next';

import { ProjectsClient } from '@/components/projects/all/ProjectsClient';
import { getContent } from '@/lib/i18n';
import { getParentProjects } from '@/lib/projects';
import { Locale } from '@/types/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/projects',
    languages: { fr: '/fr/projects', en: '/en/projects' },
  },
};

type Props = { params: Promise<{ locale: Locale }> };

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;

  const { catalog, common } = getContent(locale).projects;

  const projects = getParentProjects(locale);

  return (
    <ProjectsClient
      projects={projects}
      content={{ catalog, common }}
      locale={locale}
    />
  );
}
