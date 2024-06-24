import Svg from '~/components/reusable/Svg';
import Container from '../../reusable/Container';
import styles from './sidebar.module.css';
import { logoIcon, giftIcon, inviteIcon, verifyIcon } from '~/assets/icons';
import { Link } from 'react-router-dom';
import { sidebarArr } from './sidebar';
import Button from '~/components/reusable/Button';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { ReactNode, useState } from 'react';
import Invite from '../invite';
import { useLocation, useNavigate } from 'react-router-dom';
import { profileIcon, sign_outIcon } from '~/assets/icons';
import { useAppSelector } from '~/api/hooks';
import { Logout } from '~/api/slices/auth';
import { store } from '~/api/store';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import { useGetRealtorQuery } from '~/api/features/realtor';

type Props = {
  className?: string;
  koinNode?: ReactNode;
  agentClass?: string;
  referClass?: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
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
  const location = useLocation();
  const route = location.pathname?.split('/')[2];
  const [invite, setInvite] = useState(false);
  const navigate = useNavigate();
  const options = useResponsiveNav({
    onMouseEnter: () => setDropDown(true),
    onMouseLeave: () => setDropDown(false),
    onClick: () => setDropDown(!dropDown),
  });
  const [dropDown, setDropDown] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const Signout = () => {
    navigate('/');
    setOpen && setOpen(false);
    setDropDown(false);
    const timeoutId = setTimeout(() => {
      Logout(store.dispatch);
    }, 1000);
    return () => clearTimeout(timeoutId);
  };
  const { data } = useGetRealtorQuery(auth.realtor.id || '');

  return (
    <Container
      element="section"
      className={`flex f-column s-btw gap-05 ${className} ${styles.sidebar}`}
    >
      <>
        <Link to={'/'} className="pad-1">
          <Svg
            width="5rem"
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
              <Link
                onClick={onClick}
                className={`flex gap-1 pad-1 f-width align-y ${styles.link}
                ${
                  (link.link === route && styles.isActive) ||
                  (link.link === '.' && route === undefined && styles.isActive)
                }
                `}
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
      <div className="relative">
        <CardAgentInfo
          {...options}
          star={data?.rating}
          src={data?.realtor_pic}
          firstLetter={auth.fullName?.split(' ')[0]?.split('')[0]}
          lastLetter={auth.fullName?.split(' ')[1]?.split('')[0]}
          className={`pad-1 ${agentClass} ${styles.cardAgentInfo}`}
          identity={
            <>
              <div className="flex gap">
                <h4>{auth.fullName}</h4>
                {data?.verified && (
                  <Svg
                    href={verifyIcon}
                    height="1.4rem"
                    className={styles.svg}
                  />
                )}
              </div>
              <span className='text-xs'>{auth.email}</span>
            </>
          }
        />
        {location.pathname.includes('/dashboard') && (
          <div
            {...options}
            className={`b-radius w-full transition-all absolute 
          ${styles.dropdown} 
          ${dropDown === false ? styles.close : styles.open}`}
          >
            <div
              className="flex gap align-y p-4"
              onClick={() => {
                navigate('/dashboard/profile_edit');
                setOpen && setOpen(false);
                setDropDown(false);
              }}
            >
              <Svg href={profileIcon} />
              <span>Profile</span>
            </div>
            <div className="flex gap align-y p-4" onClick={Signout}>
              <Svg href={sign_outIcon} />
              <span>Sign Out</span>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
