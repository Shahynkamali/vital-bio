import React, { type FC, type InputHTMLAttributes } from 'react';
import { SearchIcon } from '@icons';
import styles from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        {...props}
      />
    </div>
  );
};

export { SearchInput };
