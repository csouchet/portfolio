'use client';

import React, { PropsWithChildren } from 'react';

import { Card, Stack, Title } from '@mantine/core';

type Props = {
  title: string;
};

export function AsideCard({ title, children }: PropsWithChildren<Props>) {
  return (
    <Card>
      <Stack gap="sm">
        <Title order={3} fz="md" lh={1.4} mb={0}>
          {title}
        </Title>
        {children}
      </Stack>
    </Card>
  );
}
