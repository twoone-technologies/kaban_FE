import { searchIcon } from '~/assets/icons';
import styles from './hero.module.css';
import { property_type, roomAndPrice } from './formData';
import FormControl from '../reusable/FormControl';
import Svg from '../reusable/Svg';
import OptGroup from './Optgroup';

export default function HeroFormItem() {
  return (
    <>
      <FormControl
        as="input"
        required
        name='location'
        type={'search'}
        maxLength={30}
        title={'location'}
        placeholder="location"
        className={styles.location}
        icon={<Svg className={`absolute top-3 right-4 ${styles.locationSvg}`} height='1.2rem' href={searchIcon} />}
      />
      <FormControl as="select" name={'propertyType'} title={'propertyType'}>
        {Object.entries(property_type).map(([key, val], id) => (
          <OptGroup key={id} header={key} subItems={val.subItems} />
        ))}
      </FormControl>
      {Object.entries(roomAndPrice).map(([key, val], id) => (
        <div key={id} className={styles.priceOpt}>
          <FormControl as="select" name={key} className={styles.h_input}>
            <OptGroup className={styles.optgroup} title={key} subItems={val} />
          </FormControl>
        </div>
      ))}
    </>
  );
}
