import { ReactNode, useState } from 'react';
import styles from './card.module.css';
import Rating from '~/components/propertyItem/micellenous/Rating';
import { useLocation, useNavigate } from 'react-router-dom';
import Svg from '../Svg';
import { profileIcon, sign_outIcon } from '~/assets/icons';

type AgentProps = {
  src?: string | undefined;
  firstLetter?: string;
  lastLetter?: string;
  identity: string | undefined | ReactNode;
  star?: number;
  imgClass?: string;
} & React.ComponentProps<'div'>;

export default function CardAgentInfo({
  src,
  identity,
  firstLetter,
  lastLetter,
  star,
  imgClass,
  className,
}: AgentProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [dropDown, setDropDown] = useState(false)

  return (
    <div
      onClick={() => setDropDown(!dropDown)}
      className={`cursor-pointer flex s-btw f-width align-y b-radius c-pad relative ${className} ${styles.agent}`}
    >
      <div className="flex align-y gap">
        <div className={`${imgClass} ${styles.agent_img_wrap}`}>
          {src ? <img src={src} className={styles.agent_img} alt={'img'} />:
            <div className={`flex align-x align-y ${styles.name_initials}`}>
              <span>{firstLetter}</span>
              <span>{lastLetter}</span>
            </div>}
        </div>
        <div className="flex f-column gap">
          <div className="flex align-y gap">{identity}</div>
          {star ? <Rating num={star} /> : null}
        </div>
      </div>
      {location.pathname.includes('/dashboard') &&
        <div className={`b-radius w-full transition-all absolute ${styles.dropdown} ${dropDown === false ? styles.close : styles.open }`}>
          <div className='flex gap align-y p-4'
          onClick={() => navigate('/dashboard/profile_edit/profile')}
          >
            <Svg href={profileIcon} />
            <span>Profile</span>
          </div>
          <div className='flex gap align-y p-4'>
            <Svg href={sign_outIcon} />
            <span>Sign Out</span>
          </div>
        </div>
      }
    </div>
  );
}
