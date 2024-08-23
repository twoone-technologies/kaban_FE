import Svg from '../Svg';
import Tooltip from '../Tooltip';
import PlacesAutocomplete from '.';
import useGoogleApi from '~/hooks/useGoogleApi';
import { alarmIcon, closeIcon } from '~/assets/icons';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import { Dispatch, SetStateAction, useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import FormControl, { Register } from '../FormControl';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import { Listing } from '~/utils/types/listing.types';

type GoogleAddressProps = {
  idx?: number;
  city: string;
  state: string;
  name: string;
  className?: string;
  listing?: Listing
  error?: string;
  register?: Register;
  setMarker: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>;
  } & React.HTMLProps<HTMLInputElement>;

export default function Address({
  idx,
  city,
  state,
  name,
  listing,
  className,
  error,
  setMarker,
  register,
}: GoogleAddressProps) {
  const {
    value,
    init,
    clearSuggestions,
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300
  });

  const { isLoaded } = useGoogleApi({
    onLoad: () => init(),
  });

  const [streetAddress, setStreetAddress] = useState(listing?.address || '');
  const [close, setClose] = useState(false);
  const [hover, setHover] = useState(false);
  const svgEvents = useResponsiveNav({
    onClick: () => setHover((prev) => !prev),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  });
  
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreetAddress(e.target.value);
    setClose(false);
    if (name === 'address') {
      setValue(`${streetAddress}, ${city}, ${state}`);
    } else {
      setValue(`${streetAddress}, ${city}`);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <FormControl
        as="input"
        type="text"
        name={name}
        error={error}
        labelText={name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        required={idx === 2}
        className={styles.input}
        value={streetAddress?.split(',').slice(0, 2)}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        onChange={handleAddress}
        register={register}
        registerOptions={{
          onChange: handleAddress
        }}
      />
      {name === 'address' && (
        <div>
          <Svg
            {...svgEvents}
            href={alarmIcon}
            className={`left-16 ${styles.alarmSvg}
            ${value ? styles.see : styles.hide}
            ${close === true ? styles.hide : styles.see}`}
          />
          <Tooltip
            copy={hover}
            popOver={true}
            text={
              <span className={styles.tooltipMsg}>
                select <i>set pin manually</i> in <i>Map Address</i> to set the
                landmark and click the location on the map
              </span>
            }
          />
        </div>
      )}
      <Svg
        href={closeIcon}
        className={`right-4 absolute top-9
        ${streetAddress !== '' ? styles.see : styles.hide}
        ${close === true ? styles.hide : styles.see}`}
        onClick={() => {
          clearSuggestions();
          setClose(true);
        }}
      />
      {isLoaded ? (
        <PlacesAutocomplete
          setSelected={setMarker}
          inputValue={value}
          currStat={status}
          setValues={setValue}
          dataArr={data}
          closeX={setClose}
          setInputAddress={setStreetAddress}
          clearOptions={clearSuggestions}
        />
      ) : (
        null
      )}
    </div>
  );
}
