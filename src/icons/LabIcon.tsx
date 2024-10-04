import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const LabIcon: FC<IconProps> = ({
  width = 40,
  height = 40,
  color = '#591D00',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <mask
      id="mask0_2104_5965"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2104_5965)">
      <path
        d="M20 36.6666C17.6945 36.6666 15.7292 35.8541 14.1042 34.2291C12.4792 32.6041 11.6667 30.6388 11.6667 28.3333V13.3333H8.33337V3.33325H31.6667V13.3333H28.3334V28.3333C28.3334 30.6388 27.5209 32.6041 25.8959 34.2291C24.2709 35.8541 22.3056 36.6666 20 36.6666ZM19.9934 33.8887C21.5348 33.8887 22.8471 33.3485 23.9305 32.2683C25.0138 31.1883 25.5555 29.8766 25.5555 28.3333V27.7778H20V24.9999H25.5555V21.1112H20V18.3333H25.5555V13.3333H14.4446V28.3333C14.4446 29.8766 14.9841 31.1883 16.063 32.2683C17.1418 33.3485 18.452 33.8887 19.9934 33.8887Z"
        fill={color}
      />
    </g>
  </svg>
);

export { LabIcon };
