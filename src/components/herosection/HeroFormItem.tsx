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
        type={'search'}
        maxLength={30}
        title={'location'}
        placeholder="location"
        className={styles.location}
        icon={<Svg className={'absolute top-4 right-4'} href={searchIcon} />}
      />
      <FormControl as="select" title={'propertyType'}>
        {Object.entries(property_type).map(([key, val], id) => (
          <OptGroup key={id} header={key} subItems={val.subItems} />
        ))}
      </FormControl>
      {Object.entries(roomAndPrice).map(([key, val], id) => (
        <div className={styles.priceOpt}>
          <FormControl key={id} as="select" className={styles.h_input}>
            <OptGroup className={styles.optgroup} title={key} subItems={val} />
          </FormControl>
        </div>
      ))}
    </>
  );
}
