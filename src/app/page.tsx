'use client';

import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { FreelanceCTASection } from '@/components/homeSections/FreelanceCTASection';
import { FreelanceSection } from '@/components/homeSections/FreelanceSection';
import { HeroSection } from '@/components/homeSections/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      <FeaturedArticlesSection />
      <FreelanceCTASection />
      <FreelanceSection />
      {/*
      <AboutSection />
      <ContactSection />*/}
    </main>
  );
}
