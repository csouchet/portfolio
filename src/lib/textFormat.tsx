import { ReactNode } from 'react';

/**
 * Parse b, i, et h (highlight).
 */
export function parseFormattedText(text: string): ReactNode[] {
  // Regex mise à jour pour inclure <h>...</h>
  const parts = text.split(/(<b>.*?<\/b>|<i>.*?<\/i>|<h>.*?<\/h>)/g);

  return parts.map((part, index) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return <b key={index}>{part.slice(3, -4)}</b>;
    }

    if (part.startsWith('<i>') && part.endsWith('</i>')) {
      return <i key={index}>{part.slice(3, -4)}</i>;
    }

    // Gestion de la mise en avant (Highlight)
    if (part.startsWith('<h>') && part.endsWith('</h>')) {
      return (
        <span key={index} style={{ color: 'var(--mantine-color-brand-6)' }}>
          {part.slice(3, -4)}
        </span>
      );
    }

    if (!part) return null;

    return <span key={index}>{part}</span>;
  });
}
