'use client';

import { HeroSection } from '@/components/HeroSection';
import { FeaturedProjectsSection } from '@/components/FeaturedProjectsSection';
import { FeaturedArticlesSection } from '@/components/FeaturedArticlesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      <FeaturedArticlesSection />
      {/*
      <AboutSection />
      <ContactSection />*/}
    </main>
  );
}
