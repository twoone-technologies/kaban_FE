import Svg from '~/components/reusable/Svg';
import Container from '../../reusable/Container';
import styles from './sidebar.module.css';
import { logoIcon, giftIcon, inviteIcon, verifyIcon } from '~/assets/icons';
import { Link } from 'react-router-dom';
import { sidebarArr } from './sidebar';
import Button from '~/components/reusable/Button';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { IkonIcon } from '~/assets/img';
import { ReactNode, useState } from 'react';
import Invite from '../invite';

type Props = {
  className?: string;
  koinNode?: ReactNode;
  agentClass?: string;
  referClass?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
};

export default function Sidebar({
  className,
  koinNode,
  setOpen,
  agentClass,
  referClass,
  onClick,
}: Props) {
  const route = location.pathname?.split('/')[2];
  const [invite, setInvite] = useState(false);

  return (
    <Container
      element="section"
      className={`flex f-column s-btw gap-05 ${className} ${styles.sidebar}`}
    >
      <>
        <Link to={'/'} className="pad-1">
          <Svg width="5rem"
            href={logoIcon}
            height="2.5rem"
            className="bg-primary"
          />
        </Link>
        {koinNode}
        <ul className="flex f-column">
          <li className={`flex pad-1 f-width align-y`}>
            <h3>Main</h3>
          </li>
          {sidebarArr.map((link) => (
            <li key={link.svg}>
              <Link onClick={onClick}
                className={`flex gap-1 pad-1 f-width align-y ${styles.link}
              ${link.link === route && styles.isActive}`}
                to={`dashboard/${link.link}`}
              >
                <Svg href={link.svg} />
                <span>{link.route}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`flex f-column b-radius pad gap ${referClass} ${styles.refer}`}
        >
          <div className={`flex align-y align-x ${styles.svgWrap}`}>
            <Svg href={giftIcon} />
          </div>
          <h4>Refer & Earn</h4>
          <span>Invite a realtor and earn 15kbt per referral</span>
          <Button
            onClick={() => setInvite(true)}
            className="flex gap align-x align-y"
          >
            <Svg href={inviteIcon} />
            invite a realtor
          </Button>
          <Invite isOpen={invite} exit={() => setInvite(false)} />
        </div>
      </>
      <CardAgentInfo setOpen={setOpen}
        star={4} src={IkonIcon} imgClass={styles.img}
        className={`pad-1 ${agentClass} ${styles.cardAgentInfo}`}
        identity={
          <div>
            <div className="flex gap">
              <h4>pkqmdkwemg</h4>
              <Svg href={verifyIcon} height='1.4rem' className={styles.svg} />
            </div>
            <span>nksdnksjd@dd.com</span>
          </div>
        }
      />
    </Container>
  );
}
