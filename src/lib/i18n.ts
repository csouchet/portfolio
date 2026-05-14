import { aboutContent as aboutEn } from '@/content/en/about';
import { articlesPageContent as articlesEn } from '@/content/en/articles';
import { commonContent as commonEn } from '@/content/en/common';
import { contactContent as contactEn } from '@/content/en/contact';
import { homeContent as homeEn } from '@/content/en/home';
import { notFoundContent as notFoundEn } from '@/content/en/not-found';
import { projectsPageContent as projectsEn } from '@/content/en/projects';
import { skillsContent as skillsEn } from '@/content/en/skills';
import { aboutContent as aboutFr } from '@/content/fr/about';
import { articlesPageContent as articlesFr } from '@/content/fr/articles';
import { commonContent as commonFr } from '@/content/fr/common';
import { contactContent as contactFr } from '@/content/fr/contact';
import { homeContent as homeFr } from '@/content/fr/home';
import { notFoundContent as notFoundFr } from '@/content/fr/not-found';
import { projectsPageContent as projectsFr } from '@/content/fr/projects';
import { skillsContent as skillsFr } from '@/content/fr/skills';
import { Locale } from '@/types/i18n';

export function getContent(locale: Locale) {
  if (locale === 'fr') {
    return {
      common: commonFr,
      home: homeFr,
      projects: projectsFr,
      about: aboutFr,
      contact: contactFr,
      articles: articlesFr,
      skills: skillsFr,
      notFound: notFoundFr,
    };
  }

  return {
    common: commonEn,
    home: homeEn,
    projects: projectsEn,
    about: aboutEn,
    contact: contactEn,
    articles: articlesEn,
    skills: skillsEn,
    notFound: notFoundEn,
  };
}
