import { cameraIcon, heartIcon } from '~/assets/icons';
import styles from './card.module.css';
import { dateHandler } from '../FunctionUtils';
import Svg from '../Svg';
import { Listing } from '~/utils/types/listing.types';

type Props = {
  enter: boolean;
  cardProps: Listing;
};

export default function CardImg({ cardProps, enter }: Props) {
  return (
    <>
      <div
        className={`f-width ${styles.overlay}
        ${enter ? styles.nil : ''}`}
      ></div>
      <img
        alt={cardProps.title}
        src={cardProps?.cover_image}
        className={`${styles.img} ${enter ? styles.scale : ''}`}
      />
      {location.pathname.includes('dashboard') ? null : (
        <div className={`flex s-btw f-width`}>
          <small className={`b-radius stack c-pad ${styles.date}`}>
            {dateHandler(cardProps.createdAt)}
          </small>
          <Svg className={`stack`} href={heartIcon} />
        </div>
      )}
      <div className="flex stack align-y">
        <Svg href={cameraIcon} />
        <span>{cardProps.images.length}</span>
      </div>
    </>
  );
}
