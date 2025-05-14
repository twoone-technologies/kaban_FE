import styles from "~/components/dashboard/notification/notification.module.css";
import Svg from "~/components/reusable/Svg";
import { arrowLeftIcon, arrowRightIcon, mailIcon } from "~/assets/icons";
import SeeAllNotification from "~/components/dashboard/notification/alertComponents/SeeAllNotification";
import Mail from "~/components/dashboard/notification/alertComponents/Mail";
import { useLocation } from "react-router-dom";
import { Pagination } from "swiper/modules";

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

export default function NotificationList({
  allMsg,
  unreadMsg,
  className,
  mailStat,
  onMouseEnter,
  clickAll,
  clickUnread,
  onMouseLeave,
  mailBoxArr,
  markAll,
}: Props) {
  const location = useLocation();

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`b-radius ${styles.notification} ${className}`}
    >
      <div className={`flex pad-inline-1 pad-block-0 s-btw ${styles.header}`}>
        <h3
          className={
            location.pathname === "/dashboard/notification" ? "bg-primary" : ""
          }
        >
          Notifications
        </h3>
        <div className={`flex gap-2 ${styles.options}`}>
          <span onClick={markAll}>Mark all as Read</span>
        </div>
      </div>
      <div
        className={`flex gap-2 pad-inline-1 pad-block-0 
        ${styles.select} ${mailBoxArr.length === 0 ? styles.accent : ""}`}
      >
        <label
          className={`${styles.label}
          ${mailStat === "all" ? styles.all : styles.unread}`}
          htmlFor="button"
        ></label>
        <div
          onClick={clickAll}
          className={`flex gap 
          ${
            mailStat === "all" && mailBoxArr.length !== 0
              ? styles.isActive
              : styles.notActive
          }`}
        >
          <span>All</span>
          <span>({mailBoxArr && allMsg})</span>
        </div>
        <div
          onClick={clickUnread}
          className={`flex gap  
          ${mailStat === "unread" ? styles.isActive : styles.notActive}`}
        >
          <span>Unread</span>
          <span>({mailBoxArr && unreadMsg})</span>
        </div>
      </div>
      <div className={`${styles.msg}`}>
        {mailBoxArr.length === 0 ? (
          <div className="flex items-center justify-center f-column pad">
            <div className={`flex align-y align-x ${styles.svgWrap}`}>
              <Svg href={mailIcon} />
            </div>
            <span>no new notification</span>
          </div>
        ) : (
          <>
            <div className={location.pathname === '/dashboard/notification'? '' : styles.mailbox}>
              {mailBoxArr.map((mail) => (
                <Mail
                  key={mail.id}
                  item={mail}
                  page={mail.entity.split("::")[0]}
                  idx={`#${mail.entity.split("::")[1]}`}
                />
              ))}
            </div>
            <SeeAllNotification />
            <div className={`flex justify-between border p-4 ${styles.pagination}`}>
          <div className="flex gap">
            <Svg href={arrowLeftIcon} width="1.2rem" height="1.2rem" /> Prev
          </div>
          <div className="flex gap">
            <span className={styles.td}>2</span>
            <span className={styles.td}>3</span>
            <span className={styles.td}>4</span>
            <span className={styles.td}>5</span>
          </div>
          <div className="flex gap">
            Next <Svg href={arrowRightIcon}  width="1.2rem"  height="1.2rem" />
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}
