'use client';

import { useState, useCallback } from 'react';

import {
  IconCheck,
  IconAlertCircle,
  IconArrowRight,
  IconMail,
  IconLock,
} from '@tabler/icons-react';

import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Alert,
  Group,
  Text,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';

import { SectionCard } from '@/components/layout/SectionCard';

type ContactFormContent = {
  fields: { name: string; email: string; message: string; submit: string };
  placeholders: { name: string; email: string; message: string };
  feedback: { success: string; error: string };
  footer: string;
};

type Props = {
  title: string;
  content: ContactFormContent;
};

export function ContactForm({ title, content }: Props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formStartTimestamp, setFormStartTimestamp] = useState(() =>
    Date.now(),
  );

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      company: '', // honeypot
      formStart: formStartTimestamp, // anti-bot timing
    },

    validate: {
      name: value => (value.trim().length < 2 ? 'Nom trop court' : null),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
      message: value =>
        value.trim().length < 10 ? 'Message trop court' : null,
    },
  });

  const resetForm = useCallback(() => {
    const now = Date.now();
    setFormStartTimestamp(now);
    form.setValues({
      name: '',
      email: '',
      message: '',
      company: '',
      formStart: now,
    });
  }, [form]);

  const handleSubmit = useCallback(
    async (values: typeof form.values) => {
      setLoading(true);
      setStatus('idle');

      try {
        const now = Date.now();

        // 🛡️ Anti-spam logic
        if (values.company || now - values.formStart < 3000) {
          await new Promise(resolve => setTimeout(resolve, 300));
          setStatus('success');
          resetForm();
          return;
        }

        // 🚀 Send to Netlify Forms API
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            name: values.name,
            email: values.email,
            message: values.message,
            company: values.company,
          }).toString(),
        });

        if (!response.ok) {
          console.error('Network response was not ok');
          setStatus('error');
          setLoading(false);
          return;
        }

        setStatus('success');
        resetForm();
      } catch (error) {
        console.error('Submission error:', error);
        setStatus('error');
      } finally {
        setLoading(false);
      }
    },
    [form, resetForm],
  );

  return (
    <SectionCard title={title} icon={IconMail}>
      <Stack gap="md">
        {status === 'success' && (
          <Alert
            icon={<IconCheck size={rem(18)} />}
            color="green"
            variant="light"
          >
            {content.feedback.success}
          </Alert>
        )}

        {status === 'error' && (
          <Alert
            icon={<IconAlertCircle size={rem(18)} />}
            color="red"
            variant="light"
          >
            {content.feedback.error}
          </Alert>
        )}

        <form
          onSubmit={form.onSubmit(handleSubmit)}
          name="contact"
          method="POST"
        >
          <Stack gap="md">
            {/* 🛡️ Honeypot invisible */}
            <TextInput
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              {...form.getInputProps('company')}
            />

            <input type="hidden" value={form.values.formStart} readOnly />

            <TextInput
              label={content.fields.name}
              placeholder={content.placeholders.name}
              required
              {...form.getInputProps('name')}
            />

            <TextInput
              label={content.fields.email}
              placeholder={content.placeholders.email}
              required
              {...form.getInputProps('email')}
            />

            <Textarea
              label={content.fields.message}
              placeholder={content.placeholders.message}
              autosize
              required
              {...form.getInputProps('message')}
            />

            <Stack gap="xs" mt="sm">
              <Button
                type="submit"
                loading={loading}
                rightSection={<IconArrowRight size={rem(18)} />}
              >
                {content.fields.submit}
              </Button>

              <Group gap={rem(6)} wrap="nowrap" mt={rem(4)}>
                <IconLock size={rem(14)} color="dimmed" />
                <Text variant="metadata" c="dimmed">
                  {content.footer}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </SectionCard>
  );
}
