import styles from './utils.module.css';
import React, { ReactNode } from 'react';

type TooltipProps = {
  copy?: boolean;
  popOver?: boolean;
  className?: string;
  text?: string | ReactNode;
} & React.ComponentProps<'h3'>;

export default function Tooltip({
  copy,
  text,
  popOver,
  className,
  children
}: TooltipProps) {
  return (
    <h3
      className={`c-pad box-shadow ${className} ${
        popOver ? styles.slideIn : styles.popOver
      }
      ${copy === true ? styles.active : styles.slide}`}
    >
      {text} {children}
    </h3>
  );
}
