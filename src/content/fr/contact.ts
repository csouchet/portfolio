export const contactContent = {
  header: {
    title: 'Contact',
    description:
      'Retrouvez-moi sur LinkedIn ou GitHub pour échanger autour d’un projet...',
  },

  direct: {
    linkedin: {
      label: 'LinkedIn',
      cta: 'Voir le profil',
    },
    github: {
      label: 'GitHub',
      cta: 'Voir les projets',
    },
  },

  form: {
    title: 'Envoyer un message',
    description: 'Ou contactez-moi directement via ce formulaire.',

    content: {
      description: 'Une idée, une mission ou juste envie de discuter ?',

      fields: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer ✨',
      },

      placeholders: {
        name: 'Ton nom',
        email: 'ton@email.com',
        message: 'Décris ton besoin…',
      },

      feedback: {
        success: 'Message envoyé avec succès ✨',
        error: 'Une erreur est survenue. Réessaie.',
      },
    },
  },

  freelance: {
    title: 'Freelance',
    description: 'Vous pouvez également me contacter via ces plateformes.',
    aria: 'Voir profil',
  },
};
