'use client';

import { IconBuildingSkyscraper } from '@tabler/icons-react';

import {
  Timeline,
  Text,
  ThemeIcon,
  List,
  Card,
  rem,
  Anchor,
} from '@mantine/core';

import { Section } from '@/components/layout/Section';
import { COMPANY_URLS } from '@/data/companies';
import { getContent } from '@/lib/i18n';
import { accentColors } from '@/theme/utils/colors';

type Props = {
  content: ReturnType<typeof getContent>['about']['journey'];
};

export function AboutJourney({ content }: Props) {
  return (
    <Section title={content.title} description={content.description}>
      <Card variant="section">
        <Timeline
          active={10}
          bulletSize={rem(44)}
          lineWidth={2}
          color="light-dark(gray.2, dark.4)"
        >
          {content.experiences.map((exp, index) => {
            const color = accentColors[index % accentColors.length];
            const companyUrl = exp.company
              ? COMPANY_URLS[exp.company]
              : undefined;

            return (
              <Timeline.Item
                key={index}
                bullet={
                  <ThemeIcon
                    size={rem(44)}
                    radius="xl"
                    variant="light"
                    color={color}
                  >
                    <IconBuildingSkyscraper size={25} stroke={2} />
                  </ThemeIcon>
                }
                lineVariant="solid"
                color={color}
              >
                <Text
                  fz="sm"
                  fw={600}
                  c={`light-dark(var(--mantine-color-${color}Light-9), var(--mantine-color-${color}Dark-0))`}
                  mb={rem(4)}
                >
                  {exp.period}
                </Text>

                <Text variant="emphasis" mb="xs">
                  {exp.company && (
                    <>
                      {companyUrl ? (
                        <Anchor
                          href={companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          c="inherit"
                          underline="hover"
                          inherit
                          style={{
                            verticalAlign: 'baseline',
                            display: 'inline',
                          }}
                        >
                          {exp.company}
                        </Anchor>
                      ) : (
                        exp.company
                      )}
                      {' — '}
                    </>
                  )}
                  {exp.role}
                </Text>

                {exp.description && (
                  <Text size="sm" mb={exp.tasks ? 'xs' : 0}>
                    {exp.description}
                  </Text>
                )}

                {exp.tasks && exp.tasks.length > 0 && (
                  <List spacing={rem(4)} size="sm">
                    {exp.tasks.map((task, idx) => (
                      <List.Item key={idx}>{task}</List.Item>
                    ))}
                  </List>
                )}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Card>
    </Section>
  );
}
