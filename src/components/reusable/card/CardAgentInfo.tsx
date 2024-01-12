import { ReactNode } from 'react';
import styles from './card.module.css';
import Rating from '~/components/propertyItem/micellenous/Rating';

type AgentProps = {
  src?: string | undefined;
  firstLetter?: string;
  lastLetter?: string;
  identity: string | undefined | ReactNode;
  star?: number;
  imgClass?: string;
} & React.ComponentProps<'div'>;

export default function CardAgentInfo({
  src,
  identity,
  firstLetter,
  lastLetter,
  star,
  imgClass,
  className,
}: AgentProps) {
  return (
    <div
      className={`flex s-btw f-width align-y b-radius c-pad ${className} ${styles.agent}`}
    >
      <div className="flex align-y gap">
        <div className={`${imgClass} ${styles.agent_img_wrap}`}>
          {src ? <img src={src} className={styles.agent_img} alt={'img'} />:
            <div className={`flex align-x align-y ${styles.name_initials}`}>
              <span>{firstLetter}</span>
              <span>{lastLetter}</span>
            </div>}
        </div>
        <div className="flex f-column gap">
          <small className="flex align-y gap">{identity}</small>
          {star ? <Rating num={star} /> : null}
        </div>
      </div>
    </div>
  );
}
