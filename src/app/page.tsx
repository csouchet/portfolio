import { ContactSection } from '@/components/homeSections/ContactSection';
import { ExpertiseSection } from '@/components/homeSections/ExpertiseSection';
import { FeaturedArticlesSection } from '@/components/homeSections/FeaturedArticlesSection';
import { FeaturedProjectsSection } from '@/components/homeSections/FeaturedProjectsSection';
import { HeroSection } from '@/components/homeSections/HeroSection';

// tes sections existantes
import { WhenSection } from '@/components/homeSections/WhenSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <WhenSection />
      <ExpertiseSection />

      <FeaturedProjectsSection />

      <FeaturedArticlesSection />

      <ContactSection />
    </>
  );
}
