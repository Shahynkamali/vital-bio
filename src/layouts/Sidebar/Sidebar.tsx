import React, { type FC } from 'react';
import { Button } from '@components';
import { HomeIcon, SettingsIcon, LabProfileIcon, LabIcon } from '@icons';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topButtons}>
        <Button isIcon color="sky">
          <LabProfileIcon />
        </Button>
        <Button isIcon color="sunset">
          <LabIcon />
        </Button>
        <Button isIcon color="rose">
          <SettingsIcon />
        </Button>
      </div>
      <div className={styles.bottomButton}>
        <Button isIcon color="neutral">
          <HomeIcon />
        </Button>
      </div>
    </aside>
  );
};

export { Sidebar };
