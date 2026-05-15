import { SpotlightItem } from '@/components/layout/SpotlightGrid';
import { Tech } from '@/data/tech';

export const skillsContent = {
  hero: {
    title: 'Compétences',
    subtitle: 'Mon expertise technique, mes qualités humaines et ma créativité',
    description:
      'Un arsenal complet pour concevoir, développer et livrer des solutions robustes, utiles et élégantes.',
  },

  approach: {
    title: 'Mon approche',
    description:
      "Ingénieure développeuse fullstack avec plus de 15 ans d'expérience, j'interviens sur l'ensemble du cycle de vie d'une application : de la conception à la livraison, en passant par le développement, les tests et l'automatisation.",
    items: [
      {
        id: 'decision',
        title: 'Décider vite, avancer loin',
        description:
          'Je prends des décisions rapidement, de manière raisonnée, pour livrer des solutions robustes et efficaces.',
      },
      {
        id: 'learning',
        title: 'Apprendre en pratiquant',
        description:
          "J'expérimente, je teste, j'itère. L'amélioration continue fait partie de mon ADN.",
      },
      {
        id: 'quality',
        title: 'Soigner les détails',
        description:
          'Rigoureuse et perfectionniste, je vise la qualité, la maintenabilité et une expérience utilisateur irréprochable.',
      },
    ] as SpotlightItem<'approch'>[],
  },

  technical: {
    title: 'Compétences techniques',
    categories: [
      {
        name: 'Frontend',
        subtitle: 'Interfaces modernes & performantes',
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
        subtitle: 'APIs, logique métier & données',
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
        subtitle: 'Automatisation & livraison continue',
        skills: ['GitHubActions', 'Jenkins', 'Docker', 'JFrog'] as Tech[],
      },
      {
        name: 'Outils',
        subtitle: 'Qualité & Collaboration',
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
        title: 'Rigueur & précision',
        description:
          "J'accorde une grande importance à la qualité et au soin du détail.",
      },
      {
        id: 'analysis',
        title: "Esprit d'analyse",
        description:
          "J'analyse, je structure et je résous des problèmes complexes avec méthode.",
      },
      {
        id: 'team',
        title: "Esprit d'équipe",
        description:
          "J'écoute, je partage et je contribue à la réussite collective.",
      },
      {
        id: 'perseverance',
        title: 'Persévérance',
        description:
          "Tenace face aux défis, je trouve des solutions et j'atteins mes objectifs.",
      },
      {
        id: 'autonomy',
        title: 'Autonomie',
        description:
          'Proactive, responsable et force de proposition, je prends des initiatives et je mène les projets à bien.',
      },
      {
        id: 'creativity',
        title: 'Créativité',
        description:
          'Je pense out of the box pour concevoir des solutions innovantes et élégantes.',
      },
    ] as SpotlightItem<'soft'>[],
  },

  signature: {
    title: 'Ma signature',
    role: 'Ingénieure développeuse\n<h>& Artiste céramiste</h>',
    description:
      "Je conjugue logique et créativité, code et matière. Chaque année, je mets entre parenthèses le numérique pendant l'été pour me consacrer à la céramique, nourrissant ainsi ma créativité et mon équilibre.",
    cta: 'En savoir plus sur moi',
    hobbies: [
      {
        id: 'pottery',
        title: 'Poterie',
        description:
          'CAP Tournage en céramique (en préparation - juin 2026)\nFormation YouSchool',
      },
      {
        id: 'yoga',
        title: 'Yoga',
        description: "Pratique régulière pour l'équilibre corps & esprit",
      },
      {
        id: 'pole',
        title: 'Pole Dance',
        description: 'Force, grâce et confiance en soi',
      },
    ] as SpotlightItem<'hobby'>[],
  },

  cta: {
    title: 'Un projet en tête ?',
    description:
      'Échangeons sur vos idées et voyons comment je peux vous aider à les concrétiser.',
    cta: 'Discutons de votre projet',
  },
};
