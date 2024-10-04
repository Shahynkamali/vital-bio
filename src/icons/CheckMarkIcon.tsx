import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const CheckMarkIcon: FC<IconProps> = ({
  width = 24,
  height = 25,
  color = 'white',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 49"
    fill="none"
  >
    <mask
      id="mask0_2153_1139"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="48"
      height="49"
    >
      <rect y="0.5" width="48" height="48" fill={color} />
    </mask>
    <g mask="url(#mask0_2153_1139)">
      <path
        d="M18.925 36.0501L7.89999 25.0251L9.97499 22.9501L18.925 31.9251L38 12.8501L40.05 14.9251L18.925 36.0501Z"
        fill="#E1E1E1"
      />
    </g>
  </svg>
);

export { CheckMarkIcon };
