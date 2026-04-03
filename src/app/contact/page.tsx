'use client';

import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

import { Container, Stack, Title, Text, Group, Button } from '@mantine/core';

import { BaseCard } from '@/components/cards/BaseCard';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="2.5rem">
        {/* HEADER */}
        <Stack gap="xs">
          <Title order={1}>Contact</Title>

          <Text c="dimmed" maw="65ch">
            Retrouvez-moi sur LinkedIn ou GitHub pour échanger autour d’un
            projet, d’une mission ou simplement discuter tech.
          </Text>
        </Stack>

        {/* CONTACT CARDS */}
        <Stack gap="md">
          {/* LINKEDIN */}
          <BaseCard>
            <Group justify="space-between" wrap="nowrap">
              <Group gap="sm">
                <IconBrandLinkedin size={20} />
                <Text fw={500}>LinkedIn</Text>
              </Group>

              <Button
                component="a"
                href={siteConfig.links.linkedin}
                target="_blank"
                variant="light"
              >
                Voir le profil
              </Button>
            </Group>
          </BaseCard>

          {/* GITHUB */}
          <BaseCard>
            <Group justify="space-between" wrap="nowrap">
              <Group gap="sm">
                <IconBrandGithub size={20} />
                <Text fw={500}>GitHub</Text>
              </Group>

              <Button
                component="a"
                href={siteConfig.links.github}
                target="_blank"
                variant="light"
              >
                Voir les projets
              </Button>
            </Group>
          </BaseCard>
        </Stack>
      </Stack>
    </Container>
  );
}
