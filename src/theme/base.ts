import { createTheme } from '@mantine/core';

import { components } from '@/theme/components';
import { border } from '@/theme/tokens/border';
import { businessColors } from '@/theme/tokens/business';
import { radius } from '@/theme/tokens/radius';
import { shadows } from '@/theme/tokens/shadows';
import { spacing } from '@/theme/tokens/spacing';
import { surface } from '@/theme/tokens/surface';
import { typography } from '@/theme/tokens/typography';

import * as customColors from './tokens/colors';
import { customVariantColorResolver } from './variantResolver';

export const baseTheme = createTheme({
  cursorType: 'pointer',

  /**
   * --------------------------------------------------------
   * Brand system
   * --------------------------------------------------------
   */
  primaryColor: 'brand',
  primaryShade: 6,

  black: '#0F172A',

  /**
   * --------------------------------------------------------
   * Color palettes
   * --------------------------------------------------------
   */
  colors: {
    dark: customColors.darkNeutral,

    brandLight: customColors.brandLight,
    brandDark: customColors.brandDark,
    brand: customColors.brand,

    sageLight: customColors.sageLight,
    sageDark: customColors.sageDark,
    sage: customColors.sage,

    violetLight: customColors.violetLight,
    violetDark: customColors.violetDark,
    violet: customColors.violet,

    orangeLight: customColors.orangeLight,
    orangeDark: customColors.orangeDark,
    orange: customColors.orange,

    pinkLight: customColors.pinkLight,
    pinkDark: customColors.pinkDark,
    pink: customColors.pink,

    blueLight: customColors.blueLight,
    blueDark: customColors.blueDark,
    blue: customColors.blue,
  },

  /**
   * --------------------------------------------------------
   * Light / dark scheme defaults
   * --------------------------------------------------------
   */
  defaultRadius: 'sm',

  /**
   * --------------------------------------------------------
   * Variants resolver
   * --------------------------------------------------------
   */
  variantColorResolver: customVariantColorResolver,

  /**
   * --------------------------------------------------------
   * Typography
   * --------------------------------------------------------
   */
  ...typography,

  /**
   * --------------------------------------------------------
   * Gradient system
   * --------------------------------------------------------
   */
  defaultGradient: {
    from: 'brand',
    to: 'pink',
    deg: 135,
  },

  /**
   * --------------------------------------------------------
   * Core tokens
   * --------------------------------------------------------
   */
  radius,
  spacing,
  shadows,

  /**
   * --------------------------------------------------------
   * Custom tokens
   * --------------------------------------------------------
   */
  other: {
    surface,
    border,

    business: businessColors,
  },

  /**
   * --------------------------------------------------------
   * Components theme overrides
   * --------------------------------------------------------
   */
  components,
});
