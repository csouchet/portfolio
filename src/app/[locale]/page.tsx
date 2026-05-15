import { Metadata } from 'next';

import { Container, Stack } from '@mantine/core';

import { ContactBanner } from '@/components/ContactBanner';
import { Expertise } from '@/components/home/Expertise';
import { Hero } from '@/components/home/Hero';
import { ValueProposition } from '@/components/home/ValueProposition';
import { getContent } from '@/lib/i18n';
import { generateSeoMetadata } from '@/lib/seo';
import { Locale } from '@/types/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const common = getContent(locale).common;

  return generateSeoMetadata({
    title: common.navigation.labels.home,
    description: common.site.description,
    locale,
    path: '',
  });
}

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
