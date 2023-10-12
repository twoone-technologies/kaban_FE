import { locationIcon } from '~/assets/icons';
import styles from './map.module.css';

type LocationProps = {
  text: string;
  lat: number;
  lng: number
};

export default function LocationPin({ text }: LocationProps) {
  return (
    <div className="pin">
      <img src={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
      {/* <small>{lat}</small>
      <small>{lng}</small> */}
    </div>
  );
}
