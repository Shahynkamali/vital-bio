import React, { useState } from 'react';
import { Column, Columns, Wrapper } from '@components';
import type { FC } from 'react';
import { ButtonsBar, Sidebar } from '@layouts';
import { useBreakpoints } from '@hooks/useBreakpoints';
import { PatientInformationBox } from 'src/views/TestResultsView/PatientInformationBox';
import { RangeBox } from 'src/views/TestResultsView/RangeBox';
import { TestResults } from 'src/views/TestResultsView/TestResults/TestResults';

import testresults from './testresult.json';

const TestResultsView: FC = () => {
  const breakpoints = useBreakpoints();
  const isTablet = breakpoints.lg.lessThan;

  const [filteredTestResults, setFilteredTestResults] = useState(
    testresults.testResults
  );

  const handleBackClick = () => {
    // Handle back navigation
  };

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = testresults.testResults.filter((test) =>
      test.name.toLowerCase().includes(lowercasedValue)
    );
    setFilteredTestResults(filtered);
  };

  const handleFilter = () => {
    // Handle filter action
  };

  const handleRerun = () => {
    // Handle rerun action
  };

  const handleExport = () => {
    // Handle export action
  };

  return (
    <Wrapper>
      <Sidebar />
      <Columns backgroundColor="primary-dark" direction="column">
        <Column width="100">
          <ButtonsBar
            onBackClick={handleBackClick}
            onSearch={handleSearch}
            onFilter={handleFilter}
            onRerun={handleRerun}
            onExport={handleExport}
          />
        </Column>
        <Columns hasPadding justifyContent="center">
          <Column width={isTablet ? '75' : '40'}>
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
          <Column width={isTablet ? '75' : 'auto'}>
            <TestResults testResults={filteredTestResults} />
          </Column>
        </Columns>
      </Columns>
    </Wrapper>
  );
};

export { TestResultsView };
