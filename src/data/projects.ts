import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'process-analytics',
    title: 'Process Analytics',
    description:
      'Projet d’analyse de processus regroupant plusieurs briques techniques.',
    featured: true,
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
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
      'Package R permettant la visualisation de processus BPMN dans l’écosystème data science.',
    stack: ['R', 'Shiny', 'JavaScript'],
    github: 'https://github.com/process-analytics/bpmn-visualization-R',
    parent: 'process-analytics',
    category: 'library',
    contributions: ['frontend', 'architecture'],
    highlights: [
      'Bridge JavaScript ↔ R via htmlwidgets',
      'Support R Markdown et applications Shiny',
      'Publication et validation CRAN multi-environnements',
      'Simplification de l’intégration pour les analystes',
    ],
  },

  {
    id: 'process-analytics-dev',
    title: 'Process Analytics Dev',
    description:
      'Site vitrine présentant le projet, ses fonctionnalités et ses cas d’usage.',
    stack: ['React', 'Gatsby', 'TypeScript', 'MaterialUI'],
    github: 'https://github.com/process-analytics/process-analytics.dev',
    parent: 'process-analytics',
    category: 'website',
    contributions: ['frontend', 'devex'],
  },

  {
    id: 'bonita-process-insights',
    title: 'Bonita Process Insights',
    description:
      'Produit de data visualisation permettant d’analyser des processus métier via tableaux de bord et visualisations BPMN.',
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
    highlights: [
      'Visualisation avancée des données métier',
      'Optimisation des pipelines CI/CD',
      'Structuration des pratiques de développement',
    ],
    featured: true,
  },

  {
    id: 'bonita-process-insights-superset',
    title: 'Process Insights – Superset',
    description:
      'Custom Apache Superset avec plugin BPMN pour visualisation interactive et transformation des données.',
    stack: ['React', 'Superset', 'TypeScript', 'CI/CD'],
    parent: 'bonita-process-insights',
    category: 'application',
    contributions: ['frontend', 'ci-cd', 'testing', 'devex'],
    highlights: [
      'Plugin de visualisation BPMN intégré à Superset',
      'Optimisation des pipelines CI/CD',
      'Scripts de migration pour sécuriser les upgrades',
    ],
  },

  {
    id: 'bonita-process-insights-app',
    title: 'Process Insights – Application',
    description:
      'Application fullstack générée avec JHipster pour la gestion des données de l’analyse de processus.',
    stack: ['Angular', 'Java', 'Spring', 'JHipster', 'CI/CD'],
    parent: 'bonita-process-insights',
    category: 'application',
    contributions: ['frontend', 'backend', 'devex'],
    highlights: [
      'Montée en compétence rapide sur Angular et JHipster',
      'Contribution fullstack',
      'Contribution à l’onboarding développeur',
    ],
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
    highlights: [
      'Pipelines CI/CD multi-composants avec orchestration complexe',
      'Build conditionnel pour optimisation des temps et coûts',
      'Docker multi-architecture (amd64 / arm64)',
      'Automatisation complète du cycle de release (alpha → GA)',
      'Structuration des standards et onboarding développeur',
      'Scripts de migration pour sécuriser les upgrades',
    ],
  },

  {
    id: 'bonita-engine',
    title: 'Bonita Engine',
    description:
      'Moteur BPM open-source au cœur de la plateforme Bonita (gestion des processus, APIs, modèle de données).',
    stack: ['Java', 'Spring', 'Quartz', 'JUnit'],
    github: 'https://github.com/bonitasoft/bonita-engine',
    category: 'engine',
    contributions: ['backend', 'architecture'],
  },

  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Portfolio personnel conçu comme un design system avec attention portée à l’UX et au SSR.',
    stack: ['React', 'TypeScript', 'Mantine'],
    github: 'https://github.com/csouchet/portfolio',
    category: 'application',
    contributions: ['frontend'],
  },
];
