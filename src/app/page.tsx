import { Metadata } from 'next';

import { ContactSection } from '@/components/homeSections/ContactSection';
import { ExpertiseSection } from '@/components/homeSections/ExpertiseSection';
import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { HeroSection } from '@/components/homeSections/HeroSection';
import { PrinciplesSection } from '@/components/homeSections/PrinciplesSection';
import { WhatIDoSection } from '@/components/homeSections/WhatIDoSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <WhatIDoSection />

      <FeaturedProjectsSection />

      <PrinciplesSection />

      <ExpertiseSection />

      <FeaturedArticlesSection />

      <ContactSection />
    </>
  );
}
