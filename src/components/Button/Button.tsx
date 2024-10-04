import React, {
  type ButtonHTMLAttributes,
  type FC,
  type ReactNode,
} from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonColor = 'sky' | 'sunset' | 'rose' | 'neutral';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isIcon?: boolean;
  color?: ButtonColor;
  children: ReactNode;
}

const Button: FC<Props> = ({
  isIcon = false,
  color = 'sky',
  children,
  className,
  ...rest
}) => (
  <button
    type="button"
    className={classNames(
      styles.button,
      isIcon ? styles.iconButton : styles.textButton,
      styles[`color-${color}`],
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

export { Button };
