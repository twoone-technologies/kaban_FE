import styles from './utils.module.css';
import { ReactNode } from 'react';

type TooltipProps = { copy?: boolean, popOver?: boolean, text: string | ReactNode }

export default function Tooltip({ copy, text, popOver }: TooltipProps) {
  return (
    <h3
      className={`c-pad stack box-shadow ${popOver ? styles.slideIn : styles.popOver}
      ${copy === true ? styles.active : styles.slide}`}
    >
      {text}
    </h3>
  );
}
