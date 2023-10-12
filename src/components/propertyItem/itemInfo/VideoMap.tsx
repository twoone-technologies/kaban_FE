import { useState } from 'react';
import styles from './itemInfo.module.css';
import { HouseCard } from '~/components/reusable/card/Card';
import MapLoader from '~/components/map/MapLoader';

export default function VideoMap({ item }: { item: HouseCard }) {
  const [isVisible, setIsVisible] = useState<'video' | 'map'>('video');

  const handleSwitch = (isVisible: 'video' | 'map') => {
    setIsVisible(isVisible);
  };

  const vidStr = (str: string) => {
    const videoId = str.split('/').pop();
    const videoLink = `https://www.youtube.com/embed/${videoId}`;
    return videoLink
  }
  return (
    <div className={`flex gap f-column bg-tertiary box-shadow b-radius border ${styles.item_info}`}>
      <div className={`flex ${styles.item_header}`}>
        <h4 onClick={() => handleSwitch('video')} 
          className={isVisible === 'video'? 'bg-primary' : ''}>
          Video
        </h4>
        <h4 onClick={() => handleSwitch('map')} 
          className={isVisible === 'map'? 'bg-primary' : ''}>
          Map and street view
        </h4>
      </div>
      <div className={`flex s-btw ${styles.item_contents}`}>
        {isVisible === 'video' ? 
          <iframe
          width="100%"
          height="315"
          src={vidStr(item.videoLink)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>: 
          <div className={styles.map_wrap}>
            <MapLoader idx={item.id} />
          </div>
        }
      </div>
    </div>
  );
}