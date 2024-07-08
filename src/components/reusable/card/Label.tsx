import { dotIcon } from '~/assets/icons';
import styles from './card.module.css';
import Svg from '../Svg';

export default function Label({ type }: { type: string }) {
  const label = () => {
    switch (type) {
      case 'rent':
        return 'for Rent';
      case 'sale':
        return 'for Sale';
      case 'featured':
        return 'Featured';
      default:
        if (location.pathname.includes('dashboard')) return type;
        else return null;
    }
  };

  return (
    <div className={`b-radius flex align-y c-pad gap-05 ${styles[type]}`}>
      <Svg width='7' height='7' href={dotIcon} className={styles.label_svg} />
      <span>{label()}</span>
    </div>
  );
}
