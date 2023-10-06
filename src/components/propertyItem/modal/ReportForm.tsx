import { Form } from 'react-router-dom';
import FormInput from '../../reusable/FormInput';
import styles from './modal.module.css';
import { reasonArr } from '../reason';
import { arrowIcon } from '~/assets/icons';
import Button from '../../reusable/Button';

export default function ReportForm() {
  return (
    <Form className={`flex f-column gap ${styles.form}`} action="">
      <FormInput
        className={`f-column ${styles.input}`}
        title="fullName"
        inputClass={styles.inputClass}
        title_1="Full Name"
        type="text"
        placeholder="fullname"
      />
      <FormInput
        className={`f-column ${styles.input}`}
        title="phone"
        inputClass={styles.inputClass}
        title_1="Phone"
        type="number"
        placeholder="+234 xxx xxx xxxx"
      />
      <FormInput
        className={`f-column ${styles.input}`}
        title="email"
        inputClass={styles.inputClass}
        title_1="Email"
        type="email"
        placeholder="Smith@example.com"
      />
      <FormInput
        className={`f-column ${styles.input}`}
        title="reason"
        title_1="Reason"
        subItems={reasonArr}
        placeholder="fullname"
        header='Select reason'
        selectClass={styles.select_input}
        link={arrowIcon}
        svgI={styles.svg}
      />
      <FormInput
        className={`f-column ${styles.input}`}
        title="message"
        title_1="Message"
        textAreaClass={`f-width b-radius ${styles.input_msg}`}
      />
      <Button type='submit' className={'pad'}>
        Submit Report
      </Button>
    </Form>
  );
}
