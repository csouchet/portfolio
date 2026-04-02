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
    description:
      'Projet d’analyse de processus regroupant plusieurs briques techniques.',
    featured: true,
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
    company: 'Bonitasoft',
    highlights: [
      'Contribution à la roadmap produit et communication',
      'Suivi des KPIs et reporting',
      'Structuration des pratiques de développement',
      'Amélioration de l’expérience développeur',
    ],
  },

  {
    id: 'bpmn-visu-js',
    title: 'BPMN Visualization JS',
    description:
      'Librairie open-source de visualisation BPMN : parsing XML, modèle interne et rendu graphique interactif.',
    stack: [
      'TypeScript',
      'mxGraph',
      'Jest',
      'Playwright',
      'CI/CD',
      'Asciidoctor',
      'SonarCloud',
    ],
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
      'CI/CD multi-plateforme (Linux, macOS, Windows)',
      'Génération automatique de documentation et previews PR',
      'Tests E2E multi-navigateurs (Chromium, Firefox, Safari, Edge)',
      'Analyse qualité & sécurité (SonarCloud)',
      'Automatisation complète des releases  (npm + release notes + Twitter + Discord)',
    ],
  },

  {
    id: 'bpmn-visu-examples',
    title: 'BPMN Visualization Examples',
    description:
      'Exemples interactifs permettant de démontrer les fonctionnalités de la librairie et faciliter son adoption.',
    stack: ['TypeScript', 'HTML', 'CI/CD'],
    github: 'https://github.com/process-analytics/bpmn-visualization-examples',
    parent: 'process-analytics',
    category: 'tooling',
    contributions: ['frontend', 'ci-cd', 'devex'],
    company: 'Bonitasoft',
    highlights: [
      'Exemples couvrant navigation, overlays et customisation',
      'Previews dynamiques pour chaque Pull Request',
      'Synchronisation automatique avec la librairie principale',
      'Amélioration de l’adoption développeur',
    ],
  },

  {
    id: 'bpmn-visu-r',
    title: 'BPMN Visualization R',
    description:
      'Package R pour la visualisation de processus BPMN dans l’écosystème data science.',
    stack: ['R', 'Shiny', 'JavaScript'],
    github: 'https://github.com/process-analytics/bpmn-visualization-R',
    parent: 'process-analytics',
    category: 'library',
    contributions: ['frontend'],
    company: 'Bonitasoft',
    highlights: [
      'Bridge JavaScript ↔ R',
      'Support R Markdown et Shiny',
      'Publication CRAN multi-environnements',
    ],
  },

  {
    id: 'process-analytics-dev',
    title: 'Process Analytics Dev',
    description: 'Site vitrine du projet.',
    stack: ['React', 'Gatsby', 'TypeScript', 'MaterialUI'],
    github: 'https://github.com/process-analytics/process-analytics.dev',
    parent: 'process-analytics',
    category: 'website',
    contributions: ['frontend', 'devex'],
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-process-insights',
    title: 'Bonita Process Insights',
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
  },

  {
    id: 'bonita-process-insights-superset',
    title: 'Process Insights – Superset',
    description:
      'Custom Apache Superset avec plugin BPMN pour visualisation interactive.',
    stack: ['React', 'Superset', 'TypeScript', 'CI/CD'],
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
    description: 'Application fullstack pour la gestion des données d’analyse.',
    stack: ['Angular', 'Java', 'Spring', 'JHipster'],
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
    description:
      'Plateforme low-code basée sur Appsmith avec architecture CI/CD avancée.',
    stack: [
      'Java',
      'Spring',
      'React',
      'TypeScript',
      'Junit',
      'Cypress',
      'Docker',
      'GitHub Actions',
      'Markdown',
    ],
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
      'Pipelines CI/CD multi-composants avec orchestration complexe',
      'Build conditionnel pour optimisation des temps et coûts',
      'Docker multi-architecture (amd64 / arm64)',
      'Automatisation complète du cycle de release',
      'Structuration des standards et onboarding développeur',
      'Scripts de migration pour sécuriser les upgrades',
    ],
  },

  {
    id: 'bonita-process-automation',
    title: 'Bonita Process Automation',
    description:
      'Plateforme d’automatisation de processus métier incluant moteur BPM, outils de migration, packaging et intégration des systèmes.',
    category: 'product',
    company: 'Bonitasoft',
    contributions: ['architecture', 'ci-cd'],
    highlights: [
      'Participation au cœur de la plateforme Bonita',
      'Outils de migration et compatibilité entre versions',
      'Packaging multi-serveurs (Tomcat, JBoss)',
      'Support multi-bases de données',
    ],
  },

  {
    id: 'bonita-engine',
    title: 'Bonita Engine',
    description: 'Moteur BPM open-source au cœur de la plateforme Bonita.',
    stack: [
      'Java',
      'Spring',
      'Quartz',
      'Hibernate',
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'Oracle',
      'JUnit',
    ],
    github: 'https://github.com/bonitasoft/bonita-engine',
    category: 'engine',
    contributions: ['backend', 'architecture'],
    parent: 'bonita-process-automation',
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-migration-tool',
    title: 'Migration Tool',
    description: 'Outil de migration des versions Bonita.',
    stack: [
      'Groovy',
      'JUnit',
      'Mockito',
      'MySQL',
      'PostgreSQL',
      'Oracle',
      'SQL Server',
      'Gradle',
      'Jenkins',
      'SonarQube',
    ],
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
    description:
      'Distribution multi-serveurs de la plateforme Bonita Process Automation.',
    stack: ['Maven', 'Ant', 'Jenkins', 'Tomcat', 'JBoss'],
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
    description:
      'Outil de synchronisation LDAP pour la gestion des utilisateurs et des permissions.',
    stack: ['Java', 'LDAP', 'JUnit', 'Mockito'],
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
    description:
      'Plateforme de gouvernance et d’audit des permissions utilisateurs multi-outils BI.',
    category: 'product',
    contributions: ['architecture'],
    company: 'GB&Smith',
    highlights: [
      'Audit des permissions utilisateurs multi-outils BI',
      'Architecture modulaire basée sur plugins',
      'Centralisation et gouvernance des données',
    ],
  },

  {
    id: 'gbsmith-365view-core',
    title: '365 View Core',
    description:
      'Composant central gérant les permissions utilisateurs et les traitements d’audit.',
    stack: [
      'Java',
      'JPA',
      'Hibernate',
      'Liquibase',
      'Quartz',
      'MySQL',
      'JUnit',
      'Mockito',
    ],
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
    description:
      'Plugin interne responsable de la gestion des données de la plateforme.',
    stack: ['Java', 'SQL', 'PrimeFaces'],
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-salesforce-plugin',
    title: 'Salesforce Plugin',
    description:
      'Plugin pour l’audit des permissions utilisateurs dans Salesforce.',
    stack: ['Java', 'Salesforce SDK', 'JSF', 'PrimeFaces'],
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-cognos-plugin',
    title: 'Cognos Plugin',
    description:
      'Plugin pour l’audit des permissions utilisateurs sur IBM Cognos.',
    stack: ['Java', 'Cognos SDK'],
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-fenix',
    title: 'Fenix',
    description: 'Plateforme d’audit de données BI (SAP BO, SAP BW, Tableau)',
    category: 'product',
    contributions: ['architecture'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-fenix-core',
    title: 'Fenix Core',
    description:
      'Composant central responsable du traitement des données et de l’orchestration des plugins.',
    stack: [
      'Java',
      'Spring Boot',
      'JPA',
      'Hibernate',
      'Liquibase',
      'React',
      'TypeScript',
      'Tomcat',
    ],
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
    description:
      'Portfolio personnel conçu comme un design system avec focus sur UX et SSR.',
    stack: ['React', 'TypeScript', 'Mantine'],
    github: 'https://github.com/csouchet/portfolio',
    category: 'application',
    contributions: ['frontend'],
    company: 'Personnel',
  },
];
