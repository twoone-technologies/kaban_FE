import { useState } from 'react';
import { Listing } from '~/utils/types/listing.types';
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
import { Link, useParams } from 'react-router-dom';
import AgentContact from './AgentContact';
import { realtorsObj } from '~/components/reusable/realtorsObj';
import { Realtor } from '~/utils/types/realtor.types';

type AgentProps = {
  item: Listing;
  object: Listing[];
};

export default function AgentDetails({ object, item }: AgentProps) {
  const [contact, setContact] = useState<'whatsapp' | 'email' | ''>('');
  const handleContact = (contact: 'whatsapp' | 'email') => {
    setContact(contact);
  };
  const { id } = useParams<{ id: string }>();
  const realtor = realtorsObj.find((realtor) => realtor.id === id)  as unknown as Realtor

  return (
    <ItemInfo
      className="b-radius bg-tertiary f_line"
      h1={'Leasing Agent'}
      children={
        <div className="flex f-width f-column gap">
          <CardAgentInfo
            className={styles.agentInfo}
            imgClass={styles.img}
            src={realtor?.realtor_pic}
            identity={
              <div className='flex'>
                <b>{realtor?.user.full_name}</b>
                {realtor?.verification_status ? (
                  <Svg href={verifyIcon} className={styles.svg} />
                ) : null}
              </div>
            }
            star={realtor?.rating}
          />
          <div className={`flex f-column ${styles.agentIcon}`}>
            <CardIcons
              title="land area"
              className={styles.agentIcons}
              icon={locationIcon}
              value={realtor?.office_address}
            />
            <CardIcons
              title="land area"
              className={styles.agentIcons}
              icon={buildingsIcon}
              value={
                <span>
                  {realtor && getTotal(object, realtor.user.full_name)} listed properties
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
              title="contact"
              className={styles.agentIcons}
              icon={phoneIcon}
              value={realtor?.mobile_number}
            />
          </div>
          <div className={`flex align-y gap-1`}>
            <Link
              onClick={() => handleContact('email')}
              to={`mailto:${realtor?.user.email}`}
              className={`flex gap f-width align-y align-x pad-block-0 b-radius ${styles.btn}
              ${contact === 'email' && styles.active_btn}`}
            >
              <Svg href={mailIcon} width="1rem" height="1.5rem" />
              Email
            </Link>
            <AgentContact item={realtor} />
            <Link to={'#'} 
              onClick={() => handleContact('whatsapp')}
              className={`flex gap f-width align-y align-x pad-block-0 b-radius ${styles.btn}
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
