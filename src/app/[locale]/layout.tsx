import { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import { LOCALES, Locale } from '@/types/i18n';

type Props = {
  children: ReactNode;
  params: { locale: Locale };
};

export default function LocaleLayout({ children, params }: Props) {
  if (!LOCALES.includes(params.locale)) {
    notFound();
  }

  return <>{children}</>;
}
