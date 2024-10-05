import React, { useState, useEffect, type FC } from 'react';
import { CheckMarkIcon } from '@icons';

interface CountDownClockProps {
  initialTime?: number;
  lastName?: string;
  dob?: string;
}

const CountDownClock: FC<CountDownClockProps> = ({
  initialTime = 60,
  lastName = '',
  dob = '',
}) => {
  const [timeLeft, setTimeLeft] = useState(Math.max(0, initialTime));
  const [isCompleted, setIsCompleted] = useState(false);
  const size = 616;
  const tickCount = 60;
  const radius = size / 2 - 20;

  const darkColor = '#e1e1e1';
  const lightColor = '#8f8f8f';
  const completedColor = '#42BE65';

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsCompleted(true);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((time) => {
        const newTime = Math.max(0, time - 1);
        if (newTime === 0) {
          setIsCompleted(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const createTickers = (): React.ReactNode[] => {
    const tickers: React.ReactNode[] = [];
    const elapsedTicks = Math.min(
      tickCount,
      tickCount - Math.ceil(timeLeft / (initialTime / tickCount))
    );

    for (let i = 0; i < tickCount; i++) {
      const angle = (i * 360) / tickCount;
      const radian = angle * (Math.PI / 180);
      const x = size / 2 + radius * Math.sin(radian) - 7.5;
      const y = size / 2 - radius * Math.cos(radian);

      const tickColor = isCompleted
        ? completedColor
        : i < elapsedTicks
          ? darkColor
          : lightColor;

      tickers.push(
        <g
          key={i}
          transform={`translate(${x}, ${y}) rotate(${angle + 58}, 7.5, 5.5)`}
        >
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path
              d="M14.05 10.03L0.539978 1.45996"
              stroke={tickColor}
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </g>
      );
    }
    return tickers;
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {createTickers()}
      {isCompleted ? (
        <g>
          <g transform={`translate(${size / 2 - 24}, ${size / 2 - 120})`}>
            <CheckMarkIcon width={48} height={49} color={completedColor} />
          </g>
          <text
            x={size / 2}
            y={size / 2 - 40}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="48"
            fill={completedColor}
          >
            Test complete
          </text>
          <text
            x={size / 2}
            y={size / 2 + 20}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24"
            fill={darkColor}
          >
            Analysis Complete
          </text>
          <text
            x={size / 2}
            y={size / 2 + 50}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="18"
            fill={darkColor}
          >
            {`${lastName} • ${dob}`}
          </text>
        </g>
      ) : (
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48"
          fill={darkColor}
        >
          {formatTime(timeLeft)}
        </text>
      )}
    </svg>
  );
};

export { CountDownClock };
