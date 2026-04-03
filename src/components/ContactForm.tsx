'use client';

import { useState } from 'react';

import { IconCheck, IconAlertCircle } from '@tabler/icons-react';

import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Paper,
  Text,
  Alert,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      name: value => (value.trim().length < 2 ? 'Nom trop court' : null),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
      message: value =>
        value.trim().length < 10 ? 'Message trop court' : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setStatus('idle');

    try {
      // even in a mock, we “use” values
      console.log(values);

      // Replace this with the endpoint (Formspree / EmailJS / Netlify)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      withBorder
      radius="lg"
      p="md"
      w="100%"
      style={{ backdropFilter: 'blur(6px)' }}
    >
      <Stack gap="md">
        <Text size="sm" c="dimmed">
          Une idée, une mission ou juste envie d’échanger ensemble ?
        </Text>

        {status === 'success' && (
          <Alert icon={<IconCheck size={16} />} color="green" radius="md">
            Message envoyé avec succès ✨
          </Alert>
        )}

        {status === 'error' && (
          <Alert icon={<IconAlertCircle size={16} />} color="red" radius="md">
            Une erreur est survenue. Réessaie.
          </Alert>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="sm">
            <TextInput
              label="Nom"
              placeholder="Ton nom"
              required
              radius="md"
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Email"
              placeholder="ton@email.com"
              required
              radius="md"
              {...form.getInputProps('email')}
            />

            <Textarea
              label="Message"
              placeholder="Ton message..."
              minRows={4}
              autosize
              required
              radius="md"
              {...form.getInputProps('message')}
            />

            <Button
              type="submit"
              loading={loading}
              radius="xl"
              fullWidth
              mt="sm"
              variant="gradient"
              gradient={{ from: 'pink', to: 'grape', deg: 135 }}
            >
              Envoyer ✨
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}
