import { useNavigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import { bedIcon, showerIcon, carIcon } from '~/assets/icons';
import styles from './card.module.css';
import CardAgentInfo from './CardAgentInfo';
import CardIcons from './CardIcons';
import CardHeaderInfo from './CardHeaderInfo';
import CardAddress from './CardAddress';
import CardImg from './CardImg';
import { Listing } from '~/utils/types/listing.types';

export default function Card({
  card,
  className,
  mapState = false,
  orientation = 'portrait',
  statProps
}: {
  card: Listing;
  className?: string;
  orientation?: string;
  mapState?: boolean;
  statProps?: ReactNode;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const onHoverHandler = () => setHover(!hover);
  const borders = orientation === 'portrait' ? styles.border_r : '';
  const cardState =
    orientation === 'landscape' && mapState === false ? styles.portrait : '';
  const statusOrder =
    orientation === 'landscape' && mapState === false ? 'flex-col' : '';
  const cardimgState =
    orientation === 'landscape' && mapState === false
      ? styles.landscape_2
      : styles.landscape_1;

  return (
    <div
      id={`property-${card.id}`}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
      onClick={() =>
        location.pathname.includes('dashboard')
          ? null
          : navigate(`/property-item/${card.id}`)
      }
      className={`b-radius box_shadow ${styles.card} ${borders} ${className} ${cardState}`}
    >
      <div
        className={`flex f-column s-btw ${styles.above} 
        ${
          orientation === 'portrait'
            ? styles.border_r
            : cardimgState && styles.maxWidth
        }`}
      >
        <CardImg
          enter={hover}
          src={card.cover_image}
          title={card.title}
          date={card.createdAt}
          imgNo={card.images.length}
        />
      </div>

      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <div>
          <CardHeaderInfo
            className={statusOrder}
            type={card.property_type}
            num={card.price.amount}
            stat={card.status}
            featured={card.featured}
          />
          <div className={`flex f-column s-btw ${styles.iconWrap}`}>
            <CardAddress
              title={card.title}
              address={card.address}
              onClick={() => {
                console.log('goat');
                location.pathname.includes('dashboard') &&
                  navigate(`/property-item/${card.id}`);
              }}
            />
            {location.pathname.includes('dashboard') ? null : (
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
            )}
          </div>
        </div>
        {location.pathname.includes('dashboard') ? (
          statProps
        ) : (
          <CardAgentInfo
            src={card.realtor.realtor_pic}
            identity={card.realtor.user.full_name}
          />
        )}
      </div>
    </div>
  );
}
