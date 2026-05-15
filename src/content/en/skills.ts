import { SpotlightItem } from '@/components/layout/SpotlightGrid';
import { Tech } from '@/data/tech';

export const skillsContent = {
  hero: {
    title: 'Skills',
    subtitle: 'Technical expertise, human qualities, and creativity',
    description:
      'A complete toolkit to design, build, and deliver robust, useful, and elegant solutions.',
  },

  approach: {
    title: 'My approach',
    description:
      'Fullstack software engineer with 15+ years of experience, I work across the entire application lifecycle — from design to delivery, including development, testing, and automation.',
    items: [
      {
        id: 'decision',
        title: 'Decide fast, build for the long run',
        description:
          'I make thoughtful decisions quickly to deliver reliable and efficient solutions.',
      },
      {
        id: 'learning',
        title: 'Learn by doing',
        description:
          'I experiment, test, and iterate. Continuous improvement is part of how I work.',
      },
      {
        id: 'quality',
        title: 'Care about the details',
        description:
          'Detail-oriented and rigorous, I focus on quality, maintainability, and seamless user experience.',
      },
    ] as SpotlightItem<'approch'>[],
  },

  technical: {
    title: 'Technical skills',
    categories: [
      {
        name: 'Frontend',
        subtitle: 'Modern, high-performance interfaces',
        skills: [
          'React',
          'NextJS',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
          'MaterialUI',
        ] as Tech[],
      },
      {
        name: 'Backend',
        subtitle: 'APIs, business logic & data',
        skills: [
          'Java',
          'SpringBoot',
          'JPA',
          'Hibernate',
          'RestAPI',
          'Quartz',
          'PostgreSQL',
          'MySQL',
          'Oracle',
          'SQLServer',
        ] as Tech[],
      },
      {
        name: 'CI/CD',
        subtitle: 'Automation & continuous delivery',
        skills: ['GitHubActions', 'Jenkins', 'Docker', 'JFrog'] as Tech[],
      },
      {
        name: 'Tools',
        subtitle: 'Quality & collaboration',
        skills: [
          'GitHub',
          'GitHubCopilot',
          'SonarQube',
          'Jira',
          'Confluence',
        ] as Tech[],
      },
    ],
  },

  softSkills: {
    title: 'Soft skills',
    items: [
      {
        id: 'rigor',
        title: 'Attention to detail',
        description: 'I place strong emphasis on quality and craftsmanship.',
      },
      {
        id: 'analysis',
        title: 'Analytical thinking',
        description:
          'I analyze, structure, and solve complex problems with clarity.',
      },
      {
        id: 'team',
        title: 'Team mindset',
        description: 'I listen, share, and contribute to collective success.',
      },
      {
        id: 'perseverance',
        title: 'Perseverance',
        description:
          'I stay resilient in the face of challenges and follow through to results.',
      },
      {
        id: 'autonomy',
        title: 'Ownership',
        description:
          'Proactive and accountable, I take initiative and drive projects forward.',
      },
      {
        id: 'creativity',
        title: 'Creativity',
        description:
          'I think beyond conventional approaches to design elegant solutions.',
      },
    ] as SpotlightItem<'soft'>[],
  },

  signature: {
    title: 'My signature',
    role: 'Software Engineer\n<h>& Ceramic Artist</h>',
    description:
      'I combine logic and creativity — code and material. Every summer, I step away from tech to focus on ceramics, which fuels both my creativity and balance.',
    cta: 'Learn more about me',
    hobbies: [
      {
        id: 'pottery',
        title: 'Ceramics',
        description:
          'CAP in wheel-throwing (in progress — June 2026)\nYouSchool training',
      },
      {
        id: 'yoga',
        title: 'Yoga',
        description: 'Regular practice for body & mind balance',
      },
      {
        id: 'pole',
        title: 'Pole Dance',
        description: 'Strength, grace, and self-confidence',
      },
    ] as SpotlightItem<'hobby'>[],
  },

  cta: {
    title: 'Got a project in mind?',
    description:
      "Let's talk about your ideas and see how I can help turn them into reality.",
    cta: "Let's talk about your project",
  },
};
