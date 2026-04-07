import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { Metadata } from 'next';

import { Container, Stack, Title, Text, Group, Button } from '@mantine/core';

import { BaseCard } from '@/components/cards/BaseCard';
import { ContactForm } from '@/components/ContactForm';
import { FreelanceLinks } from '@/components/FreelanceLinks';
import { getSiteConfig } from '@/config/site';
import { freelanceLinks } from '@/data/freelance';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/contact',
    languages: {
      fr: '/fr/contact',
      en: '/en/contact',
    },
  },
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).contact;
  const siteConfig = getSiteConfig(locale);

  return (
    <Container size="sm" py="xl">
      <Stack gap="2.5rem">
        {/* HEADER */}
        <Stack gap="xs">
          <Title order={1}>{content.header.title}</Title>

          <Text c="dimmed" maw="65ch">
            {content.header.description}
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
                {content.direct.linkedin.cta}
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
                {content.direct.github.cta}
              </Button>
            </Group>
          </BaseCard>
        </Stack>

        {/* CONTACT FORM */}
        <Stack gap="sm">
          <Stack gap={4}>
            <Title order={3}>{content.form.title}</Title>

            <Text size="sm" c="dimmed">
              {content.form.description}
            </Text>
          </Stack>

          <ContactForm content={content.form.content} />
        </Stack>

        {/* FREELANCE SECTION */}
        <Stack gap="sm">
          <Stack gap={4}>
            <Title order={3}>{content.freelance.title}</Title>

            <Text size="sm" c="dimmed">
              {content.freelance.description}
            </Text>
          </Stack>

          <FreelanceLinks data={freelanceLinks} />
        </Stack>
      </Stack>
    </Container>
  );
}
