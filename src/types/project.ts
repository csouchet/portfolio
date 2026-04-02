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

export type Project = {
  id: string;
  title: string;
  description: string;

  stack?: string[];
  github?: string;
  featured?: boolean;
  parent?: string;

  highlights?: string[];

  category?: ProjectCategory;
  contributions?: ProjectContribution[];

  company: ProjectCompany;
};
