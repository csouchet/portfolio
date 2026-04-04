export type ProjectCompany = 'Bonitasoft' | 'GB&Smith' | 'Personnel';

export type ProjectCategory =
  | 'product'
  | 'library'
  | 'tooling'
  | 'application'
  | 'engine'
  | 'plugin'
  | 'website';

export type ProjectContribution =
  | 'frontend'
  | 'backend'
  | 'ci-cd'
  | 'testing'
  | 'release'
  | 'devex'
  | 'architecture'
  | 'product'
  | 'packaging';

export type CaseStudy = {
  context?: string;
  problems?: string[];
  actions?: string[];
  results?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;

  stack?: string[];
  github?: string;
  featured?: boolean;
  parent?: string;

  highlights?: string[];

  caseStudy?: CaseStudy;

  category?: ProjectCategory;
  contributions?: ProjectContribution[];

  company: ProjectCompany;
};
