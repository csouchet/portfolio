'use client';

import { ContactSection } from '@/components/homeSections/ContactSection';
import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { HeroSection } from '@/components/homeSections/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      <FeaturedArticlesSection />
      <ContactSection />
      {/*
      <AboutSection />*/}
    </main>
  );
}
