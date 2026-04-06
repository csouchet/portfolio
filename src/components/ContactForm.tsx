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

type ContactFormContent = {
  description: string;
  fields: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  feedback: {
    success: string;
    error: string;
  };
};

type Props = {
  content: ContactFormContent;
};

export function ContactForm({ content }: Props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      company: '', // honeypot
      formStart: Date.now(), // anti-bot timing
    },

    validate: {
      name: value => (value.trim().length < 2 ? 'Nom trop court' : null),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
      message: value =>
        value.trim().length < 10 ? 'Message trop court' : null,
    },
  });

  const resetForm = () => {
    form.setValues({
      name: '',
      email: '',
      message: '',
      company: '',
      formStart: Date.now(),
    });
  };

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setStatus('idle');

    try {
      // 🛡️ Anti-spam

      // honeypot rempli → bot
      if (values.company) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setStatus('success');
        resetForm();
        return;
      }

      // soumission trop rapide → bot
      const now = Date.now();
      if (now - values.formStart < 3000) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setStatus('success');
        resetForm();
        return;
      }

      // ✅ traitement normal (à remplacer plus tard)
      console.log(values);

      // Replace this with the endpoint (Formspree / EmailJS / Netlify)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      resetForm();
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    input: {
      transition: 'all 0.2s ease',
      '&:focus': {
        boxShadow: '0 0 0 1px var(--mantine-color-pink-5)',
      },
    },
  };

  return (
    <Paper
      withBorder
      radius="lg"
      p="md"
      w="100%"
      style={{
        backdropFilter: 'blur(6px)',
        transition: 'all 0.2s ease',
      }}
      styles={{
        root: {
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: 'var(--mantine-color-pink-5)',
          },
        },
      }}
    >
      <Stack gap="md">
        <Text size="sm" c="dimmed">
          {content.description}
        </Text>

        {status === 'success' && (
          <Alert icon={<IconCheck size={16} />} color="green" radius="md">
            {content.feedback.success}
          </Alert>
        )}

        {status === 'error' && (
          <Alert icon={<IconAlertCircle size={16} />} color="red" radius="md">
            {content.feedback.error}
          </Alert>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="sm">
            {/* 🛡️ Honeypot invisible */}
            <TextInput
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              {...form.getInputProps('company')}
            />

            {/* ⏱ Timestamp */}
            <input type="hidden" value={form.values.formStart} readOnly />

            <TextInput
              label={content.fields.name}
              placeholder={content.fields.name}
              required
              radius="md"
              styles={inputStyles}
              {...form.getInputProps('name')}
            />

            <TextInput
              label={content.fields.email}
              placeholder={content.fields.email}
              required
              radius="md"
              styles={inputStyles}
              {...form.getInputProps('email')}
            />

            <Textarea
              label={content.fields.message}
              placeholder={content.fields.message}
              minRows={4}
              autosize
              required
              radius="md"
              styles={inputStyles}
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
              style={{
                boxShadow: '0 0 20px rgba(236, 72, 153, 0.25)',
              }}
            >
              {content.fields.submit}
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}
