import { aboutContent as aboutEn } from '@/content/en/about';
import { articlesPageContent as articlesEn } from '@/content/en/articles';
import { commonContent as commonEn } from '@/content/en/common';
import { contactContent as contactEn } from '@/content/en/contact';
import { homeContent as homeEn } from '@/content/en/home';
import { projectsPageContent as projectsEn } from '@/content/en/projects';
import { servicesContent as servicesEn } from '@/content/en/services';
import { aboutContent as aboutFr } from '@/content/fr/about';
import { articlesPageContent as articlesFr } from '@/content/fr/articles';
import { commonContent as commonFr } from '@/content/fr/common';
import { contactContent as contactFr } from '@/content/fr/contact';
import { homeContent as homeFr } from '@/content/fr/home';
import { projectsPageContent as projectsFr } from '@/content/fr/projects';
import { servicesContent as servicesFr } from '@/content/fr/services';
import { Locale } from '@/types/i18n';

export function getContent(locale: Locale) {
  if (locale === 'fr') {
    return {
      common: commonFr,
      home: homeFr,
      services: servicesFr,
      projects: projectsFr,
      about: aboutFr,
      contact: contactFr,
      articles: articlesFr,
    };
  }

  return {
    common: commonEn,
    home: homeEn,
    services: servicesEn,
    projects: projectsEn,
    about: aboutEn,
    contact: contactEn,
    articles: articlesEn,
  };
}
