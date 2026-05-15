import { getSiteConfig } from '@/config/site';
import { socialLinks } from '@/data/social';
import { Locale } from '@/types/i18n';

type Props = {
  locale: Locale;
};

export function StructuredData({ locale }: Props) {
  const siteConfig = getSiteConfig(locale);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: 'Senior Software Engineer',
    knowsAbout: [
      'Software Architecture',
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'CI/CD',
      'Platform Engineering',
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
