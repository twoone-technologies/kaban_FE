import { buildingsIcon, exLinkIcon, kbtIcon } from '~/assets/icons';
import styles from './agent.module.css';
import ListingData from '../ListingData';
import { Link } from 'react-router-dom';
import Svg from '~/components/reusable/Svg';

export default function AgentStat() {
  return (
    <div
      className={`flex f-column f-width gap b-radius ${styles.accountDetails}`}
    >
      <div className={`pad-15`}>
        <div className={`flex s-btw ${styles.header}`}>
          <h3>Welcome, FISHER</h3>
          <div className={`flex gap-15`}>
            <span>Balance(KBT)</span>
            <div className={`flex gap`}>
              <Svg href={kbtIcon} />
              <div className={`flex f-column ${styles.currency}`}>
                <small>100.00</small>
                <small>≈ ₦1000</small>
              </div>
            </div>
          </div>
        </div>
        <p>Hello, we're happy to have you here!</p>
      </div>
      <div className={`flex b-radius pad-1 ${styles.listingInfo}`}>
        <ListingData
          data={'6'}
          href={buildingsIcon}
          className={styles.l_data}
          title={'Total listing'}
        />
        <div className={`flex gap-1 ${styles.dataGrp}`}>
          <ListingData data={'3'} title={'Listing for rent'} />
          <ListingData data={'3'} title={'Listing for sale'} />
          <ListingData data={'3'} title={'Expired Listings'} />
        </div>
      </div>
      <div className={`flex s-btw pad-15 ${styles.report}`}>
        <small>Your property portfolio report</small>
        <Link to={''}>
          <small className="flex align-y bg-primary gap">
            View listings <Svg href={exLinkIcon} height="1.5rem" width="1rem" />
          </small>
        </Link>
      </div>
    </div>
  );
}
