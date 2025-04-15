import { SetStateAction, useState } from 'react';
import { searchIcon } from '~/assets/icons';
import { property_type, roomAndPrice } from '~/components/herosection/formData';
import { statusArr } from './status';
import styles from './searchForm.module.css';
import FormControl from '../reusable/FormControl';
import Checkbox from './checkbox/Checkbox';
import Svg from '../reusable/Svg';
import OptGroup from '~/components/herosection/Optgroup';

export default function SearchFormItem({
  formStyle,
  defaultCity,
}: {
  formStyle: boolean;
  defaultCity?: string;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [radius, setRadius] = useState('');

  const handleRadiusStatus = () => setIsDisabled(!isDisabled);
  const handleRadius = (e: { target: { value: SetStateAction<string> } }) => {
    setRadius(e.target.value);
  };

  const radStat = isDisabled ? styles.enable : styles.disable;
  const isActive = formStyle === false ? styles.close_grid : styles.open_form;

  return (
    <div className={`${styles.form_content} ${isActive}`}>
      <div className={`flex ${styles.slider}`}>
        <div className="flex items-center w-28">
          <Checkbox onChange={handleRadiusStatus} />
          <output className={styles.output}>Radius {radius}km</output>
        </div>
        <FormControl
          as="input"
          min="0"
          step="10"
          max="100"
          type={'range'}
          title={'radius'}
          name={'radius'}
          disabled={!isDisabled}
          onChange={handleRadius}
          containerClass={radStat}
        />
      </div>
      <FormControl
        as="input"
        type={'search'}
        title={'location'}
        name={'location'}
        placeholder="Location"
        defaultValue={defaultCity}
        containerClass={styles.location}
        icon={<Svg className="absolute top-4 right-4" href={searchIcon} />}
      />
      <FormControl as="select" title={'status'} name={'status'}>
        <OptGroup header={'status'} subItems={statusArr} />
      </FormControl>
      <FormControl as="select" title={'propertyType'} name={'propertyType'}>
        {Object.entries(property_type).map(([key, val], id) => (
          <OptGroup key={id} header={key} subItems={val.subItems} />
        ))}
      </FormControl>
      {Object.entries(roomAndPrice).map(([key, val], id) => (
        <div key={id} className={styles.priceOpt}>
          <FormControl as="select" name={key} className={styles.h_input}>
            <OptGroup header={val.header} subItems={val.subItems} />
          </FormControl>
        </div>
      ))}
      <FormControl
        as="input"
        title={'Min Price'}
        name={'min.price'}
        placeholder={'Min Price'}
        type={'number'}
      />
      <FormControl
        as="input"
        title={'Max Price'}
        name={'max.price'}
        placeholder={'Max price'}
        type={'number'}
      />
    </div>
  );
}
