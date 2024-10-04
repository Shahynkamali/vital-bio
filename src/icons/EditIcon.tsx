import type { IconProps } from '@icons';
import React, { type FC } from 'react';

const EditIcon: FC<IconProps> = ({
  width = 24,
  height = 25,
  color = '#E1E1E1',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
  >
    <mask
      id="mask0_2104_5992"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="-1"
      y="0"
      width="25"
      height="25"
    >
      <rect x="-0.211914" y="0.623779" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2104_5992)">
      <path
        d="M11.4535 21.7417V15.9292H13.3285V17.8917H21.3035V19.7667H13.3285V21.7417H11.4535ZM3.66602 19.7667V17.8917H9.57852V19.7667H3.66602ZM7.70352 15.8292V13.8667H3.66602V11.9917H7.70352V10.0167H9.57852V15.8292H7.70352ZM11.4535 13.8667V11.9917H21.3035V13.8667H11.4535ZM15.391 9.91675V4.10425H17.266V6.07925H21.3035V7.95425H17.266V9.91675H15.391ZM3.66602 7.95425V6.07925H13.516V7.95425H3.66602Z"
        fill={color}
      />
    </g>
  </svg>
);

export { EditIcon };
