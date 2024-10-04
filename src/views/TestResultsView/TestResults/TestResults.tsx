import React from 'react';
import { Column, Columns, Text, Box, StatusBar } from '@components';
import type { FC } from 'react';
import { getStatusColor } from '@utils';
import styles from './TestResults.module.scss'; // We'll create this file next

interface TestResult {
  name: string;
  category: string;
  value: number;
  unit: string;
  range: {
    min: number;
    max: number | null;
  };
  status: string;
}

interface Props {
  testResults: TestResult[];
}

const TestResults: FC<Props> = ({ testResults }) => {
  return (
    <div className={styles.scrollContainer}>
      <Columns direction="column">
        {testResults.map((result, index) => (
          <Column key={index} width="100">
            <Box>
              <Columns>
                <Column>
                  <Columns>
                    <Column width="75">
                      <Text variant="h4">{result.name}</Text>
                      <Text variant="body" color="light">
                        {result.category}
                      </Text>
                    </Column>
                    <Column
                      justifyContent="flex-end"
                      width="25"
                      direction="row"
                    >
                      <Column>
                        <Text variant="body">
                          {result.value} {result.unit}
                        </Text>
                        <Text
                          color={getStatusColor(
                            result.value,
                            result.range.min,
                            result.range.max
                          )}
                          variant="body"
                        >
                          {result.status}
                        </Text>
                      </Column>
                    </Column>
                  </Columns>
                </Column>
                <StatusBar
                  min={result.range.min}
                  max={result.range.max || result.value * 1.5}
                  value={result.value}
                  unit={result.unit}
                />
              </Columns>
            </Box>
          </Column>
        ))}
      </Columns>
    </div>
  );
};

export { TestResults };
