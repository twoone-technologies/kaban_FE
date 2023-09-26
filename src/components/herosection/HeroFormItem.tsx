import { arrowIcon, searchIcon } from '~/assets/icons';
import styles from './hero.module.css';
import { roomAndPrice } from './formData';
import FormInput from '../reusable/FormInput';

export default function HeroFormItem() {
  return (
    <>
      <FormInput
        required
        width="17px"
        height="17px"
        type={'text'}
        maxLength={30}
        link={searchIcon}
        title={'location'}
        className={styles.location}
      />
      <FormInput title={'propertyType'} link={arrowIcon} />
      {Object.entries(roomAndPrice).map(([key, val], id) => (
        <FormInput
          key={id}
          title={key}
          subItems={val}
          link={arrowIcon}
          className={styles.h_input}
        />
      ))}
    </>
  );
}
