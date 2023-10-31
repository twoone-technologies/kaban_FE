import { SetStateAction, useState } from 'react';
import { arrowIcon, searchIcon } from '~/assets/icons';
import { roomAndPrice } from '~/components/herosection/formData';
import { statusArr } from './status';
import FormInput from '../reusable/FormInput';
import styles from './searchForm.module.css';

export default function SearchFormItem({formStyle, defaultCity}: {formStyle: boolean,
  defaultCity?: string}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [radius, setRadius] = useState('');

  const handleRadiusStatus = () => setIsDisabled(!isDisabled);
  const handleRadius = (e: { target: { value: SetStateAction<string> } }) => {
    setRadius(e.target.value);
  };

  const radStat = isDisabled ? styles.enable : styles.disable;
  const isActive = formStyle === false ? styles.close_form : styles.open_form;

  return (
    <div className={`${styles.form_content} ${isActive}`}>
      <FormInput
        min="0"
        step="10"
        max="100"
        type={'range'}
        radius={radius}
        title={'radius'}
        inputClass={radStat}
        disabled={!isDisabled}
        onChange1={handleRadius}
        className={styles.slider}
        onChange={handleRadiusStatus}
      />
      <FormInput defaultValue={defaultCity}
        width={'17px'} height={'17px'}
        type={'search'} link={searchIcon}
        title={'location'} className={styles.location}
      />
      <FormInput
        title={'status'} link={arrowIcon}
        header={'status'} subItems={statusArr}
      />
      <FormInput title={'propertyType'} link={arrowIcon} />
      {Object.entries(roomAndPrice).map(([key, val], id) => (
        <FormInput key={id} title={key} subItems={val} link={arrowIcon} />
      ))}
      <FormInput title={'Min.price'} type={'number'} link={arrowIcon} />
      <FormInput title={'Max.price'} type={'number'} link={arrowIcon} />
    </div>
  );
}
