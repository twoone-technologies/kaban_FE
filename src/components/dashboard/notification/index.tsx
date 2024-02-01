import { Wrapper } from "~/components/reusable/Container";
import styles from './notification.module.css'
import NotificationList from "~/components/dashboard/notification/alertComponents/NotificationList";
import { msg } from "~/components/navigation/dashboardNav/msg";
import useNotifySwitch from "~/hooks/useNotifySwitch";

export default function Notification() {
  const {stat, msgArr, mailArr, unread, handleMsg, handleMarkAll} = useNotifySwitch(msg)

  return (
    <Wrapper element="section" className={`flex f-column ${styles.notification}`}>
      <NotificationList
        markAll={handleMarkAll}
        allMsg={mailArr.length}
        unreadMsg={unread.length}
        mailStat={stat}
        mailBoxArr={msgArr}
        clickAll={() => handleMsg('all')}
        clickUnread={() => handleMsg('unread')}
      />
    </Wrapper>
  )
}