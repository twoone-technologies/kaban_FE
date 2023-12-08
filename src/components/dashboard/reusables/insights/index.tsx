import styles from './insights.module.css' 
import { Link } from 'react-router-dom';
import { exLinkIcon, eyeIcon, phoneIcon, whatsappIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import ListingData from '../ListingData';
import ItemInfo from '~/components/propertyItem/itemInfo/ItemInfo';

export default function Insights() {
  return (
    <ItemInfo
      h1={'Insights'}
      className={`box_shadow ${styles.insights_wrap}`}
      children={
        <div className={`flex f-width ${styles.insightsDataWrap}`}>
          <ListingData
            className={styles.insights}
            href={eyeIcon}
            data={'3'}
            title={'Total views'}
          />
          <ListingData
            className={styles.insights}
            href={phoneIcon}
            data={'3'}
            title={'Phone Clicks'}
          />
          <ListingData
            className={styles.insights}
            href={whatsappIcon}
            data={'3'}
            title={'Whatsapp Clicks'}
          />
        </div>
      }
      visit={
        <div className="flex pad-1 s-btw">
          <h5>Performance</h5>
          <Link className="flex bg-primary gap" to={''}>
            View insights <Svg href={exLinkIcon} />
          </Link>
        </div>
      }
    />
  );
}
