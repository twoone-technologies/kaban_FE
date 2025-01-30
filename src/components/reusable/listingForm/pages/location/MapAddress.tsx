import { arrowIcon, logoIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { SetStateAction, useState } from 'react';
import OptGroup from '~/components/heroSection/Optgroup';

import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import Landmark from '~/components/reusable/placesAutocomplete/Address';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import { mapOptions } from '~/components/reusable/listingForm/pages/miscellenous//mapProps';
import { Listing } from '~/utils/types/listing.types';
import MapComponent from '~/components/map/MapComponent';
import { MapMouseEvent } from '@vis.gl/react-google-maps';
import useGoogleApi from '~/hooks/useGoogleApi';
import { ThreeDots } from '~/components/reusable/Button';

type Props = {
  idx: number;
  city: string;
  state: string;
  register?: Register;
  error: InputErrors;
  listing: Listing;
  marker: google.maps.LatLngLiteral | null;
  mapCenter: google.maps.LatLngLiteral | null;
  handleMapClick: ((event: MapMouseEvent) => void) | undefined;
  setMarker: React.Dispatch<SetStateAction<google.maps.LatLngLiteral | null>>;
  setMapCenter: React.Dispatch<SetStateAction<google.maps.LatLngLiteral | null>>;
};

export default function MapAddress({
  city,
  state,
  error,
  marker,
  listing,
  setMarker,
  register,
  mapCenter,
  setMapCenter,
  handleMapClick,
}: Props) {
  const [pin, setPin] = useState(false);
  const handlePinSelect = (string: 'select pin manually' | 'same as above') => {
    string === 'select pin manually' ? setPin(true) : setPin(false);
  };

  // useEffect(() => {return},[marker])

  const { isLoaded } = useGoogleApi({})
  return (
    <InputWrap>
      <h3>Map</h3>
      <div className={`gap-x-0.5 ${styles.mapData}`}>
        <div className={styles.mapWrap}>
          {isLoaded ? (
            <MapComponent
              setMapCenter={setMapCenter}
              mapCenter={mapCenter}
              markerArr={listing}
              markedPin={marker}
              onClick={pin ? handleMapClick : undefined}
          />
          ) : (
            <div className='flex flex-col h-full align-y align-x'>
              <Svg width='9rem' className='text-blue-700' height='3rem' href={logoIcon} />
              <ThreeDots />
            </div>
          )
        }
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
            <Landmark
              required
              city={city}
              state={state}
              name="landmark"
              register={register}
              setMarker={setMarker}
              error={error.landmark?.message}
            />
          )}
          <FormControl
            as="input"
            name="longitude"
            containerClass={`gap-0 f-column ${styles.inputWrap}`}
            className={styles.input}
            labelText="Longitude"
            placeholder="Longitude"
            error={error?.longitude && error.longitude.message}
            readOnly
            value={marker?.lng || ''}
            type="number"
          />
          <FormControl
            as="input"
            name="latitude"
            containerClass={`gap-0 f-column ${styles.inputWrap}`}
            className={styles.input}
            labelText="Latitude"
            placeholder="Latitude"
            error={error.latitude && error.latitude.message}
            type="number"
            readOnly
            value={marker?.lat || ''}
          />
        </div>
      </div>
    </InputWrap>
  );
}
