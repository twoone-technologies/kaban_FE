import Button from '~/components/reusable/Button';
import FormControl from '~/components/reusable/FormControl';
import Modal from '~/components/reusable/modal/Modal';
import styles from './styles.module.css';
import { Form } from 'react-router-dom';
import { useState } from 'react';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';

export default function FeedbackAndSuggestion() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="gap my-8 f-column sm:flex-row flex s-btw w-full">
        <div className={`flex gap flex-col ${styles.helpQuest}`}>
          <h3 className="font-bold">How Can We Help You Today?</h3>
          <span className="">
            Our goal here is to assist you in maximizing your real estate
            listings and client engagement on our platform.
          </span>
        </div>
        <Button
          type="button"
          onClick={() => setIsVisible(true)}
          className={`${styles.feedbackBtn}`}
        >
          Feedback and Suggestions
        </Button>
      </div>
      <Modal closeModal={() => setIsVisible(false)} isVisible={isVisible}>
        <div className="flex f-column gap">
          <h2 className="text-2xl fw-700">Feedback & Suggestions</h2>
          <span>
            Please provide any feedback or suggestion you would love to see on
            our platform
          </span>
          <Form className='flex f-column gap-1'>
            <FormControl
              as="input"
              type="text"
              name="fullName"
              labelText="Full Name"
              placeholder="Carol Danvers"
            />
            <FormControl
              as="input"
              type="text"
              name="email"
              labelText="Email"
              placeholder="danvers@marvel.com"
            />
            <FormControl
              as="textarea"
              name="feedback"
              labelText="Feedback"
              placeholder="Type your feedback here"
            />
            <Checkbox name="contact" 
              title1={<>
                By submitting this form I agree to 
                <span className='bg-primary'> Terms of use</span>.
              </>} />
            <Button type="submit" className=" h-8 bg-primary">
              Submit
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
