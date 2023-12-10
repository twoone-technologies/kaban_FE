import Svg from '~/components/reusable/Svg';
import Container from '../../reusable/Container';
import styles from './sidebar.module.css';
import {
  logoIcon,
  buildingsIcon,
  houseViewIcon,
  insightsIcon,
  supportIcon,
  walletIcon,
  giftIcon,
  inviteIcon,
  verifyIcon,
} from '~/assets/icons';
import { Link } from 'react-router-dom';
import { sidebarArr } from './sidebar';
import Button from '~/components/reusable/Button';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { IkonIcon } from '~/assets/img';

export default function Sidebar() {
  return (
    <Container
      element="section"
      className={`flex f-column gap-05 ${styles.sidebar}`}
    >
      <Link to={'/'} className="pad-1">
        <Svg
          href={logoIcon}
          height="2.5rem"
          width="5rem"
          className="bg-primary"
        />
      </Link>
      <ul className="flex f-column">
        <li className={`flex pad-1 f-width align-y`}>
          <h5>Main</h5>
        </li>
        {sidebarArr.map((link) => (
          <li key={link.svg}>
            <Link className={`flex gap-1 pad-1 f-width align-y ${styles.link}`} to={`dashboard/${link.link}`}>
              <Svg href={link.svg} />
              <span>{link.route}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`flex f-column b-radius pad gap ${styles.refer}`}>
        <div className={`flex align-y align-x ${styles.svgWrap}`}>
          <Svg href={giftIcon} /></div>
        <h4>Refer & Earn</h4>
        <span>Invite a realtor and earn 15kbt per referral</span>
        <Button className='flex gap align-x align-y'>
          <Svg href={inviteIcon} />
          invite a realtor
        </Button>
      </div><hr className={styles.hr} />
      <CardAgentInfo star={4} 
        className={`pad-1 ${styles.cardAgentInfo}`}
        imgClass={styles.img}
        src={IkonIcon}
        identity={
          <div>
            <div className='flex gap'>            
            <h4>pkqmdkwemg</h4>
              <Svg href={verifyIcon} className={styles.svg} />
            </div>
            <span>nksdnksjd@dd.com</span>
          </div>
      } />
    </Container>
  );
}
