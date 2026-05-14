import type { Metadata } from 'next';

import { ArticlesClient } from '@/components/articles/ArticlesClient';
import { articles as articlesData } from '@/data/articles';
import { sortArticles } from '@/lib/articles';
import { getContent } from '@/lib/i18n';
import { generateSeoMetadata } from '@/lib/seo';
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale).articles.hero;

  return generateSeoMetadata({
    title: content.title,
    description: content.description,
    locale,
    path: '/articles',
  });
}

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).articles;
  const sorted = sortArticles(articlesData);

  return <ArticlesClient articles={sorted} content={content} locale={locale} />;
}
