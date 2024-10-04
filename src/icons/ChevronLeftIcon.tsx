import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const ChevronLeftIcon: FC<IconProps> = ({
  width = 24,
  height = 25,
  color = 'white',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
  >
    <mask
      id="mask0_2104_5980"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2104_5980)">
      <path
        d="M14 18.5L8 12.5L14 6.5L15.4 7.9L10.8 12.5L15.4 17.1L14 18.5Z"
        fill={color}
      />
    </g>
  </svg>
);

export { ChevronLeftIcon };
