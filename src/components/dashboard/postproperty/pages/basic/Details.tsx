import { ReactNode } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl from '~/components/reusable/FormControl';
import CheckboxGroup from '~/components/searchForm/CheckboxGroup';
import InputWrap from '~/components/dashboard/postproperty/pages/miscellenous/InputWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import {
  areaSuffix,
  figures,
} from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

export default function Details({ svg, land}: {
  svg: ReactNode;
  land?: boolean;
}) {
  console.log(land);
  return (
    <InputWrap className="gap-1">
      <h3>Details</h3>
      <div className={styles.details}>
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
          as="input"
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          className={styles.input}
          name="areaSize"
          labelText="Area Size"
          placeholder="400"
          type="number"
        />
        <FormControl
          as="select"
          containerClass={`gap-0 f-column ${styles.areaSuffix} ${styles.inputWrap}`}
          className={styles.input}
          name="areaSuffix"
          labelText="Area Suffix"
          icon={svg}
        >
          <OptGroup header="Area Suffix" subItems={areaSuffix} />
        </FormControl>
      </div>
      {land && (
        <>
          <h3>Features</h3>
          <CheckboxGroup />
        </>
      )}
    </InputWrap>
  );
}
