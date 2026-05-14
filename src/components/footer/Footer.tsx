'use client';

import React from 'react';

import { Box, Container, Grid, rem, Text } from '@mantine/core';

import { SocialLinks } from '@/components/SocialLinks';
import { getSiteConfig } from '@/config/site';
import { useContent } from '@/hooks/useContent';

import { FooterLogo } from './FooterLogo';
import { NavLinks } from './NavLinks';

export function Footer() {
  const { locale, common } = useContent();
  const siteConfig = getSiteConfig(locale);

  const currentYear = new Date().toLocaleDateString(
    locale === 'fr' ? 'fr-FR' : 'en-US',
    { year: 'numeric' },
  );

  return (
    <Box
      component="footer"
      style={{
        borderTop:
          '1px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-7))',
      }}
    >
      <Container size="lg" pt={rem(48)} pb="lg">
        <Grid gap="xxl" justify="center">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <FooterLogo
              name={siteConfig.name}
              signature={common.footer.signature}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <NavLinks locale={locale} labels={common.navigation.labels} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <SocialLinks />
          </Grid.Col>
        </Grid>

        <Text variant="caption" ta="center" mt="xxl">
          © {currentYear} · {siteConfig.name} · {common.footer.copyright}
        </Text>
      </Container>
    </Box>
  );
}
