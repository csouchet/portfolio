'use client';

import { HeroSection } from '@/components/homeSections/HeroSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FreelanceCTASection } from '@/components/homeSections/FreelanceCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      <FeaturedArticlesSection />
      <FreelanceCTASection />
      {/*
      <AboutSection />
      <ContactSection />*/}
    </main>
  );
}
