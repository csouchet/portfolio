import { ColorSchemeMapping } from '@/types/color';

export const businessColors = {
  brands: {
    GitHub: { light: 'black', dark: 'dark.1' },
    LinkedIn: { light: 'blue.7', dark: 'blue.3' },
    'Dev.to': { light: 'black', dark: 'dark.1' },
    Medium: { light: 'black', dark: 'dark.1' },
    Hackernoon: { light: 'green.9', dark: 'green.3' },
    Twitter: { light: 'blue.7', dark: 'blue.3' },
    default: { light: 'black', dark: 'dark.1' },
    Upwork: { light: 'green.9', dark: 'green.3' },
    Malt: { light: 'brand.6', dark: 'brand.6' },
    Fiverr: { light: 'black', dark: 'dark.1' },
  } satisfies Record<string, ColorSchemeMapping>,
};
