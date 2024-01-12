import styles from './micellenous.module.css'
import Gallery from '../carousel/Gallery';
import { HouseCard } from '~/components/reusable/card/Card';
import Label from '~/components/reusable/card/Label';
import { locationIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';

export default function GalleryAndHeader({item}: {item: HouseCard}) {
  return (
    <>
      <Gallery item={item} />
      <div className={`flex f-column gap ${styles.header}`}>
        <h5>{item?.property_type}</h5>
        <div className={`flex gap ${styles.status_grp}`}>
          {item?.featured ? (
            <Label type="featured" />
          ) : null}
          <Label type={item?.status} />
        </div>
      </div>
      <div className={`flex gap s-btw ${styles.title_price}`}>
        <div className={`flex gap f-column`}>
          <h3>{item?.title}</h3>
          <small>
            <Svg height="1.33rem" href={locationIcon} />
            {item?.address}
          </small>
        </div>
        <h3>₦{item?.price.amount.toLocaleString()}/annum</h3>
      </div>
    </>
  );
}
