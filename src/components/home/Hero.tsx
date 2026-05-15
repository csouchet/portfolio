'use client';

import { Box, Container, Stack, Text, Title } from '@mantine/core';

import { WaveBackground } from '@/components/layout/WaveBackground';
import { getContent } from '@/lib/i18n';
import { parseFormattedText } from '@/lib/textFormat';

import { CTAButton } from '../CTAButton';

type Props = {
  content: ReturnType<typeof getContent>['home']['hero'];
};

export function Hero({ content }: Props) {
  return (
    <Box component="section" pos="relative" style={{ overflow: 'hidden' }}>
      <WaveBackground
        baseImageName="waves-hero"
        backgroundSize="55vw auto"
        backgroundPosition="bottom 20px right 0px"
        style={{ zIndex: 1 }}
      />

      <Container pos="relative" style={{ zIndex: 1 }}>
        <Stack variant="header" w={{ base: '100%', md: '55%', lg: '50%' }}>
          <Title order={1}>{parseFormattedText(content.title)}</Title>

          <Text>{content.subtitle}</Text>

          <Box mt="sm">
            <CTAButton content={content.cta} href="/contact" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
