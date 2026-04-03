'use client';

import { useState } from 'react';

import { IconCheck, IconAlertCircle } from '@tabler/icons-react';

import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Paper,
  Title,
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

  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    setLoading(true);
    setStatus('idle');

    try {
      // even in a mock, we “use” values
      console.log(values);

      // Replace this with the endpoint (Formspree / EmailJS / Netlify)
      await new Promise(resolve => setTimeout(resolve, 1200));

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
      radius="md"
      p="lg"
      maw={480}
      mx="auto"
      component="section"
    >
      <Stack gap="md">
        {/* HEADER */}
        <Stack gap={4}>
          <Title order={2}>Envoyer un message</Title>
          <Text size="sm" c="dimmed">
            Une idée, une mission ou juste envie d’échanger ?
          </Text>
        </Stack>

        {/* FEEDBACK */}
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

        {/* FORM */}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="sm">
            <TextInput
              label="Nom"
              placeholder="Ton nom"
              required
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Email"
              placeholder="ton@email.com"
              required
              {...form.getInputProps('email')}
            />

            <Textarea
              label="Message"
              placeholder="Ton message..."
              minRows={4}
              autosize
              required
              {...form.getInputProps('message')}
            />

            <Button
              type="submit"
              loading={loading}
              radius="md"
              fullWidth
              mt="sm"
            >
              Envoyer
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}
