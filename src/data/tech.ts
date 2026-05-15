import { IconBrandNextjs } from '@tabler/icons-react';
import { FaJava } from 'react-icons/fa';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiJenkins,
  SiJest,
  SiApachetomcat,
  SiGatsby,
  SiMui,
  SiAngular,
  SiSpring,
  SiR,
  SiGradle,
  SiNpm,
  SiYarn,
  SiVite,
  SiJunit5,
  SiSonar,
  SiGithubcopilot,
  SiGithub,
  SiJira,
  SiConfluence,
  SiJfrog,
  SiGit,
  SiCypress,
} from 'react-icons/si';

import { TechInfo } from '@/types/tech';

export type Tech = keyof typeof techMap;

export const techMap: Record<string, TechInfo> = {
  // Frontend
  React: { name: 'React', icon: SiReact, color: '#61DAFB' },
  TypeScript: { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  JavaScript: { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  HTML: { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  CSS: { name: 'CSS', icon: SiCss, color: '#1572B6' },
  Angular: { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  Gatsby: { name: 'Gatsby', icon: SiGatsby, color: '#663399' },
  MaterialUI: { name: 'MaterialUI', icon: SiMui, color: '#007FFF' },
  JSF: { name: 'JSF', color: '#0072C6' },
  MxGraph: { name: 'MxGraph', color: '#400500' },
  Mantine: { name: 'Mantine', color: '#007FFF' },

  // Backend
  Java: { name: 'Java', icon: FaJava, color: '#5382a1' },
  Spring: { name: 'Spring', icon: SiSpring, color: '#6DB33F' },
  SpringBoot: { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  JPA: { name: 'JPA', color: '#59666C' },
  Hibernate: { name: 'Hibernate', icon: SiHibernate, color: '#59666C' },
  RestAPI: { name: 'REST API', color: '#005571' }, // <-- Ajout de l'API REST
  Quartz: { name: 'Quartz', color: '#1E90FF' },
  Groovy: { name: 'Groovy', color: '#4298B8' },
  R: { name: 'R', icon: SiR, color: '#276DC3' },

  // Database
  MySQL: { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  PostgreSQL: { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  Oracle: { name: 'Oracle', color: '#F80000' },
  SQLServer: { name: 'SQL Server', color: '#CC292B' },
  MongoDB: { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },

  // DevOps, CI/CD & Tools
  Docker: { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  GitHubActions: {
    name: 'GitHub Actions',
    icon: SiGithubactions,
    color: '#2088FF',
  },
  GitHubCopilot: {
    name: 'GitHub Copilot',
    icon: SiGithubcopilot,
    color: '#6E40C9',
  },
  GitHub: { name: 'GitHub', icon: SiGithub, color: '#181717' },
  Git: { name: 'Git', icon: SiGit, color: '#F05032' },
  JFrog: { name: 'JFrog', icon: SiJfrog, color: '#000000' },
  Jira: { name: 'Jira', icon: SiJira, color: '#0052CC' },
  Confluence: { name: 'Confluence', icon: SiConfluence, color: '#172B4D' },
  Jenkins: { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  Maven: { name: 'Maven', color: '#C71A22' },
  Gradle: { name: 'Gradle', icon: SiGradle, color: '#02303A' },
  Ant: { name: 'Ant', color: '#A20F35' },
  SonarQube: { name: 'SonarQube', icon: SiSonar, color: '#4E9BCD' },
  SonarCloud: { name: 'SonarCloud', icon: SiSonar, color: '#4E9BCD' },
  npm: { name: 'npm', icon: SiNpm, color: '#CB3837' },
  yarn: { name: 'yarn', icon: SiYarn, color: '#CB3837' },
  Vite: { name: 'Vite', icon: SiVite, color: '#646CFF' },
  NextJS: { name: 'Next.js', icon: IconBrandNextjs, color: '#743C82' },
  CognosSDK: { name: 'Cognos SDK', color: '#0946500' },
  SalesforceSDK: { name: 'Salesforce SDK', color: '#454900' },

  // Testing
  Playwright: { name: 'Playwright', color: '#2EAD33' },
  Jest: { name: 'Jest', icon: SiJest, color: '#C21325' },
  JUnit: { name: 'JUnit', icon: SiJunit5, color: '#25A162' },
  Mockito: { name: 'Mockito', color: '#882B21' },
  Cypress: { name: 'Cypress', icon: SiCypress, color: '#17202C' },

  // Servers
  Tomcat: { name: 'Tomcat', icon: SiApachetomcat, color: '#F8DC75' },
  JBoss: { name: 'JBoss', color: '#E1E0E6' },
};

export function getTechInfo(techName: string): TechInfo {
  return techMap[techName] || { name: techName };
}
