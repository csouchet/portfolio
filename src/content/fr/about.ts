import { SpotlightItem } from '@/components/layout/SpotlightGrid';

export const aboutContent = {
  hero: {
    badge: 'Qui suis-je ?',
    title: 'Ingénieure logicielle <h>& Artisane céramiste</h>',
    description:
      'Je conçois et fais évoluer des systèmes complexes, en les structurant pour les rendre fiables, maintenables et capables de livrer dans la durée.',

    highlights: ["Plus de 15 ans d'expérience", 'Fullstack • CI/CD • Platform'],

    cta: {
      contact: 'Discutons de votre projet',
      projects: 'Voir mes projets',
    },
  },

  journey: {
    title: 'Mon parcours',
    subtitle: 'Un chemin construit entre curiosité, rigueur et créativité.',
    description:
      'J’ai construit mon expertise en travaillant sur des systèmes complexes, de leur conception à leur mise en production.',

    experiences: [
      {
        role: 'Freelance & Création',
        period: 'Aujourd’hui',
        description:
          'J’accompagne mes clients et je développe mes projets personnels. Je crée aussi en céramique pour garder l’équilibre et nourrir ma créativité.',
        icon: 'vase',
      },
      {
        company: 'Bonitasoft',
        role: 'Senior R&D Engineer',
        period: 'Mai 2019 – Avr. 2025',
        tasks: [
          'Développement fullstack et architecture de Bonita UI Builder (low-code)',
          'Création de l’écosystème open-source Process Analytics',
          'Développement de Bonita Process Insights',
          'Mise en place de pipelines CI/CD complexes',
        ],
      },
      {
        company: 'GB&SMITH',
        role: 'Senior Java Developer & Tech Lead',
        period: 'Janv. 2016 – Mai 2019',
        tasks: [
          'Conception de la plateforme Fenix (audit BI)',
          'Développement du core et des connecteurs',
          'Scrum master et accompagnement équipe',
        ],
      },
      {
        company: 'TAGSYS RFID',
        role: 'Java Developer Engineer',
        period: 'Juil. 2015 – Déc. 2015',
        tasks: ['Développement de systèmes RFID pour la logistique'],
      },
      {
        company: 'Bonitasoft',
        role: 'R&D Engineer',
        period: 'Oct. 2012 – Janv. 2015',
        tasks: [
          'Évolution du moteur BPM Bonita Engine',
          'Développement outils critiques (Migration, LDAP)',
          'Packaging multi-serveurs + tests intégration',
        ],
      },
      {
        company: 'Astek',
        role: 'Software Development Engineer',
        period: 'Nov. 2009 – Oct. 2012',
        tasks: [
          'Développement, maintenance et tests automatiques d’applications web et de frameworks batch pour divers clients (Hardis, CHU, etc.).',
          'Support de niveau 3, correction de bugs et développement d’outils d’automatisation. (Orange)',
        ],
      },
    ],
  },

  philosophy: {
    title: 'Ma philosophie',
    description: 'Ce qui guide mon travail au quotidien.',
    items: [
      {
        id: 'layers',
        title: 'Systèmes structurés',
        description:
          'Réduire la complexité pour construire des systèmes fiables et durables.',
      },
      {
        id: 'code',
        title: 'Qualité dès le départ',
        description:
          'Un code propre, testé et pensé pour la production dès sa conception.',
      },
      {
        id: 'rocket',
        title: 'Livraison maîtrisée',
        description:
          'Des pipelines CI/CD fiables pour livrer rapidement et avec confiance.',
      },
      {
        id: 'balance',
        title: 'Pragmatisme',
        description:
          'Trouver le bon équilibre entre excellence technique et efficacité.',
      },
      {
        id: 'refresh',
        title: 'Amélioration continue',
        description:
          'J’itère, j’expérimente et j’améliore constamment les systèmes.',
      },
      {
        id: 'users',
        title: 'Collaboration de confiance',
        description:
          'Ecoute, transparence et autonomie pour avancer efficacement ensemble.',
      },
    ] as SpotlightItem<'philosophy'>[],
  },

  personal: {
    title: 'Un équilibre essentiel',
    description:
      'En parallèle de mon travail d’ingénierie, je développe un projet artistique en céramique. Cette pratique nourrit ma créativité et m’aide à prendre du recul.',
  },

  cta: {
    title: 'Prêt à collaborer ?',
    description: 'Une idée, un projet ou un besoin technique ? Échangeons !',
    cta: 'Discutons de votre projet',
  },
};
