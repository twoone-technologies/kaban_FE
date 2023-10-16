import { HouseCard } from '~/components/reusable/card/Card';
import styles from './micellenous.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { mailIcon, verifyIcon, whatsappIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';

export default function AgentContact({ item }: { item: HouseCard }) {
  return (
    <div className={`align-y pad-inline-1 s-btw f-width ${styles.mobileContactInfo}`}>
      <CardAgentInfo
        className={styles.agentInfo}
        imgClass={styles.img}
        src={item?.realtor.agentImg}
        identity={
          <>
            <b>{item?.realtor.agentName}</b>
            {item?.realtor.verified ? (
              <Svg href={verifyIcon} className={styles.svg} />
            ) : null}
          </>
        }
      />
      <div className='gap flex'>
        <Link
          to={item.realtor.whatsAppLink}
          target="_blank"
          className={`flex gap f-width align-y c-pad align-x  b-radius ${styles.btn}`}
        >
          <Svg href={mailIcon} width="1.2rem" height="1.5rem" />
        </Link>
        <Link
          to={item.realtor.whatsAppLink}
          target="_blank"
          className={`flex gap f-width align-y align-x c-pad b-radius ${styles.btn}`}
        >
          <Svg href={whatsappIcon} width="1.2rem" height="1.5rem" />
        </Link>
      </div>
    </div>
  );
}
