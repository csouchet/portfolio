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
      'Process analytics ecosystem combining multiple technical components (libraries, examples, website, data).',
    github: 'https://github.com/process-analytics',
    featured: true,
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
    company: 'Bonitasoft',

    highlights: [
      'Contribution to product communication',
      'KPIs tracking and reporting',
    ],

    caseStudy: {
      context:
        'Built from scratch a process analytics ecosystem composed of multiple components (libraries, examples, website, data).',
      problems: [
        'No initial structure',
        'Defining the overall system architecture',
        'Setting up development and collaboration practices',
        'Building a coherent product from multiple components',
      ],
      actions: [
        'Designed the overall ecosystem architecture',
        'Structured components (libraries, examples, website)',
        'Implemented CI/CD pipelines',
        'Defined development and contribution standards',
        'Contributed to product structuring and roadmap',
      ],
      results:
        'Delivered a complete and coherent ecosystem enabling the development, distribution, and adoption of process analytics tools.',
    },
  },

  {
    id: 'bpmn-visu-js',
    title: 'BPMN Visualization JS',
    date: '2020 - 2023',
    description:
      'Open-source BPMN visualization library with interactive graphical rendering.',
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
      'BPMN XML parsing → model → graphical rendering',
      'Automated documentation generation and PR previews',
    ],

    caseStudy: {
      context:
        'Critical open-source library with strict quality and cross-browser compatibility constraints.',
      problems: [
        'Complex BPMN rendering and XML parsing',
        'Cross-browser compatibility',
        'Maintaining a high quality standard for an open-source library',
      ],
      actions: [
        'Stabilized builds, tests, and releases across multiple environments (Linux, macOS, Windows)',
        'Dynamic previews for each Pull Request',
        'Cross-browser E2E testing (Chromium, Firefox, Safari, Edge)',
        'Quality and security analysis',
        'Automated npm releases and communications',
      ],
      results:
        'Improved rendering reliability, enhanced quality, and increased adoption.',
    },
  },

  {
    id: 'bpmn-visu-examples',
    title: 'BPMN Visualization Examples',
    date: '2020 - 2023',
    description:
      'Interactive examples showcasing BPMN Visualization JS features to ease its adoption.',
    github: 'https://github.com/process-analytics/bpmn-visualization-examples',
    parent: 'process-analytics',
    category: 'tooling',
    contributions: ['frontend', 'ci-cd', 'devex'],
    company: 'Bonitasoft',

    caseStudy: {
      context:
        'Need to facilitate the adoption of a complex library through concrete examples.',
      problems: [
        'Steep learning curve for users',
        'Lack of realistic examples',
      ],
      actions: [
        'Created interactive examples',
        'Set up PR previews',
        'Synchronized with the main library',
      ],
      results: 'Reduced onboarding time and improved adoption.',
    },
  },

  {
    id: 'bpmn-visu-r',
    title: 'BPMN Visualization R',
    date: '2021 - 2023',
    description:
      'R package enabling BPMN process visualization within the data science ecosystem.',
    github: 'https://github.com/process-analytics/bpmn-visualization-R',
    parent: 'process-analytics',
    category: 'library',
    contributions: ['frontend'],
    company: 'Bonitasoft',

    caseStudy: {
      context: 'Extending a JS library into the R ecosystem.',
      problems: ['JS ↔ R interoperability', 'CRAN distribution'],
      actions: [
        'Built an R wrapper',
        'Created a JS ↔ R bridge',
        'Handled CRAN packaging',
      ],
      results:
        'Expanded reach to the data science ecosystem and simplified usage.',
    },
  },

  {
    id: 'process-analytics-dev',
    title: 'Process Analytics Website',
    date: '2021 - 2023',
    description: 'Project showcase website.',
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
      'Data visualization product for analyzing business processes through dashboards and BPMN visualizations.',
    category: 'product',
    contributions: ['product', 'architecture', 'devex'],
    featured: true,
    company: 'Bonitasoft',
    highlights: [
      'Advanced business data visualization',
      'Structured development practices',
    ],

    caseStudy: {
      context:
        'Built from scratch a multi-application product for data visualization combining backend, frontend, and BPMN visualization.',
      problems: [
        'High technical and functional complexity',
        'Building a system combining data, backend, and visualization',
        'Setting up technical foundations and development practices',
      ],
      actions: [
        'Designed the overall product architecture',
        'Implemented backend and frontend foundations',
        'Structured development practices',
      ],
      results:
        'Delivered a complete and structured product enabling business process visualization and analysis.',
    },
  },

  {
    id: 'bonita-process-insights-superset',
    title: 'Process Insights – Superset',
    date: '2023 - 2024',
    description:
      'Custom Apache Superset with a BPMN plugin for interactive visualization.',
    parent: 'bonita-process-insights',
    category: 'application',
    contributions: ['frontend', 'ci-cd', 'testing', 'devex'],
    highlights: [
      'BPMN visualization plugin integrated into Superset',
      'Optimized CI/CD pipelines',
      'Migration scripts to secure upgrades',
    ],
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-process-insights-app',
    title: 'Process Insights – Application',
    date: '2023 - 2024',
    description: 'Fullstack application for analytics data management.',
    parent: 'bonita-process-insights',
    category: 'application',
    contributions: ['frontend', 'backend', 'devex'],
    highlights: [
      'Rapid onboarding on Angular and JHipster',
      'Fullstack contributions',
      'Contributed to developer onboarding',
    ],
    company: 'Bonitasoft',
  },

  {
    id: 'bonita-ui-builder',
    title: 'Bonita UI Builder',
    date: '2024 - 2025',
    description:
      'Low-code platform based on Appsmith with advanced CI/CD architecture.',
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
      'Multi-architecture Docker (amd64 / arm64)',
      'Migration scripts for secure upgrades',
    ],

    caseStudy: {
      context:
        'Built from scratch a low-code platform based on Appsmith with advanced CI/CD architecture.',
      problems: [
        'Defining the overall multi-component architecture',
        'Building a complete and reliable CI/CD pipeline',
        'Managing the complexity of a low-code platform',
      ],
      actions: [
        'Designed the overall architecture',
        'Set up orchestrated CI/CD pipelines',
        'Fully automated builds, tests, and releases',
        'Structured development standards and practices',
      ],
      results:
        'Delivered a robust platform with an industrialized delivery pipeline, enabling reliable and frequent releases.',
    },
  },

  {
    id: 'bonita-process-automation',
    title: 'Bonita Process Automation',
    date: '2012 - 2015',
    description:
      'Business process automation platform including a BPM engine, migration tools, packaging, and system integration.',
    category: 'product',
    company: 'Bonitasoft',
    contributions: ['ci-cd'],
  },

  {
    id: 'bonita-engine',
    title: 'Bonita Engine',
    date: '2012 - 2015',
    description: 'Open-source BPM engine at the core of the Bonita platform.',
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
    description: 'Tool to migrate Bonita versions.',
    github: 'https://github.com/bonitasoft/bonita-migration',
    parent: 'bonita-process-automation',
    category: 'tooling',
    company: 'Bonitasoft',
    contributions: ['backend'],
    highlights: [
      'Automated data migration between versions',
      'Multi-database support',
      'Validation and secure upgrades',
    ],
  },

  {
    id: 'bonita-packaging',
    title: 'Platform Packaging',
    date: '2012 - 2015',
    description:
      'Multi-server distribution of the Bonita Process Automation platform.',
    parent: 'bonita-process-automation',
    category: 'tooling',
    company: 'Bonitasoft',
    contributions: ['packaging'],
    highlights: [
      'Tomcat 6 → 7 Migration',
      'JBoss 5 → 7 Migration',
      'Automated multi-environment integration testing',
    ],
  },

  {
    id: 'bonita-ldap-synchronizer',
    title: 'LDAP Synchronizer',
    date: '2013 - 2015',
    description:
      'LDAP synchronization tool for user and permissions management.',
    github: 'https://github.com/bonitasoft/bonita-connector-ldap',
    parent: 'bonita-process-automation',
    category: 'application',
    company: 'Bonitasoft',
    contributions: ['backend'],
    highlights: [
      'User synchronization from LDAP',
      'Permissions management',
      'System maintenance and evolution',
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
    description: 'User permissions management platform across multi-BI tools.',
    category: 'product',
    contributions: ['architecture'],
    company: 'GB&Smith',
    highlights: ['Modular plugin-based architecture'],

    caseStudy: {
      context:
        'Multi-BI tools audit platform requiring a flexible architecture.',
      problems: ['Multiple data sources', 'Complex permission models'],
      actions: ['Modular plugin-based architecture'],
      results: 'Extensible and maintainable system.',
    },
  },

  {
    id: 'gbsmith-365view-core',
    title: '365 View Core',
    date: '2016 - 2017',
    description: 'Core component managing user permissions.',
    parent: 'gbsmith-365view',
    category: 'application',
    contributions: ['backend', 'architecture'],
    company: 'GB&Smith',
    highlights: [
      'Modular backend architecture',
      'Batch processing and scheduling',
      'Software quality and testing',
    ],
  },

  {
    id: 'gbsmith-365view-plugin',
    title: '365 View Plugin',
    date: '2016 - 2017',
    description:
      'Internal plugin responsible for the platform’s data management.',
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-365view-salesforce-plugin',
    title: 'Salesforce Plugin',
    date: '2016 - 2017',
    description: 'Plugin for managing user permissions in Salesforce.',
    parent: 'gbsmith-365view',
    category: 'plugin',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
  },

  {
    id: 'gbsmith-fenix',
    title: 'Fenix',
    date: '2017 - 2019',
    description: 'BI data audit platform (SAP BO, SAP BW, Tableau).',
    category: 'product',
    contributions: ['architecture'],
    company: 'GB&Smith',

    caseStudy: {
      context:
        'Building a BI data audit platform capable of analyzing data from multiple sources.',
      problems: [
        'Designing a system capable of handling heterogeneous data sources',
        'Defining an extensible architecture',
        'Managing data processing complexity',
      ],
      actions: [
        'Designed a modular plugin-based architecture',
        'Structured data processing flows',
        'Set up the technical foundations of the product',
        'Contributed to defining the product capabilities',
      ],
      results: 'Created a robust and extensible platform for BI data analysis.',
    },
  },

  {
    id: 'gbsmith-fenix-core',
    title: 'Fenix Core',
    date: '2017 - 2019',
    description:
      'Core component responsible for data processing and plugin orchestration.',
    parent: 'gbsmith-fenix',
    category: 'application',
    contributions: ['backend', 'frontend'],
    company: 'GB&Smith',
    highlights: [
      'Plugin lifecycle orchestration',
      'Multi-source BI data processing',
      'Modular backend architecture',
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
    description: 'Personal portfolio designed as a design system.',
    github: 'https://github.com/csouchet/portfolio',
    category: 'application',
    contributions: ['frontend'],
    company: 'Personal',

    caseStudy: {
      context:
        'Building a portfolio with a strong staff-level positioning goal.',
      problems: [
        'Standing out in a saturated market',
        'Lack of storytelling in traditional portfolios',
      ],
      actions: [
        'Impact-driven structure',
        'Design system based on Mantine',
        'Data-driven approach',
      ],
      results: 'Differentiated portfolio with premium positioning.',
    },
  },
];
