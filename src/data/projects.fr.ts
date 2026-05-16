import { Project } from '@/types/project';

export const projects: Project[] = [
  /**
   * =========================
   * BONITASOFT
   * =========================
   */

  {
    id: 'process-analytics',
    title: 'Process Analytics',
    date: '2020 - 2023',
    description:
      'Écosystème d’analyse de processus regroupant plusieurs briques techniques (librairies, exemples, site, data).',
    github: 'https://github.com/process-analytics',
    featured: true,
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
    company: 'Bonitasoft',

    highlights: [
      'Contribution à la communication',
      'Suivi des KPIs et reporting',
    ],

    caseStudy: {
      context:
        'Création from scratch d’un écosystème d’analyse de processus composé de plusieurs briques (librairies, exemples, site, data).',
      problems: [
        'Absence de structure initiale',
        'Définition de l’architecture globale du système',
        'Mise en place des pratiques de développement et de collaboration',
        'Construction d’un produit cohérent à partir de plusieurs composants',
      ],
      actions: [
        'Conception de l’architecture globale de l’écosystème',
        'Structuration des différents composants (librairies, exemples, site)',
        'Mise en place des pipelines CI/CD',
        'Définition des standards de développement et de contribution',
        'Contribution à la structuration produit et à la roadmap',
      ],
      results:
        'Mise en place d’un écosystème complet et cohérent, permettant le développement, la distribution et l’adoption des outils d’analyse de processus.',
    },
  },

  {
    id: 'bpmn-visu-js',
    title: 'BPMN Visualization JS',
    date: '2020 - 2023',
    description:
      'Librairie open-source de visualisation BPMN avec rendu graphique interactif.',
    github: 'https://github.com/process-analytics/bpmn-visualization-js',
    parent: 'process-analytics',
    category: 'library',
    contributions: [
      'architecture',
      'frontend',
      'ci-cd',
      'testing',
      'release',
      'devex',
    ],
    company: 'Bonitasoft',

    highlights: [
      'Parsing BPMN XML → modèle → rendu graphique',
      'Génération automatique de documentation et previews PR',
    ],

    caseStudy: {
      context:
        'Librairie open source critique avec contraintes de qualité et compatibilité multi-navigateurs.',
      problems: [
        'Complexité du rendu BPMN et du parsing XML',
        'Compatibilité multi-navigateurs',
        'Maintien d’un haut niveau de qualité sur une librairie open source',
      ],
      actions: [
        'Fiabilisation des builds, tests et releases sur plusieurs environnements (Linux, macOS, Windows)',
        'Previews dynamiques pour chaque Pull Request',
        'Tests E2E multi-navigateurs (Chromium, Firefox, Safari, Edge)',
        'Analyse qualité et sécurité',
        'Automatisation des releases npm et communications automatiques',
      ],
      results:
        'Fiabilisation du rendu, amélioration de la qualité et adoption accrue.',
    },
  },

  {
    id: 'bpmn-visu-examples',
    title: 'BPMN Visualization Examples',
    date: '2020 - 2023',
    description:
      'Exemples interactifs permettant de démontrer les fonctionnalités de la librairie BPMN Visualization JS et faciliter son adoption.',
    github: 'https://github.com/process-analytics/bpmn-visualization-examples',
    parent: 'process-analytics',
    category: 'tooling',
    contributions: ['frontend', 'ci-cd', 'devex'],
    company: 'Bonitasoft',

    caseStudy: {
      context:
        'Besoin de faciliter l’adoption d’une librairie complexe via des exemples concrets.',
      problems: [
        'Difficulté de prise en main pour les utilisateurs',
        'Manque d’exemples réalistes',
      ],
      actions: [
        'Création d’exemples interactifs',
        'Mise en place de previews PR',
        'Synchronisation avec la librairie principale',
      ],
      results:
        'Réduction du temps d’intégration et amélioration de l’adoption.',
    },
  },

  {
    id: 'bpmn-visu-r',
    title: 'BPMN Visualization R',
    date: '2021 - 2023',
    description:
      'Package R permettant la visualisation de processus BPMN dans l’écosystème data science.',
    github: 'https://github.com/process-analytics/bpmn-visualization-R',
    parent: 'process-analytics',
    category: 'library',
    contributions: ['frontend'],
    company: 'Bonitasoft',

    caseStudy: {
      context: 'Extension d’une librairie JS vers l’écosystème R.',
      problems: ['Interopérabilité JS ↔ R', 'Distribution CRAN'],
      actions: ['Création d’un wrapper R', 'Bridge JS ↔ R', 'Packaging CRAN'],
      results:
        'Ouverture à l’écosystème data science et simplification de l’usage.',
    },
  },

  {
    id: 'process-analytics-dev',
    title: 'Process Analytics Dev',
    date: '2021 - 2023',
    description: 'Site vitrine du projet.',
    github: 'https://github.com/process-analytics/process-analytics.dev',
    parent: 'process-analytics',
    category: 'website',
    contributions: ['frontend', 'devex'],
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-process-insights',
    title: 'Bonita Process Insights',
    date: '2023 - 2024',
    description:
      'Produit de data visualisation permettant d’analyser des processus métier via tableaux de bord et visualisations BPMN.',
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
    featured: true,
    company: 'Bonitasoft',
    highlights: [
      'Visualisation avancée des données métier',
      'Structuration des pratiques de développement',
    ],

    caseStudy: {
      context:
        'Création from scratch d’un produit composé de plusieurs applications afin de data visualisation combinant backend, frontend et visualisation BPMN.',
      problems: [
        'Complexité technique et fonctionnelle élevée',
        'Construction d’un système combinant data, backend et visualisation',
        'Mise en place des bases techniques et des pratiques de développement',
      ],
      actions: [
        'Conception de l’architecture globale du produit',
        'Mise en place des fondations backend et frontend',
        'Structuration des pratiques de développement',
      ],
      results:
        'Mise en place d’un produit complet et structuré, permettant la visualisation et l’analyse de processus métier.',
    },
  },

  {
    id: 'bonita-process-insights-superset',
    title: 'Process Insights – Superset',
    date: '2023 - 2024',
    description:
      'Custom Apache Superset avec plugin BPMN pour visualisation interactive.',
    parent: 'bonita-process-insights',
    category: 'application',
    contributions: ['frontend', 'ci-cd', 'testing', 'devex'],
    highlights: [
      'Plugin de visualisation BPMN intégré à Superset',
      'Optimisation des pipelines CI/CD',
      'Scripts de migration pour sécuriser les upgrades',
    ],
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-process-insights-app',
    title: 'Process Insights – Application',
    date: '2023 - 2024',
    description: 'Application fullstack pour la gestion des données d’analyse.',
    parent: 'bonita-process-insights',
    category: 'application',
    contributions: ['frontend', 'backend', 'devex'],
    highlights: [
      'Montée en compétence rapide sur Angular et JHipster',
      'Contribution fullstack',
      'Contribution à l’onboarding développeur',
    ],
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-ui-builder',
    title: 'Bonita UI Builder',
    date: '2024 - 2025',
    description:
      'Plateforme low-code basée sur Appsmith avec architecture CI/CD avancée.',
    featured: true,
    category: 'application',
    contributions: [
      'frontend',
      'backend',
      'ci-cd',
      'testing',
      'release',
      'architecture',
      'devex',
    ],
    company: 'Bonitasoft',

    highlights: [
      'Docker multi-architecture (amd64 / arm64)',
      'Scripts de migration pour sécuriser les upgrades',
    ],

    caseStudy: {
      context:
        'Construction from scratch d’une plateforme low-code basée sur Appsmith avec une architecture CI/CD avancée.',
      problems: [
        'Définition de l’architecture globale multi-composants',
        'Construction d’une CI/CD complète et fiable',
        'Gestion de la complexité liée à une plateforme low-code',
      ],
      actions: [
        'Conception de l’architecture globale',
        'Mise en place de pipelines CI/CD orchestrés',
        'Automatisation complète des builds, tests et releases',
        'Structuration des standards et des pratiques de développement',
      ],
      results:
        'Mise en place d’une plateforme robuste avec une chaîne de livraison industrialisée, permettant des releases fiables et fréquentes.',
    },
  },

  {
    id: 'bonita-process-automation',
    title: 'Bonita Process Automation',
    date: '2012 - 2015',
    description:
      'Plateforme d’automatisation de processus métier incluant moteur BPM, outils de migration, packaging et intégration des systèmes.',
    category: 'product',
    company: 'Bonitasoft',
    contributions: ['ci-cd'],
  },

  {
    id: 'bonita-engine',
    title: 'Bonita Engine',
    date: '2012 - 2015',
    description: 'Moteur BPM open-source au cœur de la plateforme Bonita.',
    github: 'https://github.com/bonitasoft/bonita-engine',
    category: 'engine',
    contributions: ['backend', 'architecture'],
    parent: 'bonita-process-automation',
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-migration-tool',
    title: 'Migration Tool',
    date: '2014 - 2015',
    description: 'Outil de migration des versions Bonita.',
    github: 'https://github.com/bonitasoft/bonita-migration',
    parent: 'bonita-process-automation',
    category: 'tooling',
    company: 'Bonitasoft',
    contributions: ['backend'],
    highlights: [
      'Migration automatisée des données entre versions',
      'Support multi-bases de données',
      'Validation et sécurisation des upgrades',
    ],
  },

  {
    id: 'bonita-packaging',
    title: 'Packaging plateforme',
    date: '2012 - 2015',
    description:
      'Distribution multi-serveurs de la plateforme Bonita Process Automation.',
    parent: 'bonita-process-automation',
    category: 'tooling',
    company: 'Bonitasoft',
    contributions: ['packaging'],
    highlights: [
      'Migration Tomcat 6 → 7',
      'Migration JBoss 5 → 7',
      'Automatisation des tests d’intégration multi-environnements',
    ],
  },

  {
    id: 'bonita-ldap-synchronizer',
    title: 'LDAP Synchronizer',
    date: '2013 - 2015',
    description:
      'Outil de synchronisation LDAP pour la gestion des utilisateurs et des permissions.',
    github: 'https://github.com/bonitasoft/bonita-connector-ldap',
    parent: 'bonita-process-automation',
    category: 'application',
    company: 'Bonitasoft',
    contributions: ['backend'],
    highlights: [
      'Synchronisation des utilisateurs depuis LDAP',
      'Gestion des permissions',
      'Maintenance et évolution du système',
    ],
  },

  /**
   * =========================
   * GB&SMITH
   * =========================
   */

  {
    id: 'gbsmith-365view',
    title: '365 View',
    date: '2016 - 2017',
    description:
      'Plateforme de gestion des permissions utilisateurs multi-outils BI.',
    category: 'product',
    contributions: ['architecture'],
    company: 'GB&Smith',
    highlights: ['Architecture modulaire basée sur plugins'],

    caseStudy: {
      context:
        'Plateforme d’audit multi-outils BI nécessitant une architecture flexible.',
      problems: ['Multiplicité des sources', 'Complexité des permissions'],
      actions: ['Architecture modulaire basée sur plugins'],
      results: 'Système extensible et maintenable.',
    },
  },

  {
    id: 'gbsmith-365view-core',
    title: '365 View Core',
    date: '2016 - 2017',
    description: 'Composant central gérant les permissions utilisateurs.',
    parent: 'gbsmith-365view',
    category: 'application',
    contributions: ['backend', 'architecture'],
    company: 'GB&Smith',
    highlights: [
      'Architecture backend modulaire',
      'Traitements batch et planification',
      'Qualité logicielle et tests',
    ],
  },

  {
    id: 'gbsmith-365view-plugin',
    title: '365 View Plugin',
    date: '2016 - 2017',
    description:
      'Plugin interne responsable de la gestion des données de la plateforme.',
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-365view-salesforce-plugin',
    title: 'Salesforce Plugin',
    date: '2016 - 2017',
    description:
      'Plugin pour la gestion des permissions utilisateurs dans Salesforce.',
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-fenix',
    title: 'Fenix',
    date: '2017 - 2019',
    description: 'Plateforme d’audit de données BI (SAP BO, SAP BW, Tableau)',
    category: 'product',
    contributions: ['architecture'],
    company: 'GB&Smith',

    caseStudy: {
      context:
        'Construction d’une plateforme d’audit de données BI permettant d’analyser des données issues de multiples sources.',
      problems: [
        'Conception d’un système capable de gérer des sources de données hétérogènes',
        'Définition d’une architecture extensible',
        'Gestion de la complexité des traitements de données',
      ],
      actions: [
        'Conception d’une architecture modulaire basée sur plugins',
        'Structuration des flux de traitement de données',
        'Mise en place des fondations techniques du produit',
        'Contribution à la définition des capacités du produit',
      ],
      results:
        'Création d’une plateforme robuste et extensible pour l’analyse de données BI.',
    },
  },

  {
    id: 'gbsmith-fenix-core',
    title: 'Fenix Core',
    date: '2017 - 2019',
    description:
      'Composant central responsable du traitement des données et de l’orchestration des plugins.',
    parent: 'gbsmith-fenix',
    category: 'application',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
    highlights: [
      'Orchestration du cycle de vie des plugins',
      'Traitement des données multi-sources BI',
      'Architecture backend modulaire',
    ],
  },

  /**
   * =========================
   * PERSONAL
   * =========================
   */

  {
    id: 'portfolio',
    title: 'Portfolio',
    date: '2026',
    description: 'Portfolio personnel conçu comme un design system.',
    github: 'https://github.com/csouchet/portfolio',
    category: 'application',
    contributions: ['frontend'],
    company: 'Personal',

    caseStudy: {
      context: 'Création d’un portfolio avec objectif de positionnement staff.',
      problems: [
        'Différenciation sur un marché saturé',
        'Manque de storytelling dans les portfolios classiques',
      ],
      actions: [
        'Structuration orientée impact',
        'Design system basé sur Mantine',
        'Approche data-driven',
      ],
      results: 'Portfolio différenciant et positionnement premium.',
    },
  },
];
