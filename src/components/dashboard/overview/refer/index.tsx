import styles from './invite.module.css';
import ListingData from '../../reusables/ListingData';
import { giftIcon, inviteIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';

export default function Refer() {
  return (
    <div
      className={`flex s-btw pad-block-0 pad-inline-1 b-radius ${styles.invite}`}
    >
      <ListingData
        href={giftIcon}
        data="Refer & Earn"
        title={'invite a realtor and earn 15kbt per referral'}
      />
      <Button className={`flex gap align-y c-pad`}>
        <Svg href={inviteIcon} />
        Invite a realtor
      </Button>
    </div>
  );
}
