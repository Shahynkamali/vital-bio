import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Wrapper.module.scss';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
  isFullWidth?: boolean;
}

const Wrapper: FC<Props> = ({
  children,
  className,
  isFullWidth = false,
  ...rest
}) => (
  <div
    className={classNames(
      styles.wrapper,
      { [styles['--fullWidth']]: isFullWidth },
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export { Wrapper };
