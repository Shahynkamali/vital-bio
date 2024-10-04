import React, { type FC, type HTMLProps } from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

type TextVariant = 'small' | 'body' | 'body-bold' | 'h4' | 'h3' | 'h2' | 'h1';
type TextColor = 'default' | 'light' | 'abnormal' | 'optimal';
type TextAlign = 'left' | 'center' | 'right';
type SemanticTextType = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends Omit<HTMLProps<HTMLSpanElement>, 'as' | 'ref'> {
  as?: SemanticTextType;
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
}

const Text: FC<Props> = ({
  as: Component = 'span',
  variant = 'body',
  color = 'default',
  align = 'left',
  className,
  children,
  ...rest
}) => (
  <Component
    className={classNames(
      styles.text,
      styles[`--variant-${variant}`],
      styles[`--color-${color}`],
      styles[`--align-${align}`],
      className
    )}
    {...rest}
  >
    {children}
  </Component>
);

export { Text };
