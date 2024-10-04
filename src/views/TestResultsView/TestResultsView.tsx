import React from 'react';
import { Wrapper, Column, Columns, Text, Box } from '@components';
import type { FC } from 'react';
import { Sidebar } from '@layouts';
import { PatientInformationBox } from 'src/views/TestResultsView/PatientInformationBox';
import { RangeBox } from 'src/views/TestResultsView/RangeBox';
import testresults from './testresult.json';

const TestResultsView: FC = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Wrapper>
        <Columns>
          <Column width="40">
            <Columns direction="column">
              <Column width="100">
                <PatientInformationBox patient={testresults.patient} />
              </Column>
              <Column width="100">
                <Columns>
                  <Column width="50">
                    <RangeBox
                      color="error"
                      count={testresults.summary.outOfRange}
                    >
                      out of range
                    </RangeBox>
                  </Column>
                  <Column width="50">
                    <RangeBox
                      color="warning"
                      count={testresults.summary.invalid}
                    >
                      invalid
                    </RangeBox>
                  </Column>
                </Columns>
              </Column>
              <Column width="100">
                <RangeBox color="success" count={testresults.summary.inRange}>
                  in range
                </RangeBox>
              </Column>
            </Columns>
          </Column>
          <Column width="auto">
            <Box>
              <Text>omne</Text>
            </Box>
            <Box>
              <Text>omne</Text>
            </Box>
            <Box>
              <Text>omne</Text>
            </Box>
            <Box>
              <Text>omne</Text>
            </Box>
          </Column>
        </Columns>
      </Wrapper>
    </Wrapper>
  );
};

export { TestResultsView };
