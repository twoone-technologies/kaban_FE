import { useState } from 'react';
import {
  heartIcon,
  bedIcon,
  showerIcon,
  carIcon,
  locationIcon,
  cameraIcon,
} from '~/assets/icons';
import { IkonIcon } from '~/assets/img';
import Svg from '../Svg';
import styles from './card.module.css';
import Label from './Label';

type HouseCard = {
  apartmentImg: string;
  apartmentName: string;
  status: string;
  featured: boolean;
  price: string;
  address: string;
  propertyType: string;
  photoNo: string;
  bedNo: string;
  toiletNo: string;
  showerNo: string;
  carNo: string;
  agentImg: string;
  agentName: string;
  date: string;
};

export default function Card({ card, orientation = 'portrait' }: { card: HouseCard, orientation: string }) {
  const [hover, setHover] = useState(false);
  const onHoverHandler = () => setHover(!hover);
  const borders = orientation === 'portrait' ? styles.border_r : '';

  const setNums = (str: string) => {
    if (str === undefined || NaN || '') return '...';
    return parseInt(str).toLocaleString();
  };

  const plural = (numStr: string, str: string) => {
    const num = parseInt(numStr);
    if (num === 0) return 'nil';
    if (num === 1) return numStr.concat(' ', str);
    return numStr.concat(' ', str.concat('s'));
  } 

  return (
    <div
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
      className={`b-radius box_shadow ${styles.card} ${borders}`}
    >
      <div
        className={`flex f-column s-btw ${styles.above} 
        ${orientation === 'portrait' ? styles.border_r : styles.landscape}`}
      >
        <div
          className={`f-width ${styles.overlay} ${hover ? styles.nil : ''}`}
        ></div>
        <img
          src={card.apartmentImg}
          alt={card.apartmentImg}
          className={`${styles.img} ${hover ? styles.scale : ''}`}
        />
        <div className={`flex s-btw f-width`}>
          <small className={`b-radius stack c-pad ${styles.date}`}>
            {card.date}
          </small>
          <Svg
            className={`stack`}
            href={heartIcon}
          />
        </div>
        <div className="flex stack align-y">
          <Svg href={cameraIcon} />
          <span>{card.photoNo}</span>
        </div>
      </div>
      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <div className={`flex f-column ${styles.header}`}>
          <p>{card.propertyType}</p>
          <div className="flex s-btw">
            <h3>₦{setNums(card.price)}</h3>
            <div className={`flex gap ${styles.status_grp}`}>
              {card.featured ? <Label type="featured" text="FEATURED" /> : null}
              <Label type="status" text={`FOR ${card.status}`} />
            </div>
          </div>
        </div>
        <div className={`flex f-column s-btw gap ${styles.iconWrap}`}>
          <b className="c-grey">{card.apartmentName}</b>
          <div className="flex c-grey">
            <Svg
              width_2="1.2rem"
              width="1.2rem"
              className="locate"
              href={locationIcon}
            />
            <small>{card.address}</small>
          </div>
          <div className={`flex f-width ${styles.icons}`}>
            <div title='bed no' className="flex align-y">
              <Svg href={bedIcon} />
              <span>{plural(card.bedNo, 'bed')}</span>
            </div>
            <div title='shower no' className="flex align-y">
              <Svg href={showerIcon} />
              <span>{plural(card.showerNo, 'tub')}</span>
            </div>
            <div title='parking spots' className="flex align-y">
              <Svg href={carIcon} />
              <span>{plural(card.carNo, 'parking bay')}</span>
            </div>
          </div>
        </div>
        <div
          className={`flex s-btw f-width align-y b-radius c-pad bg-grey ${styles.agent}`}
        >
          <div className="flex align-y">
            <div className={styles.agent_img_wrap}>
              <img
                src={IkonIcon}
                className={styles.agent_img}
                alt={card.agentName}
              />
            </div>
            <small>{card.agentName}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
