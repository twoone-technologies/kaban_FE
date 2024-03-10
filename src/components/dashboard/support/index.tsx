import { Form } from 'react-router-dom';
import { Wrapper } from '~/components/reusable/Container';
import FormControl from '~/components/reusable/FormControl';
import ListingData from '../reusables/ListingData';
import styles from '~/components/dashboard/support/support.module.css';
import { helpData, infoData } from './supportData';
import { supportImg } from '~/assets/img';
import SupportCards from './micelleous/SupportCards';
import FeedbackAndSuggestion from './micelleous/FeedbackAndSuggestion';
import ConclusionAndLinks from './micelleous/ConclusionAndLinks';

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
      <FeedbackAndSuggestion />
      <div className={`grid ${styles.cardGrp}`}>
        {helpData.map((item) => (
          <SupportCards
            link={`/dashboard/support/${
              item.title.includes(' ')
                ? item.title.replace(/ /g, '_')
                : item.title
            }`}
            key={item.id}
            header={item.title}
            content={item.data}
          />
        ))}
      </div>
      <ConclusionAndLinks />
    </Wrapper>
  );
}
