import { MantineColorsTuple, virtualColor } from '@mantine/core';

/* =========================================================
   🔴 BRAND — Coral / Primary
========================================================= */

export const brandLight: MantineColorsTuple = [
  '#FFF7F7',
  '#FEF3F4', // light variant background
  '#FFE3E4', // subtle & light hover
  '#FFCBCD',
  '#FFADB0',
  '#FF8E92',
  '#F37576', // primary - filled background, outline stroke & text
  '#DD5E61', // filled hover
  '#B8484B',
  '#8E3438', // subtle & light text
];

export const brandDark: MantineColorsTuple = [
  '#FFD9D8',
  '#FFC2C0',
  '#F7A6A4',
  '#EE8886',
  '#D96E6D', // outline stroke & text
  '#F07E7B',
  '#f07372', // filled background
  '#FF8C89', // filled hover
  '#5A2D34',
  '#242034', // light variant background
];

export const brand = virtualColor({
  name: 'brand',
  light: 'brandLight',
  dark: 'brandDark',
});

/* =========================================================
   🌿 SAGE — Mint / Teal
========================================================= */

export const sageLight: MantineColorsTuple = [
  '#F8FCFB',
  '#F0F7F5', // light variant background
  '#DDF2EC', // subtle & light hover
  '#CBEAE0',
  '#B5E0D3',
  '#8FD2C0',
  '#6FC5AF', // filled background, outline stroke & text
  '#59B59D', // filled hover
  '#4EB097',
  '#4ebda5', // subtle & light text
];

export const sageDark: MantineColorsTuple = [
  '#95e3cf', // subtle & light text
  '#83D5C0',
  '#70C5AF',
  '#5CB29C',
  '#41666E', // outline stroke & text
  '#4E7C80',
  '#5FA3A0', // filled background
  '#74BBB4', // filled hover
  '#385A5B',
  '#222c3b', // light variant background
];

export const sage = virtualColor({
  name: 'sage',
  light: 'sageLight',
  dark: 'sageDark',
});

/* =========================================================
   🔮 VIOLET — Purple Accent
========================================================= */

export const violetLight: MantineColorsTuple = [
  '#FBFAFF',
  '#F6F4FF', // light variant background
  '#D9D8FF', // subtle & light hover
  '#C7C5FF',
  '#B7B3FF',
  '#A8A5FF',
  '#9895FF', // filled background, outline stroke & text
  '#8D88FF', // filled hover
  '#7D73FF',
  '#A5A7FF', // subtle & light text
];

export const violetDark: MantineColorsTuple = [
  '#8568ef', // subtle & light text
  '#7658E2',
  '#6748D2',
  '#5B3FC0',
  '#6057B8', // outline stroke & text
  '#7367D3',
  '#8B7AF2', // filled background
  '#A191F7', // filled hover
  '#433A7A',
  '#202148', // light variant background
];

export const violet = virtualColor({
  name: 'violet',
  light: 'violetLight',
  dark: 'violetDark',
});

/* =========================================================
   🔵 BLUE — Soft Indigo
========================================================= */

export const blueLight: MantineColorsTuple = [
  '#FAFBFF',
  '#F4F6FE', // light variant background
  '#E7ECFD', // subtle & light hover
  '#D5DEFC',
  '#C0CDFB',
  '#AAB9F9',
  '#94A6F8', // filled background, outline stroke & text
  '#7F92F5', // filled hover
  '#6C7EEF',
  '#8ba1fd', // subtle & light text
];

export const blueDark: MantineColorsTuple = [
  '#9eb0fa', // subtle & light text
  '#8EA1EE',
  '#7B90DE',
  '#677DCA',
  '#56699B', // outline stroke & text
  '#6481B7',
  '#7395D6', // filled background
  '#8AA9EC', // filled hover
  '#3D4F79',
  '#232844', // light variant background
];

export const blue = virtualColor({
  name: 'blue',
  light: 'blueLight',
  dark: 'blueDark',
});

/* =========================================================
   🍊 ORANGE — Warm Sand
========================================================= */

export const orangeLight: MantineColorsTuple = [
  '#FFF9F2',
  '#FEF7EE', // light variant background
  '#FEEFD9', // subtle & light hover
  '#FDE4BE',
  '#FCD69F',
  '#F8C37D',
  '#F3AF61', // filled background, outline stroke & text
  '#E09848', // filled hover
  '#C98130',
  '#f0b05d', // subtle & light text
];

export const orangeDark: MantineColorsTuple = [
  '#ebcc8d', // subtle & light text
  '#DDBD7F',
  '#CDAE71',
  '#BB9C62',
  '#706B6B', // outline stroke & text
  '#96846F',
  '#B49776', // filled background
  '#CCAE86', // filled hover
  '#564B42',
  '#292832', // light variant background
];

export const orange = virtualColor({
  name: 'orange',
  light: 'orangeLight',
  dark: 'orangeDark',
});

/* =========================================================
   🌸 PINK — Soft Rose
========================================================= */

export const pinkLight: MantineColorsTuple = [
  '#FFF9FB',
  '#FFF1F5', // light variant background
  '#FFE0EA', // subtle & light hover
  '#FFCFE0',
  '#FFBDD4',
  '#FFA7C6',
  '#F78DB3', // filled background, outline stroke & text
  '#E06F98', // filled hover
  '#C8567F',
  '#C97BA0', // subtle & light text
];

export const pinkDark: MantineColorsTuple = [
  '#E18DAF', // subtle & light text
  '#D57FA1',
  '#C86F92',
  '#B65E81',
  '#915462', // outline stroke & text
  '#A76576',
  '#BE758A', // filled background
  '#D58EA2', // filled hover
  '#603548',
  '#35202C', // light variant background
];

export const pink = virtualColor({
  name: 'pink',
  light: 'pinkLight',
  dark: 'pinkDark',
});

/* =========================================================
   🌑 DARK NEUTRAL
========================================================= */

export const darkNeutral: MantineColorsTuple = [
  '#F6EFE9',
  '#E5E7EB',
  '#C7CDD8',
  '#A4ADBC',
  '#7F899B',
  '#556070',
  '#2A3545',
  '#1E293B',
  '#17202B',
  '#0F1722',
];
