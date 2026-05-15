import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandMedium,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';
import { SiDevdotto, SiHackernoon } from 'react-icons/si';

import { Link } from '@/types/link';

export const socialLinks: Link[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/csouchet',
    icon: IconBrandGithubFilled,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/celinesouchet',
    icon: IconBrandLinkedinFilled,
  },
  { name: 'Dev.to', url: 'https://dev.to/csouchet', icon: SiDevdotto },
  {
    name: 'Medium',
    url: 'https://medium.com/@csouchet',
    icon: IconBrandMedium,
  },
  {
    name: 'Hackernoon',
    url: 'https://hackernoon.com/u/csouchet',
    icon: SiHackernoon,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/CelineS',
    icon: IconBrandTwitterFilled,
  },
];
