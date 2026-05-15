import { getSiteConfig } from '@/config/site';
import { socialLinks } from '@/data/social';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

type Props = {
  locale: Locale;
};

export function StructuredData({ locale }: Props) {
  const siteConfig = getSiteConfig(locale);
  const { home } = getContent(locale);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: new URL(siteConfig.ogImage, siteConfig.url).href,
    jobTitle: home.hero.badge,
    knowsAbout: [
      'Software Architecture',
      'Systems Design',
      'Java',
      'Spring',
      'React',
      'TypeScript',
      'CI/CD',
      'Platform Engineering',
      'Fullstack Development',
    ],
    sameAs: socialLinks.map(link => link.url),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    description: siteConfig.description,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
