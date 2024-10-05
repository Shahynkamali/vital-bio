import { Wrapper, Columns, Column } from '@components';
import React, { type FC } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  x: number;
  y: number;
}

const QualityControlChartView: FC = () => {
  const sampleData: DataPoint[] = [
    { x: 0, y: 0.8 },
    { x: 1, y: 1.0 },
    { x: 2, y: 0.7 },
    { x: 3, y: -0.5 },
    { x: 4, y: -1.0 },
    { x: 5, y: 2.8 },
    { x: 6, y: 1.5 },
    { x: 7, y: -2.7 },
    { x: 8, y: -0.8 },
    { x: 9, y: 0.9 },
    { x: 10, y: 0.2 },
    { x: 11, y: -2.8 },
  ];
  return (
    <Wrapper>
      <Columns justifyContent="center" alignItems="center">
        <Column width="100" justifyContent="center" alignItems="center">
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
              style={{ backgroundColor: 'black' }}
            >
              <CartesianGrid stroke="#555" />
              <XAxis
                type="number"
                dataKey="x"
                name="Sample"
                tick={{ fill: 'white' }}
                stroke="white"
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Value"
                tick={{ fill: 'white' }}
                stroke="white"
              />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'black',
                }}
              />
              <Scatter
                data={sampleData}
                shape="circle"
                fillOpacity={1}
                fill="#4CAF50"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </Column>
      </Columns>
    </Wrapper>
  );
};

export { QualityControlChartView };
