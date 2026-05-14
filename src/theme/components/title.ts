import {
  MantineThemeComponents,
  Title,
  TitleProps,
  CSSProperties,
  rem,
} from '@mantine/core';

export const TitleTheme: MantineThemeComponents['Title'] = Title.extend({
  styles: (theme, props: TitleProps) => {
    const order = props.order ?? 1;

    const bottomMargins: Record<number, string> = {
      1: theme.spacing.xl,
      2: theme.spacing.md,
    };

    const baseStyles: CSSProperties = {
      marginBottom: bottomMargins[order] || undefined,
      color:
        'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
    };

    const getCardFontSize = (headingOrder: number) => {
      switch (headingOrder) {
        case 2:
          return rem(22);
        case 3:
          return rem(18);
        case 4:
          return rem(16);
        default:
          return theme.fontSizes.xl;
      }
    };

    const variants: Record<string, CSSProperties> = {
      default: baseStyles,

      card: {
        fontSize: getCardFontSize(order),
        fontWeight: 650,
        lineHeight: 1.3,
        marginBottom: 0,
        color:
          'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
      },
    };

    return {
      root: variants[props.variant ?? 'default'],
    };
  },
});
