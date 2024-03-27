import styles from './invite.module.css';
import ListingData from '../../reusables/ListingData';
import { giftIcon, inviteIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';
import Invite from '../../invite';
import { useState } from 'react';

export default function Refer() {
  const [invite, setInvite] = useState(false);
  return (
    <div
      className={`flex s-btw pad-block-0 pad-inline-1 b-radius ${styles.invite}`}
    >
      <ListingData
        href={giftIcon}
        data="Refer & Earn"
        title={'invite a realtor and earn 15kbt per referral'}
      />
      <Button 
        onClick={() => setInvite(true)}
        className={`flex gap align-y c-pad`}>
        <Svg href={inviteIcon} />
        Invite a realtor
      </Button>
      <Invite isOpen={invite} exit={() => setInvite(false)} />
    </div>
  );
}
