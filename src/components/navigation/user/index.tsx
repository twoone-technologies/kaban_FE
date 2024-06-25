import React, { useState } from 'react';
import { verifyIcon } from '~/assets/icons';
import styles from './user.module.css';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { useAppSelector } from '~/api/hooks';
import { getUserData } from '../navbarData';
import Invite from '~/components/dashboard/invite';
import { useGetRealtorQuery } from '~/api/features/realtor';

type Props = {
  drop: boolean;
  closeNav: (arg: boolean) => void;
  handleClick: () => void;
  mouseEnter: () => void;
  mouseLeave: () => void;
} & React.ComponentProps<'li'>;

const UserItem = ({
  drop,
  handleClick,
  mouseEnter,
  mouseLeave,
  closeNav,
}: Props) => {
  const authState = useAppSelector((state) => state.auth);
  const userData = getUserData(() => setInvite(true));
  const [hover, sethover] = useState(-1);
  const [invite, setInvite] = useState(false);
  const navStateHandler = useResponsiveNav({
    onClick: handleClick,
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave,
  });
  const {data} = useGetRealtorQuery(authState.realtor.id || '');

  return (
    <ul
      className={`flex gap w-full md:w-16 ${styles.nav_item}`}
      {...navStateHandler}
    >
      <li className={`flex align-x align-y ${styles.name_initials}`}>
        <span className={styles.switch}>
          {authState.fullName?.split(' ')[0]?.split('')[0]}
        </span>
        <span className={styles.switch}>
          {authState.fullName?.split(' ')[1]?.split('')[0]}
        </span>
        <CardAgentInfo
          className={styles.switch_mobile}
          src={data?.realtor_pic}
          firstLetter={authState.fullName?.split(' ')[0]?.split('')[0]}
          lastLetter={authState.fullName?.split(' ')[1]?.split('')[0]}
          identity={
            <div className="flex f-column">
              <b className="flex align-y">
                {authState?.fullName}
                {authState.realtor?.verification_status ? (
                  <Svg
                    href={verifyIcon}
                    height="1.8rem"
                    className={styles.svg}
                  />
                ) : null}
              </b>
              <span>{authState?.email}</span>
            </div>
          }
        />
      </li>
      <li className={`${styles.overlay} ${!drop && styles.close_link}`}>
        <ul
          className={`flex f-column b-radius ${styles.drop_down}
            ${drop ? styles.open_link : styles.close_link}`}
        >
          <Invite isOpen={invite} exit={() => setInvite(false)} />
          <CardAgentInfo
            className={styles.agentInfo}
            imgClass={styles.img}
            src={data?.realtor_pic}
            firstLetter={authState.fullName?.split(' ')[0]?.split('')[0]}
            lastLetter={authState.fullName?.split(' ')[1]?.split('')[0]}
            identity={
              <div className="flex f-column">
                <b className="flex align-y">
                  {authState?.fullName}
                  {authState.realtor?.verification_status ? (
                    <Svg
                      href={verifyIcon}
                      height="1.8rem"
                      className={styles.svg}
                    />
                  ) : null}
                </b>
                <span>{authState?.email}</span>
              </div>
            }
          />
          {userData?.map((item, id) => (
            <Link
              to={item.path ?? '.'}
              key={id}
              onMouseEnter={() => sethover(id)}
              onMouseLeave={() => sethover(-1)}
              onClick={() => {
                closeNav(false);
                handleClick();
                if (item.onClick) item.onClick();
              }}
              className={`flex pad b-radius ${styles.nav_item_link}`}
            >
              {hover === id && drop ? (
                <Svg
                  href={`${item.icon}`}
                  className={`${drop ? styles.blue : styles.ash}`}
                />
              ) : (
                <Svg
                  href={`${item.icon}`}
                  className={`${drop ? styles.ash : styles.ash}`}
                />
              )}
              <span>{item.name}</span>
            </Link>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default UserItem;
