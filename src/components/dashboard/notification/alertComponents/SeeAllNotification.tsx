import { Link } from 'react-router-dom';
import { exLinkIcon } from '~/assets/icons';
import styles from '~/components/dashboard/notification/notification.module.css';
import Svg from '~/components/reusable/Svg';

export default function SeeAllNotification() {
  return (
    <Link to={'dashboard/notification'}
      className={`flex bg-primary b-radius s-btw pad-inline-1 pad-block-0 
      ${styles.clearMsg}
      ${location.pathname === '/dashboard/notification' ? styles.nil : ''}`}
    >
      <b>See all notifications</b>
      <Svg href={exLinkIcon} />
    </Link>
  );
}
