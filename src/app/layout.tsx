// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import React from 'react';

import { Plus_Jakarta_Sans } from 'next/font/google';
import { headers } from 'next/headers';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import { Locale } from '@/types/i18n';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = (headersList.get('x-locale') ?? 'fr') as Locale;

  return (
    <html lang={locale} className={jakarta.variable} {...mantineHtmlProps}>
      <head suppressHydrationWarning>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        style={{
          backgroundColor: 'var(--mantine-color-body)',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {children}
      </body>
    </html>
  );
}
