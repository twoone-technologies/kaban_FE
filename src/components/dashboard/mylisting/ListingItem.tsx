import styles from './listings.module.css';
import Card from '~/components/reusable/card/Card';
import { editIcon, publishIcon, refreshIcon, trashIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';
import { Listing } from '~/utils/types/listing.types';
import { dateHandler } from '~/components/reusable/FunctionUtils';

type Props = {
  submited?: string;
  expiring?: string;
  expired?: string;
  listArr: Listing[];
};

export default function ListingItem({
  listArr,
}: Props) {
  return (
    <div className='gap-1 flex flex-col'>
      {listArr.map((item) => {
        const isExpired = new Date(item.expiresAt) < new Date();

        return (
          <div
            key={item.id}
            id={`card-${item.id}`}
            className={`flex ${styles.listItemGrp}
              ${location.hash.substring(1) === item.id ? styles.activeItem : ''}`}
          >
            <Card card={item} orientation="landscape" className={styles.card}>
              <div className={`flex px-3 pb-3 s-btw ${styles.btmDetails}`}>
                <div className="flex gap flex-row flex-wrap">
                  {!item.draft && <span>submitted: {dateHandler(item.createdAt)},</span>}
                  {item.published_status === 'published' && !isExpired && (
                    <span>expiring: {dateHandler(item.expiresAt)},</span>
                  )}
                  {isExpired && <span>expired: {dateHandler(item.expiresAt)}</span>}
                </div>
                <div className={`flex gap-1 ${item.draft ? styles.iconGrp : null}`}>
                  <Svg href={trashIcon} />
                  {!item.featured && item.published === 'published' && (
                    <Svg href={publishIcon} />
                  )}
                  {isExpired && <Svg href={refreshIcon} />}
                  <Link to={`/dashboard/property_edit/${item.id}`}>
                    <Svg href={editIcon} />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
