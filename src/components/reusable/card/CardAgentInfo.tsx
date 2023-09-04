import styles from './card.module.css';

export default function CardAgentInfo({
  src,
  identity,
}: {
  src: string;
  identity: string;
}) {

  return (
    <div
      className={`flex s-btw f-width align-y b-radius c-pad ${styles.agent}`}
    >
      <div className="flex align-y">
        <div className={styles.agent_img_wrap}>
          <img src={src} className={styles.agent_img} alt={identity} />
        </div>
        <small>{identity}</small>
      </div>
    </div>
  );
}
