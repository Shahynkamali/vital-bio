import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

type BackgroundColor =
  | 'primary-dark'
  | 'lighter-dark-primary'
  | 'primary-light';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
  backgroundColor?: BackgroundColor;
}

const Container: FC<Props> = ({
  children,
  className,
  backgroundColor = 'primary-dark',
  ...rest
}) => (
  <div
    className={classNames(
      styles.parentContainer,
      styles[`--bg-${backgroundColor}`],
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export { Container };
