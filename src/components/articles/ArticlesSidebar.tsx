'use client';

import { IconArrowUpRight } from '@tabler/icons-react';

import { ActionIcon, Group, Stack, Text, TextInput, rem } from '@mantine/core';

import { CTAButton } from '@/components/CTAButton';
import { AsideCard } from '@/components/layout/AsideCard'; // <-- Import du nouveau composant
import { SocialLinks } from '@/components/SocialLinks';
import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

type Props = {
  categoryCounts: [string, number][];
  locale: Locale;
  content: {
    authorIntro: ReturnType<typeof getContent>['articles']['authorIntro'];
    topics: ReturnType<typeof getContent>['articles']['topics'];
    newsletter: ReturnType<typeof getContent>['articles']['newsletter'];
    social: ReturnType<typeof getContent>['articles']['social'];
  };
};

export function ArticlesSidebar({ categoryCounts, locale, content }: Props) {
  const ENABLE_NEWSLETTER = false;

  return (
    <Stack gap="sm" pos="sticky" top={rem(100)}>
      <AsideCard title={content.authorIntro.title}>
        <Text variant="metadata">{content.authorIntro.description}</Text>
        <CTAButton
          content={content.authorIntro.cta}
          href={`/${locale}/about`}
          variant="outline"
          size="compact-sm"
        />
      </AsideCard>

      <AsideCard title={content.topics.title}>
        <Stack gap="xs">
          {categoryCounts.map(([name, count]) => (
            <Group key={name} justify="space-between" wrap="nowrap">
              <Text variant="metadata">{name}</Text>
              <Text variant="overline">{count}</Text>
            </Group>
          ))}
        </Stack>
      </AsideCard>

      {ENABLE_NEWSLETTER && (
        <AsideCard title={content.newsletter.title}>
          <Text variant="metadata">{content.newsletter.description}</Text>
          <TextInput
            placeholder={content.newsletter.placeholder}
            rightSection={
              <ActionIcon>
                <IconArrowUpRight size={rem(18)} />
              </ActionIcon>
            }
          />
          <Text variant="caption" style={{ fontStyle: 'italic' }}>
            {content.newsletter.disclaimer}
          </Text>
        </AsideCard>
      )}

      <AsideCard title={content.social.title}>
        <SocialLinks isSingleCol withColoredIcon />
      </AsideCard>
    </Stack>
  );
}
