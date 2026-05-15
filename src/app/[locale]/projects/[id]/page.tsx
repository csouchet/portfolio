import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { ProjectDetailClient } from '@/components/projects/detail/ProjectDetailClient';
import { getContent } from '@/lib/i18n';
import { getProjects } from '@/lib/projects';
import { Locale } from '@/types/i18n';

type Props = {
  params: Promise<{ locale: Locale; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;

  const projects = getProjects(locale);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return { title: 'Not found' };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/${locale}/projects/${id}`,
      languages: {
        fr: `/fr/projects/${id}`,
        en: `/en/projects/${id}`,
      },
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, id } = await params;

  const content = getContent(locale);
  const projectsContent = content.projects;

  const projects = getProjects(locale);
  const project = projects.find(p => p.id === id);

  if (!project) return notFound();

  return (
    <ProjectDetailClient
      projectId={id}
      projects={projects}
      content={projectsContent.project}
      locale={locale}
    />
  );
}
