import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const HomeIcon: FC<IconProps> = ({
  width = 40,
  height = 40,
  color = '#2F2F2F',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <mask
      id="mask0_2104_5973"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2104_5973)">
      <path
        d="M6.66663 35V15L20 5L33.3333 15V35H23.3333V23.3333H16.6666V35H6.66663Z"
        fill={color}
      />
    </g>
  </svg>
);

export { HomeIcon };
