'use client';

import { HeroSection } from '@/components/HeroSection';
import { FeaturedProjectsSection } from '@/components/FeaturedProjectsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      {/*
      <AboutSection />
      <ContactSection />*/}
    </main>
  );
}
