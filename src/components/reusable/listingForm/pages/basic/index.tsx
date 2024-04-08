import { useState } from 'react';
import Details from '~/components/reusable/listingForm/pages/basic/Details';
import SalesRentPrice from '~/components/reusable/listingForm/pages/basic/SalesRentPrice';
import PropertyDescription from '~/components/reusable/listingForm/pages/basic/PropertyDescription';
import { InputErrors, Register } from '~/components/reusable/FormControl';
import { HouseCard } from '~/components/reusable/card/Card';

type BasicProps = {
  error: InputErrors;
  className: string;
  activeIndex: number;
  register: Register;
  listing?: HouseCard;
  setListing: React.Dispatch<React.SetStateAction<HouseCard>>;
};

export default function Basic({
  className,
  activeIndex,
  register,
  listing,
  setListing,
  error,
}: BasicProps) {
  const [details, setDetails] = useState(false);
  return (
    <fieldset
      className={`flex f-column transition ease-in-out gap-2 ${className}`}
    >
      <PropertyDescription
        id={activeIndex}
        register={register}
        error={error}
        listing={listing}
        setListing={setListing}
        setDetails={setDetails}
      />
      <SalesRentPrice
        error={error}
        listing={listing}
        register={register}
        setListing={setListing}
      />
      <Details
        register={register}
        error={error}
        land={details}
        listing={listing}
        setListing={setListing}
      />
    </fieldset>
  );
}
