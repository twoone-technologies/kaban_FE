import { Form } from 'react-router-dom';
import { Wrapper } from '~/components/reusable/Container';
import FormControl from '~/components/reusable/FormControl';
import ListingData from '../reusables/ListingData';
import styles from '~/components/dashboard/support/support.module.css';
import { helpData, infoData } from './supportData';
import { supportImg } from '~/assets/img';
import Button from '~/components/reusable/Button';
import SupportCards from './micelleous/SupportCards';
import Svg from '~/components/reusable/Svg';
import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from '~/assets/icons';

export default function Support() {
  return (
    <Wrapper element="section" className={styles.wrapper}>
      <div className={`flex b-radius s-btw gap-2 p-4 ${styles.header}`}>
        <div className={`flex f-column b-radius gap-2`}>
          <h3 className="bg-primary text-2xl fw-700">
            welcome to Your realtor support Page
          </h3>
          <Form className="w-full">
            <FormControl
              as="input"
              type="search"
              placeholder="Search an article"
              containerClass={`${styles.inputWrap}`}
              className={`w-full ${styles.input}`}
            />
          </Form>
          <div className="flex gap-2 f-column sm:flex-row">
            {infoData.map((item) => (
              <ListingData
                key={item.id}
                className={styles.supportData}
                href={item.icon}
                title={item.data}
              />
            ))}
          </div>
        </div>
        <img src={supportImg} className={`hidden lg:block`} alt="supportimg" />
      </div>
      <div className="gap my-8 f-column sm:flex-row flex s-btw w-full">
        <div className={`flex gap flex-col ${styles.helpQuest}`}>
          <h3 className="font-bold">How Can We Help You Today?</h3>
          <span className="">
            Our goal here is to assist you in maximizing your real estate
            listings and client engagement on our platform.
          </span>
        </div>
        <Button type="button" className={`${styles.feedbackBtn}`}>
          Feedback and Suggestions
        </Button>
      </div>
      <div className={`grid ${styles.cardGrp}`}>
        {helpData.map((item) => (
          <SupportCards key={item.id} header={item.title} content={item.data} />
        ))}
      </div>
      <div className="gap my-8 f-column sm:flex-row flex s-btw w-full">
        <div className={`flex gap flex-col ${styles.helpQuest}`}>
          <h3 className="font-bold">
            Thank you for choosing us for your real estate need
          </h3>
          <span className="">
            We're committed to helping you succeed in the real estate market,
            and we're here to support you every step of the way.
          </span>
        </div>
        <div className='flex gap'>
          <div className={`flex align-x align-y ${styles.svgWrap}`}><Svg height='1.9rem' href={facebookIcon} /></div>
          <div className={`flex align-x align-y ${styles.svgWrap}`}><Svg height='1.9rem' href={twitterIcon} /></div>
          <div className={`flex align-x align-y ${styles.svgWrap}`}><Svg height='1.9rem' href={instagramIcon} /></div>
          <div className={`flex align-x align-y ${styles.svgWrap}`}><Svg height='1.9rem' href={linkedinIcon} /></div>
        </div>
      </div>
    </Wrapper>
  );
}
