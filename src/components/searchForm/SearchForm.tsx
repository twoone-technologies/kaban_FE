import { useState } from 'react';
import Button from '~/components/reusable/Button';
import styles from './searchForm.module.css';
import { arrowIcon } from '~/assets/icons';
import { Form } from 'react-router-dom';
import SearchFormItem from './SearchFormItem';
import CheckboxGroup from './CheckboxGroup';
import FormInput from '../reusable/FormInput';

export default function SearchForm({className}: {className: string}) {
  const [formStyle, setFormStyle] = useState<'open' | 'close'>('close');
  const [otherItems, setOtherItems] = useState(false);

  const handleOtherItems = () => setOtherItems(!otherItems);
  const handleStyle = (formStyle: 'open' | 'close') => setFormStyle(formStyle);

  // const storeSearch = () => {}

  const extras = otherItems ? styles.plus : styles.minus;
  const isActive = formStyle === 'close' ? styles.close_form : styles.open_form;
  const formActive =
    formStyle === 'close' ? styles.closeForm : styles.open_form;

  return (
    <Form
      method="post"
      className={`b-radius f-width flex f-column
      ${styles.form} ${formActive} ${className}`}
    >
      <FormInput
        readOnly
        type={'text'}
        link={arrowIcon}
        title={'Advanced search'}
        onFocus={() => handleStyle('open')}
      />
      <SearchFormItem formStyle={formStyle} />
      <div className={`flex align-y gap ${isActive}`}>
        <Button
          type="button"
          onClick={handleOtherItems}
          className={`flex align-y ${styles.more_btn}`}
        >
          +
        </Button>
        <span>other features</span>
      </div>
      <CheckboxGroup className={`f-height ${isActive} ${extras}`} />
        <Button
          type="submit"
          className={`${styles.btn} ${isActive} f-width`}
          onClick={() => handleStyle('close')}
        >
          Search
        </Button>
    </Form>
  );
}
