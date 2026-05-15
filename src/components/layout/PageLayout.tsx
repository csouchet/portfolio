'use client';
import React, { ElementType, PropsWithChildren } from 'react';

import { Container, Stack } from '@mantine/core';

import { PageHeader } from './PageHeader';

type Props = PropsWithChildren<{
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: ElementType;
  description?: string;
  headerRightSection?: React.ReactNode;
  headerChildren?: React.ReactNode;
  headerFooter?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  withWaves?: boolean;
}>;

export function PageLayout({
  title,
  subtitle,
  badge,
  badgeIcon,
  description,
  headerRightSection,
  headerChildren,
  headerFooter,
  breadcrumbs,
  children,
  withWaves,
}: Props) {
  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
        badge={badge}
        badgeIcon={badgeIcon}
        description={description}
        rightSection={headerRightSection}
        breadcrumbs={breadcrumbs}
        withWaves={withWaves}
        headerFooter={headerFooter}
      >
        {headerChildren}
      </PageHeader>

      <Container w="100%">
        <Stack variant="page">{children}</Stack>
      </Container>
    </>
  );
}
