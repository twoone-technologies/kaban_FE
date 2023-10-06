import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import styles from './map.module.css'

type MapProps = {
  location: {
    address: string,
    coordinates: [
      number,
      number
    ]
  },
  zoomLevel: number;
} & React.ComponentProps<'div'>

export default function Map({ location, zoomLevel, className }: MapProps) {
  return (
    <div className={`${styles.map} ${className}`}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAT-hRk7tVNYvzXUjMPhZLkUtEm8wofOYs' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact> */}
    </div>
  );
}
