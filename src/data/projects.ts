import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'bpmn-js',
    title: 'BPMN Visualization JS',
    description: 'Affichage interactif de diagrammes BPMN dans le navigateur.',
    stack: ['TypeScript', 'mxGraph'],
    github: 'https://github.com/process-analytics/bpmn-visualization-js',
    featured: true,
  },
  {
    id: 'bonita',
    title: 'Bonita Engine',
    description:
      'Moteur open-source d’automatisation de processus métier basé sur Java et Spring.',
    stack: ['Java', 'Spring'],
    github: 'https://github.com/bonitasoft/bonita-engine',
    featured: true,
  },

  {
    id: 'examples',
    title: 'BPMN Visualization Examples',
    description:
      'Exemples d’utilisation de la bibliothèque BPMN Visualization JS.',
    stack: ['TypeScript', 'HTML'],
    github: 'https://github.com/process-analytics/bpmn-visualization-examples',
  },
  {
    id: 'process-analytics-dev',
    title: 'Process Analytics Dev',
    description: 'Site vitrine pour le projet Process Analytics.',
    stack: ['React', 'Gatsby', 'TypeScript'],
    github: 'https://github.com/process-analytics/process-analytics.dev',
  },
  {
    id: 'bpmn-r',
    title: 'BPMN Visualization R',
    description: 'Visualisation de processus BPMN pour des projets en R.',
    stack: ['R', 'Shiny'],
    github: 'https://github.com/process-analytics/bpmn-visualization-R',
  },
];
