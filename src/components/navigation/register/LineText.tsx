import styles from '~/components/reusable/modal/modal.module.css';

export default function LineText({text, className}: {text: string, className?: string}) {
  return (
    <div className={`flex align-y ${className}`}>
      <hr className={styles.hr} />
      <span className="f-width">{text}</span>
      <hr className={styles.hr} />
    </div>
  );
}
