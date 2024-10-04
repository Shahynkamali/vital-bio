import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Box.module.scss';

type Padding = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
  padding?: Padding;
}

const Box: FC<Props> = ({ children, className, padding = 'md', ...rest }) => (
  <div
    className={classNames(
      styles.box,
      styles[`--padding-${padding}`],
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export { Box };
