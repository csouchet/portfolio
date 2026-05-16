import { ProjectCompany } from '@/types/project';

export type Experience = {
  role: string;
  period: string;
  company?: ProjectCompany;
  description?: string;
  icon?: string;
  tasks?: string[];
};
