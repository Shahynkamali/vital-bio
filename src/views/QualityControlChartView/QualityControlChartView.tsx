import React, { type FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from 'recharts';

const data = [
  { x: 0, y: null },
  { x: 1, y: 1 },
  { x: 2, y: 0.7 },
  { x: 3, y: 0.3 },
  { x: 4, y: -1 },
  { x: 5, y: 2.8 },
  { x: 6, y: 1.7 },
  { x: 7, y: -3 },
  { x: 8, y: -0.5 },
  { x: 9, y: 1 },
  { x: 10, y: 0.2 },
  { x: 11, y: 0.7 },
  { x: 12, y: null },
];

const QualityControlChartView: FC = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="x" />
      <YAxis domain={[-3, 3]} ticks={[-3, -2, -1, 0, 1, 2, 3]} />
      <Tooltip />
      <ReferenceLine y={0} stroke="FFF" />
      <ReferenceLine y={2} stroke="#666" strokeDasharray="3 3" />
      <ReferenceLine y={-2} stroke="#666" strokeDasharray="3 3" />
      <Line
        type="monotone"
        dataKey="y"
        stroke="#8884d8"
        dot={{ fill: '#8884d8', r: 6 }}
        isAnimationActive={false}
        connectNulls={false}
      />
    </LineChart>
  );
};

export { QualityControlChartView };
