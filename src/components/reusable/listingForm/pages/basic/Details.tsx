import OptGroup from '~/components/herosection/Optgroup';
import CheckboxGroup from '~/components/searchForm/CheckboxGroup';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import {
  areaSuffix,
  figures,
} from '~/components/reusable/listingForm/pages/miscellenous/mapProps';
import { Listing } from '~/utils/types/listing.types';

type DetailsProps = {
  land?: boolean;
  error: InputErrors;
  register: Register;
  listing?: Listing;
  setListing?: React.Dispatch<React.SetStateAction<Listing>>;
};

export default function Details({
  land,
  error,
  listing,
  setListing,
  register,
}: DetailsProps) {
  return (
    <InputWrap className="gap-1">
      <h3>Details</h3>
      <fieldset className={styles.details}>
        {land && (
          <>
            <FormControl
              as="select"
              name="bedroom"
              labelText="Bedroom"
              className={styles.input}
              value={listing?.details.bedroom}
              containerClass={`gap-0 f-column ${styles.inputWrap}`}
              onChange={(e) =>
                listing &&
                setListing &&
                setListing({
                  ...listing,
                  details: {
                    ...listing.details,
                    bedroom: parseInt(e.target.value),
                  },
                })
              }
            >
              <OptGroup header="number of rooms" subItems={figures} />
            </FormControl>
            <FormControl
              as="select"
              name="bathroom"
              labelText="bathroom"
              className={styles.input}
              containerClass={`gap-0 f-column ${styles.inputWrap}`}
              value={listing?.details.bathroom}
              onChange={(e) =>
                listing &&
                setListing &&
                setListing({
                  ...listing,
                  details: {
                    ...listing.details,
                    bathroom: parseInt(e.target.value),
                  },
                })
              }
            >
              <OptGroup header="no of toilet" subItems={figures} />
            </FormControl>
            <FormControl
              as="select"
              name="parkingLot"
              labelText="Parking Lot"
              className={styles.input}
              containerClass={`gap-0 f-column ${styles.inputWrap}`}
              value={listing?.details.parking_space}
              onChange={(e) =>
                listing &&
                setListing &&
                setListing({
                  ...listing,
                  details: {
                    ...listing.details,
                    parking_space: parseInt(e.target.value),
                  },
                })
              }
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
          containerClass={`gap-0 f-column ${styles.inputWrap} ${styles.areaSize}`}
          value={listing?.details.land_area}
          onChange={(e) =>
            listing &&
            setListing &&
            setListing({
              ...listing,
              details: {
                ...listing.details,
                land_area: e.target.value,
              },
            })
          }
        />
        <FormControl
          as="select"
          name="areaSuffix"
          labelText="Area Suffix"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}
          ${land ? styles.areaSuffix : undefined} `}
          value={listing?.details.area_suffix}
          onChange={(e) =>
            listing &&
            setListing &&
            setListing({
              ...listing,
              details: { ...listing.details, area_suffix: e.target.value },
            })
          }
        >
          <OptGroup header="Area Suffix" subItems={areaSuffix} />
        </FormControl>
      </fieldset>
      {land && (
        <>
          <h3>Features</h3>
          <CheckboxGroup listing={listing} setListing={setListing} />
        </>
      )}
    </InputWrap>
  );
}
