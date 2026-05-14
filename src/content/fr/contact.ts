import { SpotlightItem } from '@/components/layout/SpotlightGrid';

export const contactContent = {
  hero: {
    title: 'Contact',
    subtitle: 'Discutons de votre projet — freelance / mission / collaboration',
  },

  reachMe: {
    title: 'Me retrouver ailleurs',
    intro:
      'Vous pouvez aussi me contacter ou découvrir mon travail sur ces plateformes :',
  },

  form: {
    title: 'Envoyez-moi un message',
    content: {
      fields: {
        name: 'Nom',
        email: 'Email',
        message: 'Votre message',
        submit: 'Discutons de votre projet',
      },
      placeholders: {
        name: 'Votre nom',
        email: 'votre@email.com',
        message: 'Parlez-moi de votre projet, de vos besoins...',
      },
      feedback: {
        success: 'Message envoyé avec succès ✨',
        error: 'Une erreur est survenue. Réessaie.',
      },
      footer: 'Je réponds généralement sous 24 à 48h.',
    },
  },

  availability:
    'Disponible pour des missions freelance à partir de mi-novembre 2026.',

  features: [
    {
      id: 'speed',
      title: 'Réponse rapide',
      description: "Je m'engage à vous répondre sous 24 à 48h ouvrées.",
    },
    {
      id: 'secure',
      title: 'Échange clair',
      description: 'Un premier échange pour bien comprendre vos besoins.',
    },
    {
      id: 'quality',
      title: 'Collaboration sur mesure',
      description: 'Des solutions adaptées à vos objectifs.',
    },
  ] as SpotlightItem<'feature'>[],
};
