import { ApproachSection } from '@/components/homeSections/components/homeSections/ApproachSection';
import { ContactSection } from '@/components/homeSections/ContactSection';
import { ExpertiseSection } from '@/components/homeSections/ExpertiseSection';
import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { HeroSection } from '@/components/homeSections/HeroSection';
import { WhatIDoSection } from '@/components/homeSections/WhatIDoSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <WhatIDoSection />

      <FeaturedProjectsSection />

      <ApproachSection />

      <ExpertiseSection />

      <FeaturedArticlesSection />

      <ContactSection />
    </>
  );
}
