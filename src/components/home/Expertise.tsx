'use client';

import { Grid } from '@mantine/core';

import { CustomList } from '@/components/layout/CustomList';
import { Section } from '@/components/layout/Section';
import { getContent } from '@/lib/i18n';

type Props = {
  content: ReturnType<typeof getContent>['home']['expertise'];
};

export function Expertise({ content }: Props) {
  return (
    <Section title={content.title} description={content.intro}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <CustomList items={content.items} />
        </Grid.Col>
      </Grid>
    </Section>
  );
}
