import Link from 'next/link';

import { Container, Title, Text, Stack, Button } from '@mantine/core';

type Props = {
  title?: string;
  description?: string;
  emoji?: string;
};

export default function ComingSoonPage({
  title = 'Coming soon',
  description = 'Cette page est en cours de développement.',
  emoji = '🚧',
}: Props) {
  return (
    <Container size="sm">
      <Stack align="center" justify="center" h="85vh" gap="lg">
        {/* Emoji */}
        <Text
          size="56px"
          style={{
            lineHeight: 1,
            transform: 'translateY(-10px)',
          }}
        >
          {emoji}
        </Text>

        {/* Title */}
        <Title
          order={1}
          ta="center"
          style={{
            letterSpacing: '-1px',
          }}
        >
          {title}
        </Title>

        {/* Description */}
        <Text c="dimmed" ta="center" maw={420} size="md">
          {description}
        </Text>

        {/* CTA */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button radius="xl" variant="light">
            ← Retour à l’accueil
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
