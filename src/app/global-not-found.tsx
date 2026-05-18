import { Plus_Jakarta_Sans } from 'next/font/google';
import { headers } from 'next/headers';

import { Box, ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import '@mantine/core/styles.css';

import NotFound from '@/app/[locale]/not-found';
import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { ResetLayoutOnNavigation } from '@/components/not-found/ResetLayoutOnNavigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getSiteConfig } from '@/config/site';
import { Locale, LOCALES } from '@/types/i18n';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default async function GlobalNotFound() {
  const headersList = await headers();
  const rawLocale = headersList.get('x-locale') as Locale;
  const locale = LOCALES.includes(rawLocale) ? rawLocale : 'fr';
  const siteConfig = getSiteConfig(locale);

  return (
    <html lang={locale} className={jakarta.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <title>{`404 | ${siteConfig.name}`}</title>
      </head>
      <body
        style={{
          backgroundColor: 'var(--mantine-color-body)',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <ThemeProvider>
          <ResetLayoutOnNavigation />

          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Navbar />

            <Box component="main" style={{ flexGrow: 1 }}>
              <NotFound />
            </Box>

            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
