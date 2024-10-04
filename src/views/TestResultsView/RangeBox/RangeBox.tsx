import React, { type FC, type ReactNode } from 'react';
import { CircleIcon } from '@icons';
import { Box, Text } from '@components';
import styles from './RangeBox.module.scss';

type RangeBoxColor = 'error' | 'warning' | 'success';

interface Props {
  color: RangeBoxColor;
  count: number;
  children: ReactNode;
}
const colorMap = {
  error: '#FA4D56',
  warning: '#F1C21B',
  success: '#42BE65',
};

const RangeBox: FC<Props> = ({ color, count, children }) => {
  const renderIcons = () =>
    Array.from({ length: count }).map((_, index) => (
      <CircleIcon key={index} color={colorMap[color]} width={8} height={8} />
    ));

  return (
    <Box>
      <div className={styles.iconContainer}>{renderIcons()}</div>
      <Text variant="body">
        {count} {children}
      </Text>
    </Box>
  );
};

export { RangeBox };
