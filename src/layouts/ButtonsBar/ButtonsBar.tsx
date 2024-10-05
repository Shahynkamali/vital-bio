import React, { type FC } from 'react';
import { Columns, Column, Button, SearchInput } from '@components';
import { ChevronLeftIcon, EditIcon } from '@icons';
import { useBreakpoints } from '@hooks/useBreakpoints';
import styles from './ButtonsBar.module.scss';

interface Props {
  onBackClick: () => void;
  onSearch: (value: string) => void;
  onFilter: () => void;
  onRerun: () => void;
  onExport: () => void;
}

const ButtonsBar: FC<Props> = ({
  onBackClick,
  onSearch,
  onFilter,
  onRerun,
  onExport,
}) => {
  const breakpoints = useBreakpoints();

  const isTablet = breakpoints.lg.lessThan;

  return (
    <Columns hasPadding alignItems="center" justifyContent="center">
      <Column className={styles.margin} width={isTablet ? '75' : '20'}>
        <Button onClick={onBackClick} className={styles.backButton}>
          <ChevronLeftIcon />
          Back to Orders
        </Button>
      </Column>
      <Column className={styles.margin} width={isTablet ? '75' : '40'}>
        <SearchInput onChange={(e) => onSearch(e.target.value)} />
      </Column>
      <Column className={styles.margin} width={isTablet ? '75' : '10'}>
        <Button onClick={onFilter} className={styles.filterButton}>
          <EditIcon />
          Filter
        </Button>
      </Column>
      <Column className={styles.margin} width={isTablet ? '75' : '10'}>
        <Button onClick={onRerun}>Rerun</Button>
      </Column>
      <Column className={styles.margin} width={isTablet ? '75' : 'auto'}>
        <Button inverted onClick={onExport} color="sky">
          Export Results
        </Button>
      </Column>
    </Columns>
  );
};

export { ButtonsBar };
