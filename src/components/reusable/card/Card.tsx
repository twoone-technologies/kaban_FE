import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { bedIcon, showerIcon, carIcon } from '~/assets/icons';
import styles from './card.module.css';
import CardAgentInfo from './CardAgentInfo';
import CardIcons from './CardIcons';
import CardHeaderInfo from './CardHeaderInfo';
import CardAddress from './CardAddress';
import CardImg from './CardImg';

export type HouseCard = {
  find?(arg0: (item: { realtor: { agentName: string; }; }) => void): unknown;
  location: {
    type: string;
    coordinates: [number, number] | number[];
  };
  _id: string;
  realtor: {
    agentImg: string;
    agentName: string;
    contact: string;
    location: string;
    rating: number;
    verified: boolean;
  };
  title: string;
  property_category: string;
  property_type: string;
  description: string;
  status: string;
  featured: boolean;
  price: {
    amount: number;
  };
  address: string;
  city: string;
  images: {
      url: string;
      cover: boolean;
      _id: string;
      id: string;
    }[];
  details: {
    bedroom: number;
    bathroom: number;
    land_area: string;
    parking_space: number;
    features: {
        title: string;
        checked: boolean;
      }[];
  };
  videoLink: string;
  street_view: boolean;
  report: string[];
  createdAt: string;
  id: string;
};

export default function Card({
  card,
  className,
  mapState = false,
  orientation = 'portrait',
}: {
  card: HouseCard;
  className?: string;
  orientation?: string;
  mapState?: boolean;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const onHoverHandler = () => setHover(!hover);
  const borders = orientation === 'portrait' ? styles.border_r : '';
  const cardState =
    orientation === 'landscape' && mapState === false ? styles.portrait : '';
  const cardimgState =
    orientation === 'landscape' && mapState === false
      ? styles.landscape_2
      : styles.landscape_1;

  return (
    <div id={`property-${card.id}`}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
      onClick={() => navigate(`/property-item/${card.id}`)}
      className={`b-radius box_shadow ${styles.card} ${borders} ${className} ${cardState}`}
    >
      <div
        className={`flex f-column s-btw ${styles.above} 
        ${orientation === 'portrait' ? styles.border_r : cardimgState}`}
      >
        <CardImg
          enter={hover}
          src={card.images.find((img) => img.cover)?.url}
          title={card.title}
          date={card.createdAt}
          imgNo={card.images.length}
        />
      </div>

      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <CardHeaderInfo
          type={card.property_type}
          num={card.price.amount}
          featured={card.featured}
          stat={card.status}
        />
        <div className={`flex f-column s-btw gap ${styles.iconWrap}`}>
          <CardAddress title={card.title} address={card.address} />
          <div className={`flex f-width ${styles.icons}`}>
            <CardIcons
              title="bedroom"
              icon={bedIcon}
              num={card.details.bedroom}
            />
            <CardIcons
              title="bathroom"
              icon={showerIcon}
              num={card.details.bathroom}
            />
            <CardIcons
              title="parking spots"
              icon={carIcon}
              num={card.details.parking_space}
            />
          </div>
        </div>
        <CardAgentInfo
          src={card.realtor.agentImg}
          identity={card.realtor.agentName}
        />
      </div>
    </div>
  );
}
