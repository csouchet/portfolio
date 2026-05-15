import { NavKey } from '@/types/navigation';

export const commonContent = {
  site: {
    title:
      'Ingénieure développeuse senior Java & React — Des expériences fiables, accessibles et soigneusement conçues',

    description:
      'Ingénieure développeuse senior spécialisée en Java (Spring) et React / TypeScript. Je conçois des applications fiables et maintenables, avec une attention particulière portée aux détails, à l’expérience utilisateur et à la qualité.',
  },

  navigation: {
    menu: 'Menu',
    toggle: 'Ouvrir le menu',

    labels: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      articles: 'Articles',
      skills: 'Compétences',
      contact: 'Contact',
    } as Record<NavKey, string>,
  },

  footer: {
    signature: 'Staff Engineer — Fullstack & Platform',
    copyright: 'Grenoble, France · Tous droits réservés',
  },

  theme: {
    light: 'Mode clair',
    dark: 'Mode sombre',
    toggle: 'Changer le thème',

    lightActive: 'Mode clair activé',
    darkActive: 'Mode sombre activé',
  },
};
