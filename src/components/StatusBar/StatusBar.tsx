import React from 'react';
import { Text } from '@components';
import { CircleIcon } from '@icons';
import styles from './StatusBar.module.scss';

interface Props {
  min: number;
  max: number | null;
  value: number;
}

const StatusBar: React.FC<Props> = ({ min, max, value }) => {
  const isInRange = max === null ? value >= min : value >= min && value <= max;
  const barColor = isInRange ? styles.success : styles.error;

  const percentage =
    max === null
      ? ((value - min) / (value - min)) * 100
      : ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.statusBar}>
      <div className={styles.barContainer}>
        <div
          className={`${styles.bar} ${barColor}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
        <div
          className={styles.indicator}
          style={{ left: `${Math.min(percentage, 98.5)}%` }}
        >
          <CircleIcon />
        </div>
      </div>
      <div className={styles.labels}>
        <Text variant="small" color="light">
          {value}
        </Text>
        <Text variant="small" color="light">
          {max}
        </Text>
      </div>
    </div>
  );
};

export { StatusBar };
