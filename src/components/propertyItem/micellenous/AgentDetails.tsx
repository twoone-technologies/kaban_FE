import { useState } from 'react';
import { HouseCard } from '~/components/reusable/card/Card';
import styles from './micellenous.module.css';
import ItemInfo from '../itemInfo/ItemInfo';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import Svg from '~/components/reusable/Svg';
import {
  bookmarkIcon,
  buildingsIcon,
  exLinkIcon,
  locationIcon,
  mailIcon,
  phoneIcon,
  verifyIcon,
  whatsappIcon,
} from '~/assets/icons';
import CardIcons from '~/components/reusable/card/CardIcons';
import { dateHandler, getTotal } from '~/components/reusable/FunctionUtils';
import { Link } from 'react-router-dom';
import AgentContact from './AgentContact';

type AgentProps = {
  item: HouseCard;
  object: HouseCard[];
};

export default function AgentDetails({ item, object }: AgentProps) {
  const [contact, setContact] = useState<'whatsapp' | 'email' | ''>('');
  const handleContact = (contact: 'whatsapp' | 'email') => {
    setContact(contact);
  };

  return (
    <ItemInfo
      className="b-radius bg-tertiary f_line"
      h1={'Leasing Agent'}
      children={
        <div className="flex f-width f-column gap">
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
            star={item?.realtor.rating}
          />
          <div className={`flex f-column ${styles.agentIcon}`}>
            <CardIcons
              title="land area"
              className={styles.agentIcons}
              icon={locationIcon}
              value={item?.realtor.location}
            />
            <CardIcons
              title="land area"
              className={styles.agentIcons}
              icon={buildingsIcon}
              value={
                <span>
                  {getTotal(object, item?.realtor.agentName)} listed properties
                  on Kaban
                </span>
              }
            />
            <CardIcons
              title="land area"
              className={styles.agentIcons}
              icon={bookmarkIcon}
              value={<span>Registered {dateHandler(item?.createdAt)}</span>}
            />
            <CardIcons
              title="land area"
              className={styles.agentIcons}
              icon={phoneIcon}
              value={item?.realtor.contact}
            />
          </div>
          <div className={`flex align-y gap-1`}>
            <Link
              onClick={() => handleContact('email')}
              to={`mailto:${item.realtor.email}`}
              className={`flex gap f-width align-y align-x pad-block-0 pad-inline-1 b-radius ${styles.btn}
              ${contact === 'email' && styles.active_btn}`}
            >
              <Svg href={mailIcon} width="1rem" height="1.5rem" />
              Email
            </Link>
            <AgentContact item={item} />
            <Link
              onClick={() => handleContact('whatsapp')}
              to={item.realtor.whatsAppLink} target='_blank'
              className={`flex gap f-width align-y align-x pad-block-0 pad-inline-1 b-radius ${styles.btn}
              ${contact === 'whatsapp'&& styles.active_btn}`}
            >
              <Svg href={whatsappIcon} width="1.2rem" height="1.5rem" />
              WhatsApp
            </Link>
          </div>
        </div>
      }
      visit={
        <div className={`flex align-y ${styles.visit}`}>
          <a>View all listings from this agent</a>
          <Svg href={exLinkIcon} />
        </div>
      }
    />
  );
}
