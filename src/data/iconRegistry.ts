import {
  IconRocket,
  IconBrain,
  IconSettings,
  IconLayersIntersect,
  IconCode,
  IconRefresh,
  IconScale,
  IconUsers,
  IconChartPie,
  IconUsersGroup,
  IconShieldCheck,
  IconMountain,
  IconBulb,
  IconBolt,
  IconSend,
  IconSparkles,
  IconColorSwatch,
  IconYoga,
  IconGymnastics,
} from '@tabler/icons-react';

export const GLOBAL_ICON_REGISTRY = {
  approch: {
    decision: IconRocket,
    learning: IconBrain,
    quality: IconSettings,
  },
  philosophy: {
    layers: IconLayersIntersect,
    code: IconCode,
    rocket: IconRocket,
    balance: IconScale,
    refresh: IconRefresh,
    users: IconUsers,
  },
  soft: {
    rigor: IconChartPie,
    analysis: IconUsersGroup,
    team: IconShieldCheck,
    perseverance: IconMountain,
    autonomy: IconBulb,
    creativity: IconBolt,
  },
  hobby: {
    pottery: IconColorSwatch,
    yoga: IconYoga,
    pole: IconGymnastics,
  },
  feature: {
    speed: IconSend,
    secure: IconShieldCheck,
    quality: IconSparkles,
  },
} as const;

export type IconCategory = keyof typeof GLOBAL_ICON_REGISTRY;
export type IconId<T extends IconCategory> =
  keyof (typeof GLOBAL_ICON_REGISTRY)[T];
