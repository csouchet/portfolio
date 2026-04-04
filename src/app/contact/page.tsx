import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { Metadata } from 'next';

import { Container, Stack, Title, Text, Group, Button } from '@mantine/core';

import { BaseCard } from '@/components/cards/BaseCard';
import { ContactForm } from '@/components/ContactForm';
import { FreelanceLinks } from '@/components/FreelanceLinks';
import { siteConfig } from '@/config/site';
import freelanceData from '@/content/shared/freelance.ts';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="2.5rem">
        {/* HEADER */}
        <Stack gap="xs">
          <Title order={1}>Contact</Title>

          <Text c="dimmed" maw="65ch">
            Retrouvez-moi sur LinkedIn ou GitHub pour échanger autour d’un
            projet, d’une mission ou simplement discuter tech.
          </Text>
        </Stack>

        {/* DIRECT CONTACT */}
        <Stack gap="md">
          <BaseCard>
            <Group justify="space-between" wrap="nowrap">
              <Group gap="sm">
                <IconBrandLinkedin size={20} />
                <Text fw={500}>LinkedIn</Text>
              </Group>

              <Button
                component="a"
                href={siteConfig.links.linkedin}
                target="_blank"
                variant="light"
                radius="xl"
              >
                Voir le profil
              </Button>
            </Group>
          </BaseCard>

          <BaseCard>
            <Group justify="space-between" wrap="nowrap">
              <Group gap="sm">
                <IconBrandGithub size={20} />
                <Text fw={500}>GitHub</Text>
              </Group>

              <Button
                component="a"
                href={siteConfig.links.github}
                target="_blank"
                variant="light"
                radius="xl"
              >
                Voir les projets
              </Button>
            </Group>
          </BaseCard>
        </Stack>

        {/* CONTACT FORM */}
        <Stack gap="sm">
          <Stack gap={4}>
            <Title order={3}>Envoyer un message</Title>

            <Text size="sm" c="dimmed">
              Ou contactez-moi directement via ce formulaire.
            </Text>
          </Stack>

          <ContactForm />
        </Stack>

        {/* FREELANCE SECTION */}
        <Stack gap="sm">
          <Stack gap={4}>
            <Title order={3}>Freelance</Title>

            <Text size="sm" c="dimmed">
              Vous pouvez également me contacter via ces plateformes.
            </Text>
          </Stack>

          <FreelanceLinks data={freelanceData} />
        </Stack>
      </Stack>
    </Container>
  );
}
