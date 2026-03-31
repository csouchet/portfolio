'use client';

import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Box,
} from '@mantine/core';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <Box
      component="section"
      style={theme => ({
        paddingBlock: theme.other.layout.sectionSpacing,

        background: `
          radial-gradient(
            circle at 20% 0%,
            rgba(99,102,241,0.06),
            transparent 50%
          ),
          linear-gradient(
            to bottom,
            transparent,
            var(--mantine-color-body)
          )
        `,

        borderTop: `1px solid var(--mantine-color-default-border)`,
      })}
    >
      <Container>
        <Stack gap="xl" mt="md">
          {/* Header */}
          <Stack gap={6}>
            <Title order={2}>Projets sélectionnés</Title>

            <Text
              c="dimmed"
              style={theme => ({
                maxWidth: theme.other.layout.textMaxWidth,
              })}
            >
              Une sélection de projets sur lesquels j’ai travaillé, avec un
              focus sur la performance, la scalabilité et l’expérience
              développeur.
            </Text>
          </Stack>

          {/* Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>

          {/* CTA */}
          <Button
            component="a"
            href="/projects"
            variant="subtle"
            size="md"
            style={{ alignSelf: 'flex-start' }}
            rightSection="→"
          >
            Voir tous les projets
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
