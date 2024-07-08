import OptGroup from '~/components/herosection/Optgroup';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import { suffix } from '~/components/reusable/listingForm/pages/miscellenous/mapProps';
import { Listing } from '~/utils/types/listing.types';

type SalesRentPriceProps = {
  error: InputErrors;
  register: Register;
  listing?: Listing;
  setListing?: React.Dispatch<React.SetStateAction<Listing>>;
};

export default function SalesRentPrice({
  error,
  register,
  listing,
  setListing,
}: SalesRentPriceProps) {
  return (
    <InputWrap className={styles.salesRent}>
      <FormControl
        required
        as="input"
        type="number"
        register={register}
        name="salesRentPrice"
        className={styles.input}
        value={listing?.price.amount}
        placeholder="your price here"
        labelText={'Sales / Rent Price (₦)'}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        error={error.salesRentPrice && error.salesRentPrice.message}
        onChange={(e) =>
          listing &&
          setListing &&
          setListing({
            ...listing,
            price: { ...listing.price, amount: parseInt(e.target.value) },
          })
        }
      />
      <FormControl
        as="select"
        name="priceSuffix"
        className={styles.input}
        value={listing?.price.per}
        labelText="Price Suffix (/)"
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        onChange={(e) =>
          listing &&
          setListing &&
          setListing({
            ...listing,
            price: { ...listing.price, per: e.target.value },
          })
        }
      >
        <OptGroup header="suffix" subItems={suffix} />
      </FormControl>
    </InputWrap>
  );
}
