import { ReactNode } from 'react';
import styles from './card.module.css';

type AgentProps = {
  src: string | undefined;
  identity: string | undefined | ReactNode;
  star?: ReactNode;
  imgClass?: string;
} & React.ComponentProps<'div'>

export default function CardAgentInfo({
  src,
  identity,
  star,
  imgClass,
  className
}: AgentProps) {

  return (
    <div
      className={`flex s-btw f-width align-y b-radius c-pad ${className} ${styles.agent}`}
    >
      <div className="flex align-y">
        <div className={`${imgClass} ${styles.agent_img_wrap}`}>
          <img src={src} className={styles.agent_img} alt={'img'} />
        </div>
        <div className='flex f-column gap'>
          <small className='flex align-y gap'>{identity}</small>
          {star}
        </div>
      </div>
    </div>
  );
}
