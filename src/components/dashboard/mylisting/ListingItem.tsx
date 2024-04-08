import styles from './listings.module.css';
import Card, { HouseCard } from '~/components/reusable/card/Card';
import { editIcon, publishIcon, refreshIcon, trashIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';

type Props = {
  submited?: string;
  expiring?: string;
  expired?: string;
  listArr: HouseCard[];
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
        <div key={item.id} id={`card-${item.id}`} 
          className={`pad flex ${styles.listItemGrp}
            ${location.hash.substring(1) === item.id ? styles.activeItem : ''}`}>
          <Card
            card={item}
            orientation="landscape"
            className={styles.card}
            statProps={
              <div className={`flex s-btw ${styles.btmDetails}`}>
                {item.status === 'draft' || <span>submited:{submited}</span>}
                {item.status === 'published' && (
                  <span>expiring:{expiring}</span>
                )}
                {item.status === 'expired' && <span>expired:{expired}</span>}
                <div
                  className={`flex gap-1 ${
                    item.status === 'draft' ? styles.iconGrp : null
                  }`}
                >
                  <Svg href={trashIcon} />
                  {!item.featured && item.status === 'published' && (
                    <Svg href={publishIcon} />
                  )}
                  {item.status === 'expired' && <Svg href={refreshIcon} />}
                  <Svg href={editIcon} />
                </div>
              </div>
            }
          />
        </div>
      ))}
    </>
  );
}
