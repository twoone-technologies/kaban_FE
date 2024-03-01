import { ReactNode } from 'react';
import styles from './post.module.css';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function InputWrap({ children, className }: Props) {
  return (
    <div
      className={`flex gap f-column b-radius ${className} ${styles.datatWrap}`}
    >
      {children}
    </div>
  );
}
