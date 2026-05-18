'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

export function ResetLayoutOnNavigation() {
  const pathname = usePathname();
  const initialPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      window.location.reload();
    }
  }, [pathname]);

  return null;
}
