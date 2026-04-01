export type ProjectCategory =
  | 'product'
  | 'library'
  | 'tooling'
  | 'application'
  | 'engine'
  | 'website';

export type ProjectContribution =
  | 'frontend'
  | 'backend'
  | 'ci-cd'
  | 'testing'
  | 'release'
  | 'devex'
  | 'architecture'
  | 'product';

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
};
