import React, { useState } from 'react';
import { verifyIcon } from '~/assets/icons';
import styles from './user.module.css';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';

type Props = {
  firstLetter: string;
  lastLetter: string;
  href?: string;
  verified: boolean;
  email: string;
  agentName: string;
  subItems?: {
    icon: string;
    name: string;
    path: string;
  }[];
  drop: boolean;
  closeNav: (arg: boolean) => void;
  handleClick: () => void;
  mouseOver: () => void;
} & React.ComponentProps<'li'>;

const UserItem = ({
  firstLetter,
  lastLetter,
  href,
  email,
  subItems,
  verified,
  className,
  agentName,
  drop,
  handleClick,
  mouseOver,
  closeNav,
}: Props) => {
  const [hover, sethover] = useState(-1);
  const navStateHandler = useResponsiveNav({
    onClick: handleClick,
    onMouseEnter: mouseOver,
    onMouseLeave: mouseOver,
  });

  return (
    <ul
      className={`flex gap ${className} ${styles.nav_item}`}
      {...navStateHandler}
    >
      <li className={`flex align-x align-y ${styles.name_initials}`}>
        <span className={styles.switch}>{firstLetter}</span>
        <span className={styles.switch}>{lastLetter}</span>
        <CardAgentInfo
          className={styles.switch_mobile}
          imgClass={styles.img}
          src={href}
          firstLetter={firstLetter}
          lastLetter={lastLetter}
          identity={
            <div className="flex f-column">
              <b className="flex align-y">
                {agentName}
                {verified ? (
                  <Svg
                    href={verifyIcon}
                    height="1.8em"
                    className={styles.svg}
                  />
                ) : null}
              </b>
              <span>{email}</span>
            </div>
          }
        />
      </li>
      <li className={`${styles.overlay} ${!drop && styles.close_link}`}>
        <ul
          className={`flex f-column b-radius ${styles.drop_down}
            ${drop ? styles.open_link : styles.close_link}`}
        >
          <CardAgentInfo
            className={styles.agentInfo}
            imgClass={styles.img}
            src={href}
            firstLetter={firstLetter}
            lastLetter={lastLetter}
            identity={
              <div className="flex f-column">
                <b className="flex align-y">
                  {agentName}
                  {verified ? (
                    <Svg
                      href={verifyIcon}
                      height="1.8em"
                      className={styles.svg}
                    />
                  ) : null}
                </b>
                <span>{email}</span>
              </div>
            }
          />
          {subItems?.map((item, id) => (
            <li>
              <Link
                to={item.path}
                key={id}
                onMouseEnter={() => sethover(id)}
                onMouseLeave={() => sethover(-1)}
                onClick={() => closeNav(false)}
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
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default UserItem;
