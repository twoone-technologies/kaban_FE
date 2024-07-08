import styles from './listings.module.css';
import Card from '~/components/reusable/card/Card';
import { editIcon, publishIcon, refreshIcon, trashIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';
import { Listing } from '~/utils/types/listing.types';

type Props = {
  submited?: string;
  expiring?: string;
  expired?: string;
  listArr: Listing[];
};

export default function ListingItem({
  submited,
  expiring,
  expired,
  listArr,
}: Props) {
  return (
    <>
      {listArr.map((item) => (
        <div
          key={item.id}
          id={`card-${item.id}`}
          className={`pad flex ${styles.listItemGrp}
            ${location.hash.substring(1) === item.id ? styles.activeItem : ''}`}
        >
          <Card
            card={item}
            orientation="landscape"
            className={styles.card}
            statProps={
              <div className={`flex s-btw ${styles.btmDetails}`}>
                {item.draft === 'draft' || <span>submited:{submited}</span>}
                {item.published === 'published' && (
                  <span>expiring:{expiring}</span>
                )}
                {item.expired === 'expired' && <span>expired:{expired}</span>}
                <div
                  className={`flex gap-1 ${
                    item.draft === 'draft' ? styles.iconGrp : null
                  }`}
                >
                  <Svg href={trashIcon} />
                  {!item.featured && item.published === 'published' && (
                    <Svg href={publishIcon} />
                  )}
                  {item.expired === 'expired' && <Svg href={refreshIcon} />}
                  <Link to={`/dashboard/property_edit/${item.id}`}>
                    <Svg href={editIcon} />
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      ))}
    </>
  );
}
