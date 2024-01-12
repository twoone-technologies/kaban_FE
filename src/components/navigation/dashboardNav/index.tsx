import { bellIcon, kbtIcon } from '~/assets/icons';
import styles from './nav.module.css';
import Svg from '~/components/reusable/Svg';
import Button from '~/components/reusable/Button';
import { useLocation } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import useInteractiveNav from '~/hooks/useInteractiveNav';
import Sidebar from '~/components/dashboard/sidebar';

export default function NavBoard() {
  const location = useLocation();
  const route = location.pathname.split('/')[2];
  const header = route.charAt(0).toUpperCase() + route.slice(1);

  const { open, goingUp, navBar, setOpen } = useInteractiveNav();
  if (open === true) document.body.style.overflowY = 'hidden'
  else document.body.style.overflowY = ''

  return (
    <>
      <div className={`flex f-width s-btw align-y
        ${goingUp && styles.slideUp} ${navBar && styles.slideBg} ${styles.navBar}`}>
        <h4>{header}</h4>
        <div className={`flex align-y gap-2`}>
          <div className={`flex gap ${styles.coinWrap}`}>
            <Svg href={kbtIcon} />
            <div className={`flex f-column ${styles.currency}`}>
              <small>100.00</small>
              <small>≈ ₦1000</small>
            </div>
          </div>
          <div className={`flex align-y align-x ${styles.bellWrap}`}>
            <Svg href={bellIcon} />
          </div>
          <Button className={`c-pad ${styles.btn}`}>Post a Property</Button>
          <HamburgerMenu
            className={styles.menuBtn}
            open={open}
            onClick={() => setOpen(!open)}
          />
          <Sidebar
            className={`${open && styles.isVisible} ${styles.mobileNav}`}
            koinNode={
              <div className={`flex s-btw pad-15 ${styles.coinAlert}`}>
                <div className={`flex gap ${styles.navCoinWrap}`}>
                  <Svg href={kbtIcon} />
                  <div className={`flex f-column ${styles.navCurrency}`}>
                    <small>100.00</small>
                    <small>≈ ₦1000</small>
                  </div>
                </div>
                <div className={`flex align-y align-x ${styles.navBellWrap}`}>
                  <Svg href={bellIcon} />
                </div>
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
