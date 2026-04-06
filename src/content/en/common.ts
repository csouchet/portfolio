import { NavKey } from '@/types/navigation';

export const commonContent = {
  navigation: {
    menu: 'Menu',
    toggle: 'Open menu',

    labels: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      articles: 'Articles',
      services: 'Services',
      contact: 'Contact',
    } as Record<NavKey, string>,
  },

  footer: {
    signature: 'Senior Software Engineer · Java & React · Product & UX',
    copyright: 'All rights reserved',
  },

  notFound: {
    code: '404',
    title: 'Page not found',
    description:
      'The page you are looking for does not exist or has been moved.',
    cta: 'Back to home',
  },

  theme: {
    light: 'Light mode',
    dark: 'Dark mode',
    toggle: 'Toggle theme',

    lightActive: 'Light mode enabled',
    darkActive: 'Dark mode enabled',
  },
};
