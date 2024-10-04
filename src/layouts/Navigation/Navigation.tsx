import React, { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper, Columns, Column, Text } from '@components';
import { useBreakpoints } from '@hooks/useBreakpoints';
import styles from './Navigation.module.scss';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/countdown', label: 'Countdown' },
  { path: '/quality-control', label: 'Quality Control Chart' },
  { path: '/test-results', label: 'Test Results' },
];

const Navigation: FC = () => {
  const location = useLocation();
  const breakpoints = useBreakpoints();

  const isTablet = breakpoints.lg.lessThan;

  const renderListItems = () =>
    navItems.map((item) => (
      <Link to={item.path} className={styles.navLink}>
        <Text
          variant={isTablet ? 'small' : 'body'}
          color={location.pathname === item.path ? 'optimal' : 'default'}
        >
          {item.label}
        </Text>
      </Link>
    ));

  return (
    <Wrapper>
      <Columns direction={isTablet ? 'column' : 'row'}>
        <Column width="25">
          <Text
            variant={isTablet ? 'body' : 'h3'}
            color="default"
            className={styles.logo}
          >
            Vital Bio Dashboard
          </Text>
        </Column>
        <Column direction={isTablet ? 'column' : 'row'} width="auto">
          {renderListItems()}
        </Column>
      </Columns>
    </Wrapper>
  );
};

export { Navigation };
