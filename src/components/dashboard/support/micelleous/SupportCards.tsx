import styles from './styles.module.css';

type Props = {
  header: string;
  content: string[];
};

export default function SupportCards({header, content}: Props) {
  return (
    <div className={styles.supportCard}>
      <h4 className="bg-primary font-bold">{header}</h4>
      <ul>
        {content.map((tips, id) => (
          <li key={id}>{tips}</li>
        ))}
      </ul>
    </div>
  );
}
