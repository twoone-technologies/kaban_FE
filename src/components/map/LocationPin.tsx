import { locationIcon } from '~/assets/icons';
import styles from './map.module.css';

type locationProps = {
  text: string;
  lat: number;
  lng: number;
}

export default function LocationPin({ text, lat, lng }: locationProps) {
  return (
    <div className="pin">
      <img src={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
      <small>{lat}</small>
      <small>{lng}</small>
    </div>
  );
}
