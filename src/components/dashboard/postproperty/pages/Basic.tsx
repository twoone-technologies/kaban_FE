import FormInput from '~/components/reusable/FormInput';
import styles from './post.module.css';
import InputWrap from './InputWrap';
import { figures, propertyTypes, suffix } from './suffix';
import { statusArr } from '~/components/searchForm/status';
import { arrowIcon } from '~/assets/icons';
import CheckboxGroup from '~/components/searchForm/CheckboxGroup';
import Button from '~/components/reusable/Button';

export default function Basic() {

  return (
    <div className="flex f-column gap-2">
      <InputWrap>
        <h3>Property Description</h3>
        <FormInput
          className={`gap-0 f-column ${styles.inputWrap}`}
          inputClass={styles.input}
          title_1="Title"
          title={'title'}
          type="text"
          placeholder="Write a title"
        />
        <div className={`flex gap ${styles.statType}`}>
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            selectClass={styles.input}
            link={arrowIcon}
            svgI={styles.svg}
            title_1="Status"
            title={'status'}
            header="status"
            subItems={statusArr}
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            selectClass={styles.input}
            title_1="Type"
            title={'type'}
            svgI={styles.svg}
            link={arrowIcon}
            header="propertyType"
            subItems={propertyTypes}
            placeholder="Commercial, Industrial, Residential"
          />
        </div>
        <FormInput
          className={`gap-0 f-column ${styles.inputWrap}`}
          textAreaClass={`f-width b-radius c-pad ${styles.input} ${styles.description}`}
          title_1="Description"
          title={'description'}
          placeholder="Brief description of the property"
        />
      </InputWrap>
      <InputWrap className={styles.salesRent}>
        <FormInput
          className={`gap-0 f-column ${styles.inputWrap}`}
          inputClass={styles.input}
          title_1={'Sales / Rent Price (₦)*'}
          title={'100,000,000'}
          type="text"
        />
        <FormInput
          className={`gap-0 f-column ${styles.inputWrap}`}
          selectClass={styles.input}
          title_1="Price Suffix (/)"
          title={'priceSuffix'}
          header="suffix"
          link={arrowIcon}
          svgI={styles.svg}
          subItems={suffix}
        />
      </InputWrap>
      <InputWrap className='gap-1'>
        <h3>Details</h3>
        <div className={styles.details}>
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            selectClass={styles.input}
            title_1="Bedroom"
            title={'bedroom'}
            header="number of rooms"
            link={arrowIcon}
            svgI={styles.svg}
            subItems={figures}
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            selectClass={styles.input}
            title_1="Toilet"
            title={'toilet'}
            header="no of toilet"
            link={arrowIcon}
            svgI={styles.svg}
            subItems={figures}
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            selectClass={styles.input}
            title_1="Parking Lot"
            title={'parkingLot'}
            header="parking bays no"
            link={arrowIcon}
            svgI={styles.svg}
            subItems={figures}
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="Area Size"
            title={'areaSize'}
            type='number'
          />
          <FormInput
            className={`gap-0 f-column ${styles.areaSuffix} ${styles.inputWrap}`}
            selectClass={styles.input}
            title_1="Area Suffix"
            title={'areaSuffix'}
            header="Area Suffix"
            link={arrowIcon}
            svgI={styles.svg}
            subItems={suffix}
          />
        </div>
        <h3>Features</h3>
        <CheckboxGroup />
      </InputWrap>
      <div className={`flex gap-1 ${styles.btnGrp}`}>
        <Button className={`c-pad ${styles.cancleBtn}`}>Cancel</Button>
        <Button className='c-pad'>Continue</Button>
      </div>
    </div>
  );
}
