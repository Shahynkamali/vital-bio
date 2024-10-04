import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Columns.module.scss';

type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
  gap?: Gap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  direction?: FlexDirection;
}

const Columns: FC<Props> = ({
  children,
  className,
  gap = 'md',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  direction = 'row',
  ...rest
}) => (
  <div
    className={classNames(
      styles.columns,
      styles[`--gap-${gap}`],
      styles[`--justify-${justifyContent}`],
      styles[`--align-${alignItems}`],
      styles[`--direction-${direction}`],
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export { Columns };
