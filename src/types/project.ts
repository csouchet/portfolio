export type ProjectCompany =
  'Bonitasoft' | 'GB&Smith' | 'Personal' | 'TAGSYS RFID' | 'Astek';

export const PROJECT_CATEGORIES = [
  'product',
  'library',
  'tooling',
  'application',
  'engine',
  'plugin',
  'website',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_CONTRIBUTIONS = [
  'frontend',
  'backend',
  'ci-cd',
  'testing',
  'release',
  'devex',
  'architecture',
  'product',
  'packaging',
] as const;

export type ProjectContribution = (typeof PROJECT_CONTRIBUTIONS)[number];

export type ProjectId =
  | 'process-analytics'
  | 'bpmn-visu-js'
  | 'bpmn-visu-examples'
  | 'bpmn-visu-r'
  | 'process-analytics-dev'
  | 'bonita-process-insights'
  | 'bonita-process-insights-superset'
  | 'bonita-process-insights-app'
  | 'bonita-ui-builder'
  | 'bonita-process-automation'
  | 'bonita-engine'
  | 'bonita-migration-tool'
  | 'bonita-packaging'
  | 'bonita-ldap-synchronizer'
  | 'gbsmith-365view'
  | 'gbsmith-365view-core'
  | 'gbsmith-365view-plugin'
  | 'gbsmith-365view-salesforce-plugin'
  | 'gbsmith-365eyes'
  | 'gbsmith-365eyes-core'
  | 'gbsmith-365eyes-cognos-plugin'
  | 'gbsmith-fenix'
  | 'gbsmith-fenix-core'
  | 'portfolio';

export type CaseStudy = {
  context?: string;
  problems?: string[];
  actions?: string[];
  results?: string;
};

export type Project = {
  id: ProjectId;
  title: string;
  description: string;
  date: string;

  github?: string;
  featured?: boolean;
  parent?: string;

  highlights?: string[];

  caseStudy?: CaseStudy;

  category: ProjectCategory;
  contributions?: ProjectContribution[];

  company: ProjectCompany;
};
