import { NavKey } from '@/types/navigation';

export const commonContent = {
  navigation: {
    menu: 'Menu',
    toggle: 'Ouvrir le menu',

    labels: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      articles: 'Articles',
      services: 'Services',
      contact: 'Contact',
    } as Record<NavKey, string>,
  },

  footer: {
    signature: 'Ingénieure développeuse senior · Java & React · Product & UX',
    copyright: 'Tous droits réservés',
  },

  notFound: {
    code: '404',
    title: 'Page introuvable',
    description: 'La page que vous recherchez n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },

  theme: {
    light: 'Mode clair',
    dark: 'Mode sombre',
    toggle: 'Changer le thème',

    lightActive: 'Mode clair activé',
    darkActive: 'Mode sombre activé',
  },
};
