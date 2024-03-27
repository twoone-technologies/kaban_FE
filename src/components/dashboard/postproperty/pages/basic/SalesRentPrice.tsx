import { ReactNode } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import FormControl, { InputErrors, Register,} from '~/components/reusable/FormControl';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { suffix } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

export default function SalesRentPrice({
  svg,
  error,
  register,
}: {
  svg: ReactNode;
  error: InputErrors;
  register: Register;
}) {
  return (
    <InputWrap className={styles.salesRent}>
      <FormControl
        required
        as="input"
        type="number"
        register={register}
        placeholder="150000"
        name="salesRentPrice"
        className={styles.input}
        labelText={'Sales / Rent Price (₦)'}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        error={error.salesRentPrice && error.salesRentPrice.message}
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
