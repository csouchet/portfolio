'use client';

import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { FreelanceCTASection } from '@/components/homeSections/FreelanceCTASection';
import { HeroSection } from '@/components/homeSections/HeroSection';

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
