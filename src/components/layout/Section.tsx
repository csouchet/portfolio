import { Stack, StackProps } from '@mantine/core';

import { SectionHeader, SectionHeaderProps } from './SectionHeader';

type Props = StackProps & SectionHeaderProps;

export function Section({
  title,
  description,
  icon,
  iconColor,
  withIconBackground,
  withDivider,
  children,
  ...props
}: Props) {
  return (
    <Stack component="section" variant="section" aria-label={title} {...props}>
      <SectionHeader
        title={title}
        description={description}
        icon={icon}
        iconColor={iconColor}
        withIconBackground={withIconBackground}
        withDivider={withDivider}
      />
      {children}
    </Stack>
  );
}
