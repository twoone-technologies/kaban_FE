import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type Props = {
  link: string;
  header: string;
  content: string[];
};

export default function SupportCards({ header, content, link }: Props) {
  return (
    <Link
      to={link}
      className={styles.supportCard}
    >
      <h4 className="bg-primary font-bold">{header}</h4>
      <ul>
        {content.slice(0, 3).map((tips, id) => (
          <li key={id}>{tips}</li>
        ))}
      </ul>
    </Link>
  );
}
