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
      'Process analytics ecosystem combining multiple technical components (libraries, examples, website, data).',
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
        'Delivered a complete and coherent ecosystem enabling development, distribution and adoption of process analytics tools.',
    },
  },

  {
    id: 'bpmn-visu-js',
    title: 'BPMN Visualization JS',
    description:
      'Open-source BPMN visualization library with interactive graphical rendering.',
    stack: ['TypeScript', 'mxGraph', 'Playwright', 'CI/CD', 'SonarCloud'],
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
      'Automated documentation and PR previews',
    ],

    caseStudy: {
      context:
        'Critical open-source library with strong quality and cross-browser constraints.',
      problems: [
        'Complex BPMN rendering and XML parsing',
        'Cross-browser compatibility',
        'Maintaining high quality for an open-source library',
      ],
      actions: [
        'Stabilized builds, tests and releases across environments (Linux, macOS, Windows)',
        'Dynamic previews for each Pull Request',
        'Cross-browser E2E tests (Chromium, Firefox, Safari, Edge)',
        'Quality and security analysis',
        'Automated npm releases and communication',
      ],
      results:
        'Improved rendering reliability, higher quality and increased adoption.',
    },
  },

  {
    id: 'bpmn-visu-examples',
    title: 'BPMN Visualization Examples',
    description:
      'Interactive examples showcasing BPMN Visualization JS features and easing adoption.',
    stack: ['TypeScript', 'HTML', 'CI/CD'],
    github: 'https://github.com/process-analytics/bpmn-visualization-examples',
    parent: 'process-analytics',
    category: 'tooling',
    contributions: ['frontend', 'ci-cd', 'devex'],
    company: 'Bonitasoft',

    caseStudy: {
      context:
        'Need to improve adoption of a complex library through concrete examples.',
      problems: [
        'Steep learning curve for users',
        'Lack of realistic examples',
      ],
      actions: [
        'Created interactive examples',
        'Implemented PR previews',
        'Synchronized with main library',
      ],
      results: 'Reduced onboarding time and improved adoption.',
    },
  },

  {
    id: 'bpmn-visu-r',
    title: 'BPMN Visualization R',
    description:
      'R package enabling BPMN process visualization within the data science ecosystem.',
    stack: ['R', 'Shiny', 'JavaScript'],
    github: 'https://github.com/process-analytics/bpmn-visualization-R',
    parent: 'process-analytics',
    category: 'library',
    contributions: ['frontend'],
    company: 'Bonitasoft',

    caseStudy: {
      context: 'Extending a JS library into the R ecosystem.',
      problems: ['JS ↔ R interoperability', 'CRAN distribution'],
      actions: [
        'Built R wrapper',
        'Created JS ↔ R bridge',
        'Handled CRAN packaging',
      ],
      results: 'Expanded reach to data science ecosystem and simplified usage.',
    },
  },

  {
    id: 'process-analytics-dev',
    title: 'Process Analytics Website',
    description: 'Project showcase website.',
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
        'Built from scratch a multi-application product combining backend, frontend and BPMN visualization.',

      problems: [
        'High technical and functional complexity',
        'Combining data, backend and visualization into one system',
        'Setting up technical foundations and development practices',
      ],

      actions: [
        'Designed overall product architecture',
        'Implemented backend and frontend foundations',
        'Structured development practices',
      ],

      results:
        'Delivered a complete and structured product for business process analysis and visualization.',
    },
  },

  {
    id: 'bonita-ui-builder',
    title: 'Bonita UI Builder',
    description:
      'Low-code platform based on Appsmith with advanced CI/CD architecture.',
    stack: [
      'Java',
      'Spring',
      'React',
      'TypeScript',
      'Docker',
      'GitHub Actions',
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
      'Multi-architecture Docker (amd64 / arm64)',
      'Migration scripts for safe upgrades',
    ],

    caseStudy: {
      context:
        'Built from scratch a low-code platform with advanced CI/CD architecture.',

      problems: [
        'Designing a multi-component architecture',
        'Building a complete and reliable CI/CD pipeline',
        'Managing complexity of a low-code platform',
      ],

      actions: [
        'Designed overall architecture',
        'Implemented orchestrated CI/CD pipelines',
        'Fully automated builds, tests and releases',
        'Defined standards and development practices',
      ],

      results:
        'Delivered a robust platform with industrialized delivery pipeline enabling reliable and frequent releases.',
    },
  },

  /**
   * =========================
   * PERSONAL
   * =========================
   */

  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Personal portfolio designed as a design system.',
    stack: ['React', 'TypeScript', 'Mantine'],
    github: 'https://github.com/csouchet/portfolio',
    category: 'application',
    contributions: ['frontend'],
    company: 'Personal',

    caseStudy: {
      context:
        'Building a portfolio with a strong positioning and differentiation goal.',
      problems: [
        'Standing out in a saturated market',
        'Lack of storytelling in typical portfolios',
      ],
      actions: [
        'Impact-driven structure',
        'Design system based on Mantine',
        'Data-driven approach',
      ],
      results: 'Differentiated portfolio with strong positioning.',
    },
  },
];
