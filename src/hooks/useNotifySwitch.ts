import { useState } from "react"
import { MailBox } from "~/components/dashboard/notification/alertComponents/NotificationList";

export default function useNotifySwitch(arr: MailBox[]) {
  const [hover, setHover] = useState(false);
  const [stat, setStat] = useState<'all' | 'unread' | null>('all');
  const [msgArr, setMsgArr] = useState<MailBox[]>(arr);
  const [mailArr, _] = useState(msgArr)
  const [unread, setUnread] = useState([...mailArr.filter((item) => item.viewed === false)])

  function handleMsg(stat: 'all' | 'unread') {
    setStat(stat);
    stat === 'unread' && setMsgArr( msgArr.filter((item: MailBox) => item.viewed === false));
    stat === 'all' && setMsgArr([...arr]);
  }

  const handleMarkAll = () => {
    setMsgArr(prev => prev.map(item => ({...item, viewed: true})))
    setUnread([])
  }

  return {stat, msgArr, hover, unread, mailArr, setHover, handleMsg, setMsgArr, handleMarkAll}
}