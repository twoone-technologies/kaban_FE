import { mailIcon } from '~/assets/icons';
import styles from '~/components/dashboard/notification/notification.module.css';
import Svg from '~/components/reusable/Svg';
import { MailBox } from './NotificationList';
import { dateHandler } from '~/components/reusable/FunctionUtils';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: MailBox;
  page: string;
  idx: string;
}

export default function Mail({ item, page, idx }: Props) {
  const navigate = useNavigate()

  return (
    <div className={styles.mailbox}>
      <div className={`flex align-y gap pad-inline-1 pad-block-0 
          ${styles.msgItem} ${item.viewed ? '' : styles.notRead}`}
      >
        <div className={`flex align-y align-x ${styles.svgWrap}`}>
          <Svg href={mailIcon} />
        </div>
        <div className={`f-width ${styles.text}
          ${location.pathname === '/dashboard/notification'
          ? `flex ${styles.msgOrder}` : ''}`}
          onClick={() =>  {
            navigate(`/dashboard/${page}${idx ?? idx}`)
          }}
        >
          <p>{item.note}</p>
          <small>{dateHandler(item.createdAt)}</small>
        </div>
      </div>
    </div>
  );
}
