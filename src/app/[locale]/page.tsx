import { Metadata } from 'next';

import { Container, Stack } from '@mantine/core';

import { ContactBanner } from '@/components/ContactBanner';
import { Expertise } from '@/components/home/Expertise';
import { Hero } from '@/components/home/Hero';
import { ValueProposition } from '@/components/home/ValueProposition';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).home;

  return (
    <>
      <Hero content={content.hero} />

      <Container size="lg">
        <Stack variant="page">
          <Expertise content={content.expertise} />
          <ValueProposition
            solutionsContent={content.solutions}
            differentiatorsContent={content.differentiators}
          />

          <ContactBanner
            title={content.collaboration.title}
            description={content.collaboration.description}
            cta={content.collaboration.cta}
          />
        </Stack>
      </Container>
    </>
  );
}
