import React, { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Column.module.scss';

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

export type ColumnWidth =
  | 'auto'
  | '10'
  | '20'
  | '25'
  | '33'
  | '40'
  | '50'
  | '66'
  | '75'
  | '100';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  direction?: FlexDirection;
  isFullHeight?: boolean;
  spacer?: boolean;
  width?: ColumnWidth;
}

const Column: FC<Props> = ({
  children,
  className,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  direction = 'column',
  isFullHeight = false,
  spacer = false,
  width = 'auto',
  ...rest
}) => (
  <div
    className={classNames(
      styles.column,
      styles[`--width-${width}`],
      {
        [styles['--fullHeight']]: isFullHeight,
        [styles['--spacer']]: spacer,
      },
      className
    )}
    style={{ justifyContent, alignItems, flexDirection: direction }}
    {...(spacer ? { role: 'presentation', 'aria-hidden': 'true' } : {})}
    {...rest}
  >
    {children}
  </div>
);

export { Column };
