import type { FC } from 'react';
import React from 'react';
import { Column, Columns, Wrapper } from '@components';
import { CountDownClock } from '@components/CountDownClock/CountDownClock';

const CountdownView: FC = () => {
  return (
    <Wrapper>
      <Columns justifyContent="center" alignItems="center">
        <Column width="100" justifyContent="center" alignItems="center">
          <CountDownClock lastName="John" initialTime={10} dob="1990-12-01" />
        </Column>
      </Columns>
    </Wrapper>
  );
};
export { CountdownView };
