import React, { useCallback } from 'react';
import { GoogleMap, Marker, Libraries} from '@react-google-maps/api';
import styles from './map.module.css';
import { mapPinIcon } from '~/assets/icons';
import { HouseCard } from '../reusable/card/Card';
import useGoogleApi from '~/hooks/useGoogleApi';

type MapProps = {
  location?: {
    address: string;
    coordinates: [number, number];
  };
  onClick?: (select: number) => void;
  onMapClick?: (e: google.maps.MapMouseEvent) => void;
  markerPosition?: { lat: number; lng: number };
  idx?: string;
  object?: HouseCard[];
  active?: number;
  zoomLevel?: number;
} & React.ComponentProps<'div'>;

const API_KEY = import.meta.env.VITE_API_KEY || '';
const libraries: Libraries = ["places"];

export default function Map({
  className,
  idx,
  onClick,
  onMapClick,
  markerPosition,
  object,
}: MapProps) {
  const { isLoaded, loadError } = useGoogleApi({
    apiKey: API_KEY,
    libraries: libraries,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const infoWindow = new window.google.maps.InfoWindow();

      if (window.location.pathname === `/property-item/${idx}`) {
        const listing = object?.find(
          (item: HouseCard) => parseInt(item.id) === Number(idx),
        );

        if (listing?.location.coordinates) {
          const marker = new window.google.maps.Marker({
            position: {
              lat: listing.location.coordinates[0],
              lng: listing.location.coordinates[1],
            },
            map: map,
            icon: {
              url: mapPinIcon,
              scaledSize: new window.google.maps.Size(40, 40),
            },
          });

          marker.addListener('click', () => {
            infoWindow.setPosition({
              lat: listing.location.coordinates[0],
              lng: listing.location.coordinates[1],
            });
            infoWindow.setContent(`
            <div>
              <h5>${listing.address}</h5>
              <small>${listing.title},</small>
              <small>${listing.property_type}</small>
            </div>
          `);
            infoWindow.open(map, marker);
          });

          const center = {
            lat: listing.location.coordinates[0],
            lng: listing.location.coordinates[1],
          };

          map.setCenter(center);
        }
      } else {
        object?.map((markerData: HouseCard) => {
          const marker = new window.google.maps.Marker({
            position: {
              lat: markerData.location.coordinates[0],
              lng: markerData.location.coordinates[1],
            },
            map: map,
            icon: {
              url: mapPinIcon, // Path to your custom marker icon
              scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
            },
          });

          marker.addListener('click', () => {
            const cardElement = document.querySelector(
              `#property-${markerData.id}`,
            );

            if (cardElement) {
              cardElement.scrollIntoView({ behavior: 'smooth' });
            }
            onClick && onClick(parseInt(markerData.id));
            infoWindow.setPosition({
              lat: markerData.location.coordinates[0],
              lng: markerData.location.coordinates[1],
            });
            infoWindow.setContent(`
              <div>
                <h5>${markerData.address}</h5>
                <small>${markerData.title},</small>
                <small>${markerData.property_type}</small>
              </div>
            `);
            infoWindow.open(map, marker);
          });
        });

        if (object && object?.length > 0) {
          let sumLat = 0;
          let sumLng = 0;

          object?.forEach((markerData: HouseCard) => {
            sumLat += markerData.location.coordinates[0];
            sumLng += markerData.location.coordinates[1];
          });

          const avgLat = sumLat / object?.length;
          const avgLng = sumLng / object?.length;

          map.setCenter({ lat: avgLat, lng: avgLng });
        }
      }
    },
    [idx, object, onClick],
  );

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }
  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className={`${styles.map}`}>
      <GoogleMap
        onClick={onMapClick}
        zoom={markerPosition ? 15 : 6}
        center={markerPosition ? markerPosition : { lat: 10.00000000, lng: 8.00000000 }}
        onLoad={onLoad}
        mapContainerClassName={`${styles.google_map} ${className}`}
      >
        {markerPosition && (
          <Marker
            position={(markerPosition)}
            icon={{
              url: mapPinIcon,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}
