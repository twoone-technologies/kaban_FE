import { ReactNode } from 'react';
import styles from './itemInfo.module.css'

type Props = {
  h1: string | ReactNode;
  h2?: string;
  visit?: ReactNode;
  children: ReactNode;
} & React.ComponentProps<'div'>;

export default function ItemInfo({h1, h2, visit, children, className}: Props) {
  return (
    <div className={`flex gap b-radius f-column ${styles.item_info} ${className}`}>
      <div className={`flex gap s-btw ${styles.item_header}
        ${h1 === 'Disclaimer' || h1 === 'Kaban Safety Tips' ?
        styles.b_btm1 : styles.b_btm}`}>
        <h4>{h1}</h4>
        <h4>{h2}</h4>
      </div>
      <div className={`flex s-btw ${styles.item_contents}
        ${visit ? styles.b_btm : ''}`}>
        {children}
      </div>
      {visit ? visit : null}
    </div>
  );
}
