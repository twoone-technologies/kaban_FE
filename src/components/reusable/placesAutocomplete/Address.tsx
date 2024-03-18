import Svg from '../Svg';
import Tooltip from '../Tooltip';
import PlacesAutocomplete from '.';
import useGoogleApi from '~/hooks/useGoogleApi';
import { alarmIcon, closeIcon } from '~/assets/icons';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import { Dispatch, SetStateAction, useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import FormControl, { InputErrors, Register } from '../FormControl';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';

type GoogleAddressProps = {
  idx?: number;
  city: string;
  state: string;
  title: string;
  register?: Register;
  error?: InputErrors;
  className?: string;
  setMarker: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>;
};

export default function Address({
  idx,
  city,
  state,
  title,
  className,
  setMarker,
}: GoogleAddressProps) {
  const {
    value,
    init,
    clearSuggestions,
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete({
    initOnMount: false,
  });

  const { isLoaded } = useGoogleApi({
    onLoad: () => init(),
  });

  const [streetAddress, setStreetAddress] = useState('');
  const [close, setClose] = useState(false);
  const [hover, setHover] = useState(false);
  const svgEvents = useResponsiveNav({
    onClick: () => setHover((prev) => !prev),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  });
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    streetAddress === '' && 'This field is required';
    if (title === 'address') {
      setStreetAddress(e.target.value);
      setClose(false);
      setValue(`${streetAddress}, ${city}, ${state}`);
    } else {
      setClose(false);
      setStreetAddress(e.target.value);
      setValue(`${streetAddress}, ${city}`);
    }
  }
// console.log(streetAddress);
  return (
    <div className={`relative ${className}`}>
      <FormControl
        as="input"
        type="text"
        required={idx === 2}
        className={styles.input}
        value={streetAddress?.split(',').slice(0, 2)}
        error={streetAddress === '' ? 'This field is required' : ''}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        name={title === 'address' ? 'address' : 'landmark'}
        onChange={handleAddress}
        placeholder={
          title === 'address' ? 'Enter Address' : 'Nearest major road/Landmark'
        }
        labelText={title === 'address' ? 'Address' : 'Landmark'}
      />
      {title === 'address' && (
        <div>
          <Svg
            {...svgEvents}
            href={alarmIcon}
            className={`left-16 ${styles.alarmSvg}
            ${streetAddress !== '' ? styles.see : styles.hide}
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
        className={`right-5 ${styles.svg}
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
        ''
      )}
    </div>
  );
}
