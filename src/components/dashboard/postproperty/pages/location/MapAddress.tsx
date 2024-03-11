import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { SetStateAction, useState } from 'react';
import MapLoader from '~/components/map/MapLoader';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl from '~/components/reusable/FormControl';
import Address from '~/components/reusable/placesAutocomplete/Address';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import { mapOptions } from '~/components/dashboard/postproperty/pages/miscellenous//mapProps';

type Props = {
  city: string;
  state: string;
  mapCenter: { lat: number; lng: number };
  marker: google.maps.LatLngLiteral | null;
  handleMapClick: (e: google.maps.MapMouseEvent) => void;
  setMarker: React.Dispatch<SetStateAction<google.maps.LatLngLiteral | null>>;
};

export default function MapAddress({
  city,
  state,
  marker,
  mapCenter,
  setMarker,
  handleMapClick,
}: Props) {
  const [pin, setPin] = useState(false);
  const handlePinSelect = (string: 'select pin manually' | 'same as above') => {
    string === 'select pin manually' ? setPin(true) : setPin(false);
  };

  return (
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
          <FormControl
            as="select"
            name="mapAddress"
            containerClass={`gap-0 f-column ${styles.inputWrap}`}
            className={styles.input}
            labelText="Map Address"
            icon={<Svg className={styles.svg} href={arrowIcon} />}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              handlePinSelect(
                e.target.value as 'select pin manually' | 'same as above',
              );
            }}
          >
            <OptGroup header="map options" subItems={mapOptions} />
          </FormControl>
          {pin && (
            <Address
              setMarker={setMarker}
              city={city}
              state={state}
              title="landmark"
            />
          )}
          <FormControl
            as="input"
            name="longitude"
            containerClass={`gap-0 f-column ${styles.inputWrap}`}
            className={styles.input}
            labelText="Longitude"
            placeholder="Longitude"
            defaultValue={marker?.lng}
            type="number"
          />
          <FormControl
            as="input"
            name="latitude"
            containerClass={`gap-0 f-column ${styles.inputWrap}`}
            className={styles.input}
            labelText="Latitude"
            placeholder="Latitude"
            type="number"
            defaultValue={marker?.lat}
          />
        </div>
      </div>
    </InputWrap>
  );
}
