import Link from 'next/link';

import { Metadata } from 'next';

import { Stack, Text, Button } from '@mantine/core';

import { HomeSection } from '@/components/homeSections/HomeSection';
import { servicesContent } from '@/content/fr/services';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const content = servicesContent;

  return (
    <main>
      {/* HERO */}
      <HomeSection
        title={content.hero.title}
        description={content.hero.description}
      >
        <Stack maw={720} gap="md">
          <Text size="lg">{content.hero.intro}</Text>

          <Text fw={600}>{content.hero.positioning}</Text>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="gradient" w="fit-content">
              {content.hero.cta}
            </Button>
          </Link>
        </Stack>
      </HomeSection>

      {/* WHEN */}
      <HomeSection title={content.when.title}>
        <Stack maw={720} gap="md">
          <Text>{content.when.intro}</Text>

          <Stack gap="xs">
            {content.when.bullets.map(item => (
              <Text key={item} c="dimmed">
                • {item}
              </Text>
            ))}
          </Stack>
        </Stack>
      </HomeSection>

      {/* MISSIONS */}
      <HomeSection title={content.missions.title}>
        <Stack maw={720} gap="md">
          <Stack gap="md">
            {content.missions.items.map(item => (
              <Stack key={item.title} gap={4}>
                <Text fw={500}>{item.title}</Text>
                <Text size="sm" c="dimmed">
                  {item.description}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </HomeSection>

      {/* CASE STUDY */}
      <HomeSection title={content.caseStudy.title}>
        <Stack maw={720} gap="md">
          <Text fw={600}>{content.caseStudy.headline}</Text>

          <Text c="dimmed">{content.caseStudy.context}</Text>

          <Text>{content.caseStudy.action}</Text>

          <Text fw={500}>{content.caseStudy.result}</Text>
        </Stack>
      </HomeSection>

      {/* CTA */}
      <HomeSection title={content.cta.title}>
        <Stack align="center" gap="md">
          <Text ta="center" maw={500}>
            {content.cta.description}
          </Text>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="gradient">{content.cta.button}</Button>
          </Link>
        </Stack>
      </HomeSection>
    </main>
  );
}
