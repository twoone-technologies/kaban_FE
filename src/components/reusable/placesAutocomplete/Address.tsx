import { Dispatch, SetStateAction, useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import PlacesAutocomplete from '.';
import useGoogleApi from '~/hooks/useGoogleApi';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css'
import { alarmIcon, closeIcon } from '~/assets/icons';
import Svg from '../Svg';
import Tooltip from '../Tooltip';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import FormControl from '../FormControl';
import { useActionData } from 'react-router-dom';
import { ErrorObj } from '~/components/dashboard/postproperty';

type GoogleAddressProps = {
  city: string, 
  state: string,
  title: string,
  error?: string,
  className?: string;
  setMarker: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>, 
};

export default function Address(
  {setMarker, className, city, state, title}: GoogleAddressProps) {
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

  
  const errors = useActionData() as ErrorObj
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
      <FormControl 
        as='input'
        type="text"
        className={styles.input}
        value={address.split(',')[0]}
        error={errors?.address != undefined && title === 'address' ? errors.address[0] : undefined}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        name={title === 'address' ? 'address' : 'landmark'}
        placeholder={title === "address" ? "Enter Address" : "Nearest major road/Landmark"}
        labelText={ title === 'address' ? 'Address' : 'Landmark'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
            text={<span className={styles.tooltipMsg}>select <i>set pin manually</i> in <i>Map Address</i> to set the landmark and click the location on the map</span>}
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
      ) : ('')}
    </div>
  );
}
