import { SpotlightItem } from '@/components/layout/SpotlightGrid';

export const aboutContent = {
  hero: {
    badge: 'About me',
    title: 'Software Engineer <h>& Ceramic Artist</h>',
    description:
      'I design and evolve complex systems, structuring them to be reliable, maintainable, and built to deliver over time.',

    highlights: ['15+ years of experience', 'Fullstack • CI/CD • Platform'],

    cta: {
      contact: "Let's talk about your project",
      projects: 'View my work',
    },
  },

  journey: {
    title: 'My journey',
    subtitle: 'A path shaped by curiosity, rigor, and creativity.',
    description:
      'I built my expertise working on complex systems, from design to production.',

    experiences: [
      {
        role: 'Freelance & Creative Work',
        period: 'Present',
        description:
          'I support clients while developing my own projects. I also create ceramic pieces to stay balanced and nurture my creativity.',
        icon: 'vase',
      },
      {
        company: 'Bonitasoft',
        role: 'Senior R&D Engineer',
        period: 'May 2019 – Apr 2025',
        tasks: [
          'Fullstack development and architecture of Bonita UI Builder (low-code)',
          'Creation of the open-source Process Analytics ecosystem',
          'Development of Bonita Process Insights',
          'Implementation of complex CI/CD pipelines',
        ],
      },
      {
        company: 'GB&SMITH',
        role: 'Senior Java Developer & Tech Lead',
        period: 'Jan 2016 – May 2019',
        tasks: [
          'Design of the Fenix platform (BI auditing)',
          'Core development and connectors',
          'Scrum Master and team mentoring',
        ],
      },
      {
        company: 'TAGSYS RFID',
        role: 'Java Software Engineer',
        period: 'Jul 2015 – Dec 2015',
        tasks: ['Development of RFID systems for logistics'],
      },
      {
        company: 'Bonitasoft',
        role: 'R&D Engineer',
        period: 'Oct 2012 – Jan 2015',
        tasks: [
          'Evolution of the Bonita BPM Engine',
          'Development of critical tools (Migration, LDAP)',
          'Multi-server packaging and integration testing',
        ],
      },
      {
        company: 'Astek',
        role: 'Software Engineer',
        period: 'Nov 2009 – Oct 2012',
        tasks: [
          'Development, maintenance, and automated testing of web applications and batch frameworks for various clients (Hardis, university hospitals, etc.)',
          'Level 3 support, bug fixing, and automation tooling (Orange)',
        ],
      },
    ],
  },

  philosophy: {
    title: 'My philosophy',
    description: 'What guides my work every day.',
    items: [
      {
        id: 'layers',
        title: 'Structured systems',
        description:
          'Reducing complexity to build reliable and long-lasting systems.',
      },
      {
        id: 'code',
        title: 'Quality from day one',
        description:
          'Clean, tested code designed for production from the start.',
      },
      {
        id: 'rocket',
        title: 'Controlled delivery',
        description:
          'Reliable CI/CD pipelines to ship fast and with confidence.',
      },
      {
        id: 'balance',
        title: 'Pragmatism',
        description:
          'Finding the right balance between technical excellence and efficiency.',
      },
      {
        id: 'refresh',
        title: 'Continuous improvement',
        description:
          'Iterating, experimenting, and constantly improving systems.',
      },
      {
        id: 'users',
        title: 'Trust-based collaboration',
        description:
          'Listening, transparency, and ownership to move forward effectively together.',
      },
    ] as SpotlightItem<'philosophy'>[],
  },

  personal: {
    title: 'A meaningful balance',
    description:
      'Alongside my engineering work, I develop an artistic practice in ceramics. It fuels my creativity and helps me step back and gain perspective.',
  },

  cta: {
    title: 'Ready to collaborate?',
    description:
      'Have an idea, a project, or a technical challenge? Let’s connect.',
    cta: "Let's talk about your project",
  },
};
