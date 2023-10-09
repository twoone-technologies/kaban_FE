import { useState } from 'react';
import { kabanFAQ, realEstateFAQ } from '../data/faqData';

import styles from './FAQSection.module.css';
import { arrowDownIcon, linkArrowIcon } from '~/assets/icons';
import Svg from '../reusable/Svg';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="f-column align-center mt-5">
      <div className={`f-column align-center ${styles.title_container}`}>
        <h1 className={`center-text ${styles.contact_title}`}>Frequently Asked Questions</h1>
      </div>
      <div className={styles.faq_container} >
        <p className={styles.question_title}>About Kaban.ng</p>
        {kabanFAQ.map((item, index) => (
          <div className={`${styles.accordionGroup}`} key={index} onClick={() => toggleAccordion(index)}>
            <div
              className={`flex space-between gap-1 ${styles.accordion}`}

            >{item.question} <Svg href={arrowDownIcon} className={`${activeIndex === index ? styles.rotateIcon : ''}`} />
            </div>
            <div className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.faq_container} >
        <p className={styles.question_title}>About Real Estate</p>
        {realEstateFAQ.map((item, index) => (
          <div className={`${styles.accordionGroup}`} key={index} onClick={() => toggleAccordion(index)}>
            <div
              className={`flex space-between gap-1 ${styles.accordion}`}

            >{item.question} <Svg href={arrowDownIcon} className={`${activeIndex === index ? styles.rotateIcon : ''}`} />
            </div>
            <div className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`f-column justify-center align-center gap-1 ${styles.furtherQue}`}>
        <p className='center-text'>For any further questions, enquiries and suggestions about Kaban.ng,</p>
        <Link to={'/contact-us'} className='flex align-center justify-center bg-primary'>Contact Us   <Svg href={linkArrowIcon} width='25px' height='25px' /></Link></div>
    </section>
  );
}
