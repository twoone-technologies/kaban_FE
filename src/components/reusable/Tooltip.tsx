import styles from './utils.module.css';
import { ReactNode } from 'react';

type TooltipProps = {
  copy?: boolean;
  popOver?: boolean;
  className?: string;
  text: string | ReactNode;
};

export default function Tooltip({
  copy,
  text,
  popOver,
  className,
}: TooltipProps) {
  return (
    <h3
      className={`c-pad stack box-shadow ${className} ${
        popOver ? styles.slideIn : styles.popOver
      }
      ${copy === true ? styles.active : styles.slide}`}
    >
      {text}
    </h3>
  );
}
