import { locationIcon } from '~/assets/icons';
import styles from './map.module.css';

export default function LocationPin({ text }: { text: string }) {
  return (
    <div className="pin">
      <img src={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
}
