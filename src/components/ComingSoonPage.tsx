import { Container, Title, Text, Stack, Button } from '@mantine/core';
import Link from 'next/link';

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
      <Stack align="center" justify="center" h="80vh" gap="md">
        <Text size="48px">{emoji}</Text>

        <Title order={1} ta="center" style={{ letterSpacing: '-0.5px' }}>
          {title}
        </Title>

        <Text c="dimmed" ta="center" maw={400}>
          {description}
        </Text>

        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button variant="subtle" mt="sm">
            Retour à l’accueil
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
