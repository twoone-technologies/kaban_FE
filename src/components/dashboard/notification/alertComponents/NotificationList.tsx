import styles from '~/components/dashboard/notification/notification.module.css'
import Svg from '~/components/reusable/Svg';
import { mailIcon } from '~/assets/icons';
import SeeAllNotification from '~/components/dashboard/notification/alertComponents/SeeAllNotification';
import Mail from '~/components/dashboard/notification/alertComponents/Mail';

type Props = {
  className?: string;
  mailBoxArr: MailBox[];
  mailStat: string | null;
  allMsg: number;
  unreadMsg: number;
  onMouseLeave?: () => void;
  markAll: () => void;
  onMouseEnter?: () => void;
  clickAll: () => void;
  clickUnread: () => void;
  setClearState?: () => void;
};

export type MailBox = {
  id: string;
  entity: string;
  viewed: boolean;
  note: string;
  createdAt: string;
};

export default function NotificationList({ allMsg, unreadMsg, className, mailStat,
  onMouseEnter, clickAll, clickUnread, onMouseLeave, mailBoxArr, markAll }: Props) {

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className={`b-radius ${styles.notification} ${className}`}
    >
      <div className={`flex pad-inline-1 pad-block-0 s-btw ${styles.header}`}>
        <h3 className={location.pathname === '/dashboard/notification'
          ? 'bg-primary' : ''}>
          Notifications
        </h3>
        <div className={`flex gap-2 ${styles.options}`}>
          <span onClick={markAll}>Mark all as Read</span>
        </div>
      </div>
      <div className={`flex gap-2 pad-inline-1 pad-block-0 
        ${styles.select} ${mailBoxArr.length === 0 ? styles.accent : ''}`}
      >
        <label
          className={`${styles.label}
          ${mailStat === 'all' ? styles.all : styles.unread}`}
          htmlFor="button">
        </label>
        <div onClick={clickAll}
          className={`flex gap 
          ${mailStat === 'all' && mailBoxArr.length !== 0
            ? styles.isActive : styles.notActive}`}
        >
          <span>All</span><span>({mailBoxArr && allMsg})</span>
        </div>
        <div onClick={clickUnread} className={`flex gap  
          ${mailStat === 'unread' ? styles.isActive : styles.notActive}`}
        >
          <span>Unread</span><span>({mailBoxArr && unreadMsg})</span>
        </div>
      </div>
      <div className={`${styles.msg}`}>
        {mailBoxArr.length === 0 ? (
          <div className='flex align-x align-y f-column pad'>
            <div className={`flex align-y align-x ${styles.svgWrap}`}>
              <Svg href={mailIcon} />
            </div>
            <span>no new notification</span>
          </div>
          ) : (
          <>
            <div className={styles.mailbox}>
              {mailBoxArr.map(mail => (
                <Mail key={mail.id} item={mail} 
                  page={mail.entity.split('::')[0]} 
                  idx={`#${mail.entity.split('::')[1]}`}
                />
              ))}
            </div>
            <SeeAllNotification />
          </>
        )}
      </div>
    </div>
  );
}
