import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const CircleIcon: FC<IconProps> = ({
  width = 17,
  height = 16,
  color = 'white',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 17 16"
    fill="none"
  >
    <circle cx="8.75" cy="8" r="8" fill={color} />
  </svg>
);

export { CircleIcon };
