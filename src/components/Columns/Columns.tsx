import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Columns.module.scss';

type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
  gap?: Gap;
}

const Columns: FC<Props> = ({ children, className, gap = 'md', ...rest }) => (
  <div
    className={classNames(styles.columns, styles[`--gap-${gap}`], className)}
    {...rest}
  >
    {children}
  </div>
);

export { Columns };
