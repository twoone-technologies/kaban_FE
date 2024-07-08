import styles from './micellenous.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { mailIcon, verifyIcon, whatsappIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';
import { Realtor } from '~/utils/types/realtor.types';

export default function AgentContact({ item }: { item: Realtor }) {
  return (
    <div className={`align-y pad-inline-1 s-btw f-width ${styles.mobileContactInfo}`}>
      <CardAgentInfo
        className={styles.agentInfo}
        imgClass={styles.img}
        src={item?.realtor_pic}
        identity={
          <div className='flex'>
            <b>{item?.user?.full_name}</b>
            {item?.verification_status ? (
              <Svg href={verifyIcon} className={styles.svg} />
            ) : null}
          </div>
        }
      />
      <div className='gap flex'>
        <Link
          to={item?.user?.email}
          target="_blank"
          className={`flex gap f-width align-y c-pad align-x  b-radius ${styles.btn}`}
        >
          <Svg href={mailIcon} width="1.2rem" height="1.5rem" />
        </Link>
        <Link
          to={"#"}
          target="_blank"
          className={`flex gap f-width align-y align-x c-pad b-radius ${styles.btn}`}
        >
          <Svg href={whatsappIcon} width="1.2rem" height="1.5rem" />
        </Link>
      </div>
    </div>
  );
}
