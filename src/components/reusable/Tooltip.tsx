import styles from './utils.module.css';

export default function Tooltip({ copy }: { copy: boolean }) {
  return (
    <h3
      className={`c-pad stack box-shadow ${styles.tooltip}
      ${copy === true ? styles.active : styles.slide}`}
    >
      Link copied to clipboard
    </h3>
  );
}
