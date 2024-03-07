import { bellIcon, kbtIcon } from '~/assets/icons';
import styles from './nav.module.css';
import Svg from '~/components/reusable/Svg';
import { useLocation } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import useInteractiveNav from '~/hooks/useInteractiveNav';
import Sidebar from '~/components/dashboard/sidebar';
import { Link } from 'react-router-dom';
import { msg } from './msg';
import useNotifySwitch from '~/hooks/useNotifySwitch';
import NotificationList from '~/components/dashboard/notification/alertComponents/NotificationList';

export default function NavBoard() {
  const location = useLocation();
  const route = location.pathname.split('/')[2];
  const header = route.charAt(0).toUpperCase() + route.slice(1);

  const { open, goingUp, setOpen } = useInteractiveNav();
  if (open === true) document.body.style.overflowY = 'hidden';
  else document.body.style.overflowY = '';

  const {stat, msgArr, hover, unread, mailArr, setHover, handleMarkAll, handleMsg} = useNotifySwitch(msg)

  return (
    <>
      <div
        className={`flex f-width s-btw align-y
        ${goingUp && styles.slideUp} ${styles.navBar}`}
      >
        <h3><b>{header}</b></h3>
        <div className={`flex align-y gap-2`}>
          <div className={`flex gap ${styles.coinWrap}`}>
            <Svg href={kbtIcon} />
            <div className={`flex f-column ${styles.currency}`}>
              <small>100.00</small>
              <small>≈ ₦1000</small>
            </div>
          </div>
          <Link
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex align-y align-x ${styles.bellWrap}
            ${msgArr.find((item) => item.viewed === false) ? styles.alert :''}
            ${location.pathname === '/dashboard/notification' ? styles.active :''}`}
            to={'dashboard/notification'}
          >
            <Svg href={bellIcon} />
          </Link>
          <NotificationList
            mailStat={stat} mailBoxArr={msgArr}
            allMsg={mailArr.length} unreadMsg={unread.length}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            clickAll={() => handleMsg('all')}
            clickUnread={() => handleMsg('unread')}
            className={`${styles.tooltip} ${hover ? '' : styles.hide}
              ${location.pathname === '/dashboard/notification' ? styles.hide : ''}`}
            markAll={handleMarkAll}      
          />
          <Link to={'dashboard/post'} className={`c-pad b-radius ${styles.btn}`}>post a property</Link>
          <HamburgerMenu
            className={styles.menuBtn}
            open={open}
            onClick={() => setOpen(!open)}
          />
          <Sidebar
            className={`${open && styles.isVisible} ${styles.mobileNav}`}
            koinNode={
              <div className="flex f-column align-x pad-inline-1">
                <div className={`flex s-btw ${styles.coinAlert}`}>
                  <div className={`flex gap ${styles.navCoinWrap}`}>
                    <Svg href={kbtIcon} />
                    <div className={`flex f-column ${styles.navCurrency}`}>
                      <small>100.00</small>
                      <small>≈ ₦1000</small>
                    </div>
                  </div>
                  <div className={`flex align-y align-x ${styles.navBellWrap}`}>
                    <Link onClick={() => setOpen(false)}
                      className={`flex align-y align-x ${styles.bellWrap}
                      ${msgArr.find((item) => item.viewed === false) ? styles.alert : ''}
                      ${location.pathname === '/dashboard/notification' ? styles.active : ''}`}
                      to={'dashboard/notification'}
                    >
                      <Svg href={bellIcon} />
                    </Link>
                  </div>
                </div>
                <Link onClick={() => setOpen(false)} 
                  to={'/dashboard/post'} 
                  className={`pad-block-0 ${styles.postBtn}`}
                >
                  post a property
                </Link>
              </div>
            }
            onClick={() => setOpen(false)}
            agentClass={styles.agentCard}
          />
        </div>
      </div>
    </>
  );
}
