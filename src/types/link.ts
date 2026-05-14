import { Icon } from '@tabler/icons-react';
import { IconType } from 'react-icons';

export type Link = {
  name: string;
  url: string;
  icon?: Icon | IconType;
};
