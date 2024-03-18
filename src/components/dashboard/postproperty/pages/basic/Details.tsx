import { ReactNode } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import CheckboxGroup from '~/components/searchForm/CheckboxGroup';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import {
  areaSuffix,
  figures,
} from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

export default function Details({
  svg,
  land,
  error,
  register,
}: {
  svg: ReactNode;
  land?: boolean;
  error: InputErrors;
  register: Register;
}) {
  return (
    <InputWrap className="gap-1">
      <h3>Details</h3>
      <fieldset className={styles.details}>
        {land && (
          <>
            <FormControl
              as="select"
              containerClass={`gap-0 f-column ${styles.inputWrap}`}
              className={styles.input}
              name="bedroom"
              labelText="Bedroom"
              icon={svg}
            >
              <OptGroup header="number of rooms" subItems={figures} />
            </FormControl>
            <FormControl
              as="select"
              containerClass={`gap-0 f-column ${styles.inputWrap}`}
              className={styles.input}
              name="toilet"
              labelText="Toilet"
              icon={svg}
            >
              <OptGroup header="no of toilet" subItems={figures} />
            </FormControl>
            <FormControl
              as="select"
              containerClass={`gap-0 f-column ${styles.inputWrap}`}
              className={styles.input}
              name="parkingLot"
              labelText="Parking Lot"
              icon={svg}
            >
              <OptGroup header="parking bays no" subItems={figures} />
            </FormControl>
          </>
        )}
        <FormControl
          required
          as="input"
          type="number"
          name="areaSize"
          placeholder="400"
          register={register}
          labelText="Area Size"
          className={styles.input}
          error={error.areaSize && error.areaSize.message}
          containerClass={`gap-0 f-column ${styles.inputWrap}
          ${styles.areaSize}`}
        />
        <FormControl
          icon={svg}
          as="select"
          name="areaSuffix"
          labelText="Area Suffix"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}
          ${land ? styles.areaSuffix : undefined} `}
        >
          <OptGroup header="Area Suffix" subItems={areaSuffix} />
        </FormControl>
      </fieldset>
      {land && (
        <>
          <h3>Features</h3>
          <CheckboxGroup />
        </>
      )}
    </InputWrap>
  );
}
