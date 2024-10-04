type StatusColor = 'abnormal' | 'optimal';

const getStatusColor = (
  value: number,
  min: number,
  max: number | null
): StatusColor => {
  if (max === null) {
    return value >= min ? 'optimal' : 'abnormal';
  }

  if (value < min) {
    return 'abnormal';
  }
  if (value > max) {
    return 'abnormal';
  }
  const range = max - min;
  const warningThreshold = range * 0.1;

  if (value <= min + warningThreshold || value >= max - warningThreshold) {
    return 'abnormal';
  }
  return 'optimal';
};

export { getStatusColor };
