import FormInput from '~/components/reusable/FormInput';
import InputWrap from './InputWrap';
import styles from './post.module.css';
import MapLoader from '~/components/map/MapLoader';
import { useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { mapOptions } from './mapOptions';
import { arrowIcon } from '~/assets/icons';
import Address from '~/components/reusable/placesAutocomplete/Address';

type props = {
  className: string;
};

export default function ListingLocation({ className }: props) {
  const { clearSuggestions } = usePlacesAutocomplete();

  const [marker, setMarker] = useState<google.maps.LatLngLiteral | null>(null);
  const [pin, setPin] = useState(false);

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 10.00000000, lng: 8.00000000 })

  const handlePinSelect = (string: 'select pin manually' | 'same as above') => {
    string === 'select pin manually' ? setPin(true) : setPin(false) 
  }

  const handleMapClick = (e: google.maps.MapMouseEvent) => { 
    if (!e.latLng) return
    const obj: google.maps.LatLngLiteral = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarker(obj);
    setMapCenter({ lat: obj.lat, lng: obj.lng });
  };

  return (
    <div className={className} onClick={() => clearSuggestions()}>
      <InputWrap>
        <h3>Location</h3>
        <div className={`gap ${styles.locationData}`}>
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="State"
            title={'state'}
            type="text"
            onChange1={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
            placeholder="Akwa Ibom, Lagos, Rivers"
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="City"
            title={'city'}
            type="text"
            onChange1={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
            placeholder="Uyo, Ikeja, Port Harcourt"
          />
          <Address
            className={styles.address}
            setMarker={setMarker}
            city={city}
            state={state}
            title='address'
          />
        </div>
      </InputWrap>
      <InputWrap>
        <h3>Map</h3>
        <div className={`gap-x-0.5 ${styles.mapData}`}>
          <div className={styles.mapWrap}>
            <MapLoader
              center={mapCenter}
              markerPosition={marker}
              onMapClick={pin === true ? handleMapClick : undefined} 
            />
          </div>
          <div className="flex gap flex-col justify-between">
            <FormInput
              className={`gap-0 f-column ${styles.inputWrap}`}
              selectClass={styles.input}
              title_1="Map Address"
              link={arrowIcon}
              svgI={'top-9'}
              title={'mapAddress'}
              onChange1={(e: React.ChangeEvent<HTMLInputElement>) => 
                handlePinSelect(e.target.value as 'select pin manually' | 'same as above')}
              header='map options'
              subItems={mapOptions}
            />
            {pin && <Address
              setMarker={setMarker}
              city={city}
              state={state}
              title='landmark'
            />}
            <FormInput
              className={`gap-0 f-column ${styles.inputWrap}`}
              inputClass={styles.input}
              title_1="Longitude"
              title={'longitude'}
              defaultValue={marker?.lng}
              type="number"
            />
            <FormInput
              className={`gap-0 f-column ${styles.inputWrap}`}
              inputClass={styles.input}
              title_1="Latitude"
              title={'latitude'}
              type="number"
              defaultValue={marker?.lat}
            />
          </div>
        </div>
      </InputWrap>
    </div>
  );
}
