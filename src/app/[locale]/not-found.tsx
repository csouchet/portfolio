'use client';

import { Stack, Container } from '@mantine/core';

import { Banner } from '@/components/not-found/Banner';
import { Hero } from '@/components/not-found/Hero';
import { Navigation } from '@/components/not-found/Navigation';
import { Search } from '@/components/not-found/Search';
import { useContent } from '@/hooks/useContent';

export default function NotFound() {
  const { notFound, locale } = useContent();
  const content = notFound;

  return (
    <>
      <Container w="100%">
        <Hero content={content.hero} locale={locale} />
        <Stack variant="page">
          <Navigation content={content.navigation} locale={locale} />
          <Search content={content.search} />
        </Stack>
      </Container>

      <Banner />
    </>
  );
}
