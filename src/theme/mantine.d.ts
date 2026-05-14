import '@mantine/core';

declare module '@mantine/core' {
  export interface CardProps {
    variant?: CardVariant | 'item' | 'section' | 'banner';
  }

  export interface PaperProps {
    variant?: PaperVariant | 'summary';
  }

  export interface StackProps {
    variant?: StackVariant | 'page' | 'header' | 'section';
  }

  export interface TextProps {
    variant?:
      | TextVariant
      | 'overline'
      | 'emphasis'
      | 'reading'
      | 'metadata'
      | 'body'
      | 'tertiary'
      | 'caption';
  }

  export interface ThemeIconProps {
    variant?: ThemeIconVariant | 'feature';
  }

  export interface TitleProps {
    variant?: TitleVariant | 'card';
  }

  export interface Shadows {
    card: string;
    hover: string;
  }

  export interface MantineThemeOther {
    surface: {
      subtle: string;
      elevated: string;
    };

    border: {
      default: string;
      subtle: string;
    };

    gradients: {
      divider: string;
    };

    business: typeof import('./tokens/business').businessColors;
  }
}
