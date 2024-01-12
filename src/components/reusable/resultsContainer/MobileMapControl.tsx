import styles from './results.module.css'
import { gridIcon, mapIcon } from '~/assets/icons';
import Svg from '../Svg';

type ControlProps = {
  stackOrder: 'listings' | 'map';
  setStackOrder: (stackOrder: 'listings' | 'map') => void;
}

export default function MobileMapControl({stackOrder, setStackOrder}: ControlProps) {
  const handleStackOrder = (stackOrder: 'listings' | 'map') => {
    setStackOrder(stackOrder);
  }

  const active = stackOrder === 'listings' && styles.isActive;
  const mapActive = stackOrder === 'map' && styles.isActive;

  return (
    <div
        className={`flex b-radius c-pad ${styles.map_control}
        ${stackOrder === 'map' ? styles.width_1 : styles.width_2}`}
      >
        <div
          onClick={() => handleStackOrder('listings')}
          className={`flex c-pad f-width gap align-y ${active} ${styles.map_tool}`}
        >
          <Svg href={gridIcon} />
          <span>Listings</span>
        </div>
        <div
          onClick={() => handleStackOrder('map')}
          className={`flex c-pad f-width gap align-y ${mapActive} ${styles.map_tool}`}
        >
          <Svg href={mapIcon} />
          <span>Map</span>
        </div>
      </div>
  )
}