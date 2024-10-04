import type { FC } from 'react';
import React from 'react';
import { Wrapper, Text } from '@components';

const Home: FC = () => {
  return (
    <Wrapper>
      <Text as="h1">Welcome to Vital Bio</Text>
    </Wrapper>
  );
};

export { Home };
