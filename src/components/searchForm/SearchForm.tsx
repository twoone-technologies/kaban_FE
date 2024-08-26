import { useState } from 'react';
import Button from '~/components/reusable/Button';
import styles from './searchForm.module.css';
import { arrowIcon } from '~/assets/icons';
import { Form } from 'react-router-dom';
import SearchFormItem from './SearchFormItem';
import CheckboxGroup from './CheckboxGroup';
import FormControl from '../reusable/FormControl';
import Svg from '../reusable/Svg';

export default function SearchForm({
  className,
  onSubmit,
  defaultCity,
}: {
  className: string;
  defaultCity?: string;
  onSubmit?: () => void;
}) {
  const [formStyle, setFormStyle] = useState(false);
  const [otherItems, setOtherItems] = useState(false);

  const handleOtherItems = () => setOtherItems(!otherItems);
  const handleStyle = () => setFormStyle(!formStyle);

  // const storeSearch = ()  transition-all=> {}

  const extras = otherItems ? styles.plus : styles.minus;
  const isActive = formStyle === false ? styles.close_form : styles.open_form;

  return (
    <Form
      method="post"
      onSubmit={onSubmit}
      className={`b-radius f-width flex f-column
      ${styles.form} ${className}`}
    >
      <FormControl
        readOnly
        as={'input'}
        type={'text'}
        containerClass="cursor-pointer"
        title={'Advanced search'}
        name="advanced_search"
        placeholder="Advanced search"
        onClick={() => handleStyle()}
        icon={
          <Svg className="absolute top-4 right-4 rotate-90" href={arrowIcon} />
        }
      />
      <div className={`flex gap flex-col ${styles.gridwrap} ${isActive}`}>
        <SearchFormItem defaultCity={defaultCity} formStyle={formStyle} />
        <div className={`flex align-y gap`}>
          <Button
            type="button"
            onClick={handleOtherItems}
            className={`flex align-y ${styles.more_btn}`}
          >
            +
          </Button>
          <span>other features</span>
        </div>
        <CheckboxGroup className={`f-height ${styles.gridwrap} ${isActive} ${extras}`} />
        <Button
          type="submit"
          className={`${styles.btn} f-width`}
          onClick={() => handleStyle()}
        >
          Search
        </Button>
      </div>
    </Form>
  );
}
