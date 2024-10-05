import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Columns.module.scss';

type BackgroundColor =
  | 'primary-dark'
  | 'lighter-dark-primary'
  | 'primary-light';

export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type FlexDirection = 'column' | 'row';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  direction?: FlexDirection;
  hasPadding?: boolean;
  backgroundColor?: BackgroundColor;
}

const Columns: FC<Props> = ({
  children,
  className,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  direction = 'row',
  backgroundColor,
  hasPadding,
  ...rest
}) => (
  <div
    className={classNames(
      styles.columns,
      hasPadding ? styles.padding : null,
      styles[`--justify-${justifyContent}`],
      styles[`--align-${alignItems}`],
      styles[`--direction-${direction}`],
      styles[`--bg-${backgroundColor}`],
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export { Columns };
