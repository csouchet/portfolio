import Link from 'next/link';

import { IconArrowRight } from '@tabler/icons-react';

import { Button, ButtonProps, ButtonSize, rem } from '@mantine/core';

type CTAButtonProps = ButtonProps & {
  content: string;
  href: string;
};

const getIconSize = (buttonSize: ButtonSize) => {
  switch (buttonSize) {
    case 'xs':
    case 'compact-xs':
      return rem(16);
    case 'sm':
    case 'compact-sm':
      return rem(18);
    case 'md':
    case 'compact-md':
      return rem(20);
    case 'lg':
    case 'compact-lg':
      return rem(22);
    default:
      return rem(16);
  }
};

export function CTAButton({
  content,
  href,
  size = 'sm',
  ...props
}: CTAButtonProps) {
  return (
    <Button
      component={Link}
      href={href}
      size={size}
      rightSection={<IconArrowRight size={getIconSize(size)} stroke={2.2} />}
      {...props}
    >
      {content}
    </Button>
  );
}
