import { buildingsIcon, exLinkIcon } from '~/assets/icons';
import styles from './agent.module.css';
import ListingData from '../../reusables/ListingData';
import { Link } from 'react-router-dom';
import Svg from '~/components/reusable/Svg';
import { useAppSelector } from '~/api/hooks';
import { useGetRealtorQuery } from '~/api/features/realtor';

export default function AgentStat() {
  const authState = useAppSelector((state) => state.auth);
  const { data } = useGetRealtorQuery(authState.realtor.id || '');
  return (
    <div
      className={`flex f-column f-width gap b-radius ${styles.accountDetails}`}
    >
      <div className={`pad-15`}>
         <h3>Hello, <b>{data?.user.full_name}</b></h3>
         <p>Hello, we're happy to have you here!</p>
      </div>
      <div className={`flex b-radius pad-1 ${styles.listingInfo}`}>
        <ListingData
          data={'6'}
          header
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
        <Link to={'/dashboard/listings'}>
          <small className="flex align-y bg-primary gap">
            View listings <Svg href={exLinkIcon} height="1.5rem" width="1rem" />
          </small>
        </Link>
      </div>
    </div>
  );
}
