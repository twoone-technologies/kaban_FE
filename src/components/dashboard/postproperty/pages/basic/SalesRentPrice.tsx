import { ErrorObj } from '~/components/dashboard/postproperty';
import { ReactNode } from 'react';
import { useActionData } from 'react-router-dom';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl from '~/components/reusable/FormControl';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { suffix } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';
import InputWrap from '~/components/dashboard/postproperty/pages/miscellenous/InputWrap';

export default function SalesRentPrice({ svg }: { svg: ReactNode }) {
  const errors = useActionData() as ErrorObj;
  return (
    <InputWrap className={styles.salesRent}>
      <FormControl
        as="input"
        type="number"
        placeholder="150000"
        name="salesRentPrice(₦)"
        className={styles.input}
        labelText={'Sales / Rent Price (₦)*'}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        error={errors?.salesRentPrice != undefined ? errors.salesRentPrice[0] : ''}
      />
      <FormControl
        icon={svg}
        as="select"
        name="priceSuffix"
        className={styles.input}
        labelText="Price Suffix (/)"
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
      >
        <OptGroup header="suffix" subItems={suffix} />
      </FormControl>
    </InputWrap>
  );
}
