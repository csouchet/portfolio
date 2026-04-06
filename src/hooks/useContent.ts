'use client';

import { useParams } from 'next/navigation';

import { getContent } from '@/lib/i18n';
import { Locale } from '@/types/i18n';

export function useContent() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'fr';
  return getContent(locale);
}
