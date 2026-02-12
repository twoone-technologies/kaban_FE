import { Form } from 'react-router-dom';
import styles from '~/components/reusable/modal/modal.module.css';
import { reasonArr } from '../reason';
import Button from '../../reusable/Button';
import FormControl from '~/components/reusable/FormControl';
import OptGroup from '~/components/herosection/Optgroup';


export default function ReportForm() {
  return (
    <Form method="post" className={`flex f-column gap ${styles.form}`}>
      <div className={`${styles.input_wrap}`}>
        <FormControl
          as="input"
          title="fullName"
          labelText="Full Name"
          type="text"
          placeholder="fullname"
        />
        <FormControl
          as="input"
          title="phone"
          labelText="Phone"
          type="number"
          placeholder="+234 xxx xxx xxxx"
        />
        <FormControl
          as="input"
          title="email"
          labelText="Email"
          type="email"
          placeholder="Smith@example.com"
        />
        <FormControl
          as="select"
          title="reason"
          labelText="Reason"
          // placeholder="fullname"
        >
          <OptGroup subItems={reasonArr} header="Select reason" />
        </FormControl>
      </div>
      <FormControl
        as="textarea"
        title="message"
        labelText="Message"
      />
      <Button type="submit" className={'pad'}>
        Submit Report
      </Button>
    </Form>
  );
}
