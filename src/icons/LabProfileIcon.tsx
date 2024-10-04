import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const LabProfileIcon: FC<IconProps> = ({
  width = 40,
  height = 40,
  color = '#1B3533',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <mask
      id="mask0_2104_5961"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2104_5961)">
      <path
        d="M13.3333 19.722H26.6666V16.9445H13.3333V19.722ZM13.3333 13.0553H26.6666V10.2778H13.3333V13.0553ZM33.3333 34.6945L24.8195 23.6112H6.66663V3.33325H33.3333V34.6945ZM6.66663 36.6666V26.3887H23.472L31.3333 36.6666H6.66663Z"
        fill={color}
      />
    </g>
  </svg>
);

export { LabProfileIcon };
