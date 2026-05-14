import { Metadata } from 'next';

import { ProjectsClient } from '@/components/projects/all/ProjectsClient';
import { getContent } from '@/lib/i18n';
import { getParentProjects } from '@/lib/projects';
import { generateSeoMetadata } from '@/lib/seo';
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale).projects.catalog.hero;

  return generateSeoMetadata({
    title: content.title,
    description: content.description,
    locale,
    path: '/projects',
  });
}

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
