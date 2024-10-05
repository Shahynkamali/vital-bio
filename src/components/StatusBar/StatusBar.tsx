import React from 'react';
import { Text } from '@components';
import { CircleIcon } from '@icons';
import styles from './StatusBar.module.scss';

interface Props {
  min: number;
  max: number | null;
  value: number;
  unit: string;
}

const StatusBar: React.FC<Props> = ({ min, max, value, unit }) => {
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
          {min}
        </Text>
        <Text
          variant="body"
          color={isInRange ? 'optimal' : 'abnormal'}
          align="right"
        >
          {value} {unit}
        </Text>
      </div>
    </div>
  );
};

export { StatusBar };
