import { Dispatch, SetStateAction, useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import PlacesAutocomplete from '.';
import FormInput from '../FormInput';
import useGoogleApi from '~/hooks/useGoogleApi';
import { Libraries } from '@react-google-maps/api';
import styles from '~/components/dashboard/postproperty/pages/post.module.css'
import { alarmIcon, closeIcon } from '~/assets/icons';
import Svg from '../Svg';
import Tooltip from '../Tooltip';
import useResponsiveNav from '~/hooks/useResponsiveNav';

type GoogleAddressProps = {
  city: string, 
  state: string,
  title: string,
  className?: string;
  setMarker: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>, 
};

const API_KEY = import.meta.env.VITE_API_KEY || '';
const libraries: Libraries = ['places'];

export default function Address({setMarker, className, city, state, title}: GoogleAddressProps) {
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
    apiKey: API_KEY,
    libraries: libraries,
    onLoad: () => init(),
  });

  const [address, setAddress] = useState('');
  const [close, setClose] = useState(false)
  const [hover, setHover] = useState(false)
  const svgEvents = useResponsiveNav({ 
    onClick: () => setHover(prev => !prev), 
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false) 
  });

  return (
    <div className={`relative ${className}`}>
      <FormInput 
        type="text"
        inputClass={styles.input}
        value={address.split(',')[0]}
        className={`gap-0 f-column ${styles.inputWrap}`}
        title={title === 'address' ? 'address' : 'landmark'}
        placeholder={title === "address" ? "Enter Address" : "Nearest major road/Landmark"}
        title_1={ title === 'address' ? 'Address' : 'Landmark'}
        onChange1={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (title === 'address') {
            setAddress(e.target.value)
            setClose(false)
            setValue(`${address}, ${city}, ${state}`)
          } else {
            setClose(false)
            setAddress(e.target.value);
            setValue(`${address}, ${city}`);
          }
        }}
      />
      {title === 'address' &&
        <div>
          <Svg {...svgEvents} href={alarmIcon} className={`left-16 ${styles.alarmSvg}
            ${address !== '' ? styles.see : styles.hide}
            ${ close === true ? styles.hide : styles.see}`}
            
          />
          <Tooltip copy={hover} popOver={true} 
            text={<span className={styles.tooltipMsg}>select <i>set pin manually</i> in <i>Map Address</i> to set the landmark and click the property on the map</span>}
          />
        </div>
      }
      <Svg href={closeIcon} className={`right-5 ${styles.svg}
        ${address !== '' ? styles.see : styles.hide}
        ${ close === true ? styles.hide : styles.see}`}
        onClick={() => {clearSuggestions(); setClose(true)}}
      />
      {isLoaded ? (
        <PlacesAutocomplete
          setSelected={setMarker}
          inputValue={value}
          currStat={status}
          setValues={setValue}
          dataArr={data}
          closeX={setClose}
          setInputAddress={setAddress}
          clearOptions={clearSuggestions}
        />
      ) : (
        ''
      )}
    </div>
  );
}
