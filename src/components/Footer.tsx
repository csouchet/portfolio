'use client';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandTwitter,
  IconArticle,
} from '@tabler/icons-react';

import {
  Container,
  Stack,
  Group,
  Text,
  Anchor,
  Divider,
  Box,
} from '@mantine/core';

import { commonContent } from '@/content/fr/common';
import { siteSharedContent } from '@/content/shared/site';

const links = [
  { name: 'GitHub', url: 'https://github.com/csouchet', icon: IconBrandGithub },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/celinesouchet',
    icon: IconBrandLinkedin,
  },
  { name: 'Dev.to', url: 'https://dev.to/csouchet', icon: IconArticle },
  {
    name: 'Medium',
    url: 'https://medium.com/@csouchet',
    icon: IconBrandMedium,
  },
  {
    name: 'Hackernoon',
    url: 'https://hackernoon.com/u/csouchet',
    icon: IconArticle,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/CelineS',
    icon: IconBrandTwitter,
  },
];

export function Footer() {
  const site = siteSharedContent;
  const content = commonContent.footer;

  return (
    <Box
      component="footer"
      mt="xl"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Texture */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.2,
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Ligne gradient */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(99,102,241,0.35), transparent)',
        }}
      />

      <Container py="xl">
        <Stack gap="xl" align="center">
          {/* Signature */}
          <Stack gap={4} align="center">
            <Text size="sm" fw={600}>
              {site.name}
            </Text>

            <Text size="xs" c="dimmed">
              {content.signature}
            </Text>
          </Stack>

          {/* Links */}
          <Group justify="center" wrap="wrap">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <Text key={link.name} size="sm" c="dimmed">
                  <Anchor
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) icon.style.opacity = '1';

                      e.currentTarget.style.color =
                        'var(--mantine-color-brand-6)';
                    }}
                    onMouseLeave={e => {
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) icon.style.opacity = '0';

                      e.currentTarget.style.color = '';
                    }}
                  >
                    <Icon
                      size={14}
                      stroke={1.5}
                      style={{
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                      }}
                    />

                    {link.name}
                  </Anchor>

                  {index < links.length - 1 && ' · '}
                </Text>
              );
            })}
          </Group>

          <Divider w="60%" />

          <Text size="xs" c="dimmed" ta="center">
            © {new Date().getFullYear()} — {content.copyright}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
