import Link from 'next/link';

import { Metadata } from 'next';

import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
  Button,
  Box,
} from '@mantine/core';

import { aboutContent } from '@/content/fr/about';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fr/about',
    languages: {
      fr: '/fr/about',
      en: '/en/about',
    },
  },
};

export default function AboutPage() {
  const content = aboutContent;

  return (
    <Box>
      <Container size="md" py={80}>
        <Stack gap={60}>
          {/* HERO */}
          <Stack gap="lg">
            <Title order={1} style={{ lineHeight: 1.2, maxWidth: 720 }}>
              {content.hero.title}
            </Title>

            <Text size="lg" c="dimmed" style={{ maxWidth: 600 }}>
              {content.hero.subtitle}
            </Text>
          </Stack>

          <Divider opacity={0.4} />

          {/* PARCOURS */}
          <Stack gap="md">
            <Title order={2}>{content.journey.title}</Title>

            <Stack gap="sm">
              {content.journey.paragraphs.map((p, i) => (
                <Text key={i} c="dimmed">
                  {p}
                </Text>
              ))}

              <Text fw={500}>{content.journey.highlight}</Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* AUJOURD'HUI */}
          <Stack gap="md">
            <Title order={2}>{content.today.title}</Title>

            <Stack gap="sm">
              {content.today.paragraphs.map((p, i) => (
                <Text key={i} c="dimmed">
                  {p}
                </Text>
              ))}

              <Text fw={500}>{content.today.highlight}</Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* APPROCHE */}
          <Stack gap="md">
            <Title order={2}>{content.approach.title}</Title>

            <Stack gap="sm">
              <Text c="dimmed">{content.approach.intro}</Text>

              <Stack gap={6}>
                {content.approach.principles.map((p, i) => (
                  <Text key={i}>• {p}</Text>
                ))}
              </Stack>

              <Text fw={500}>{content.approach.highlight}</Text>
            </Stack>
          </Stack>

          <Divider opacity={0.4} />

          {/* PERSONAL */}
          <Stack gap="md">
            <Title order={2}>{content.personal.title}</Title>

            <Stack gap="sm">
              {content.personal.paragraphs.map((p, i) => (
                <Text key={i} c="dimmed">
                  {p}
                </Text>
              ))}

              <Text fw={500}>{content.personal.highlight}</Text>
            </Stack>
          </Stack>

          {/* CTA */}
          <Stack align="center" gap="md" mt={40}>
            <Text size="lg">{content.cta.text}</Text>

            <Link href="/contact">
              <Button radius="xl">{content.cta.button}</Button>
            </Link>

            <Text size="sm" c="dimmed">
              {content.cta.footer}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
