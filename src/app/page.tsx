'use client';

import { HeroSection } from '@/components/HeroSection';
import { FeaturedProjectsSection } from '@/components/FeaturedProjectsSection';
import { FeaturedArticlesSection } from '@/components/FeaturedArticlesSection';
import { FreelanceCTASection } from '@/components/FreelanceCTASection';

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
