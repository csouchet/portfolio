type Platform = 'Medium' | 'Dev.to' | 'Hackernoon';

export type Tag =
  | 'Testing'
  | 'Playwright'
  | 'Puppeteer'
  | 'TypeScript'
  | 'CI/CD'
  | 'Database'
  | 'DevOps'
  | 'Data'
  | 'Analytics'
  | 'Superset'
  | 'Open Source'
  | 'Community'
  | 'Event'
  | 'Tooling'
  | 'BPMN'
  | 'R'
  | 'Visualization'
  | 'Webinar'
  | 'Newsletter'
  | 'News'
  | 'Automation'
  | 'Visual Testing';

export type Article = {
  id: string;
  title: string;
  platform: Platform;
  url: string;
  date: string; // ISO
  readingTime: string;
  tags: Tag[];
  featured?: boolean;
  image?: string;
};
