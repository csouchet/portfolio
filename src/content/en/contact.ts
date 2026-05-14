import { SpotlightItem } from '@/components/layout/SpotlightGrid';

export const contactContent = {
  hero: {
    title: 'Contact',
    subtitle:
      "Let's talk about your project — freelance / contract / collaboration",
  },

  reachMe: {
    title: 'Find me elsewhere',
    intro: 'You can also reach out or explore my work on these platforms:',
  },

  form: {
    title: 'Send me a message',
    content: {
      fields: {
        name: 'Name',
        email: 'Email',
        message: 'Your message',
        submit: "Let's talk about your project",
      },
      placeholders: {
        name: 'Your name',
        email: 'your@email.com',
        message: 'Tell me about your project, your needs...',
      },
      feedback: {
        success: 'Message sent successfully ✨',
        error: 'Something went wrong. Please try again.',
      },
      footer: 'I usually respond within 24–48 hours.',
    },
  },

  availability: 'Available for freelance work starting mid-November 2026.',

  features: [
    {
      id: 'speed',
      title: 'Fast response',
      description: 'I aim to reply within 24–48 business hours.',
    },
    {
      id: 'secure',
      title: 'Clear communication',
      description: 'An initial conversation to fully understand your needs.',
    },
    {
      id: 'quality',
      title: 'Tailored collaboration',
      description: 'Solutions aligned with your goals.',
    },
  ] as SpotlightItem<'feature'>[],
};
