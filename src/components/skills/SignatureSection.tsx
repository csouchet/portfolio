'use client';

import Link from 'next/link';

import { IconPencil, IconArrowRight } from '@tabler/icons-react';

import { Grid, Stack, Text, Title, Button } from '@mantine/core';

import { Section } from '@/components/layout/Section';
import { SpotlightGrid } from '@/components/layout/SpotlightGrid';
import { getContent } from '@/lib/i18n';
import { parseFormattedText } from '@/lib/textFormat';

type Props = {
  content: ReturnType<typeof getContent>['skills']['signature'];
};

export function SignatureSection({ content }: Props) {
  return (
    <Section title={content.title} icon={IconPencil}>
      <Grid gap="xl" align="center">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack gap="md" align="flex-start">
            <Title order={3} style={{ whiteSpace: 'pre-line' }}>
              {parseFormattedText(content.role)}
            </Title>
            <Text>{content.description}</Text>

            <Button
              component={Link}
              href="/about"
              size="sm"
              variant="outline"
              rightSection={<IconArrowRight size={18} />}
            >
              {content.cta}
            </Button>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 8 }}>
          <SpotlightGrid
            items={content.hobbies}
            category="hobby"
            spotlightProps={{ withCard: true }}
          />
        </Grid.Col>
      </Grid>
    </Section>
  );
}
