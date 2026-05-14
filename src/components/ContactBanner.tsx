'use client';

import { Card, CardProps, Stack, Text, Title } from '@mantine/core';

import { CTAButton } from '@/components/CTAButton';
import { WaveBackground } from '@/components/layout/WaveBackground';

type Props = CardProps & {
  title: string;
  description: string;
  cta: string;
};

export function ContactBanner({ title, description, cta, ...others }: Props) {
  return (
    <Card component="section" variant="banner" aria-label={title} {...others}>
      <WaveBackground
        baseImageName="waves-contact-banner"
        backgroundColor={{ light: '#fdeced', dark: '#111237' }}
      />

      <Stack gap="lg" align="flex-start" style={{ zIndex: 1 }}>
        <Title order={2} variant="card">
          {title}
        </Title>
        <Text variant="body">{description}</Text>
        <CTAButton content={cta} href="/contact" />
      </Stack>
    </Card>
  );
}
