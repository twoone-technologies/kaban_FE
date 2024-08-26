import type { Marker as GoogleMarker } from '@googlemaps/markerclusterer';
import {
  AdvancedMarker,
  Pin,
  useMap,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Listing } from '~/utils/types/listing.types';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

type MapPinsProps = {
  pois: Listing[] | Listing;
  markedPin?: google.maps.LatLngLiteral | null;
  handleStack?: (stack: 'listings' | 'map') => void;
};

export const MapPins = (props: MapPinsProps) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: GoogleMarker }>({});
  const [selectedPoi, setSelectedPoi] = useState<Listing | null>(null);
  const clusterer = useRef<MarkerClusterer | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({
        map,
        renderer: {
          render(cluster): GoogleMarker {
            return new google.maps.Marker({
              position: cluster.position,
              label: {
                text: String(cluster.count),
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
              },
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#0b3fa5',
                fillOpacity: 0.8,
                strokeColor: '#0b3fa5',
                strokeWeight: 3,
                scale: 20 + cluster.count / 20, // Adjust size based on cluster count
              },
              opacity: 0.8,
            });
          },
        },
      });
    }
  }, [map, markers]);

  const setMarkerRef = (marker: GoogleMarker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;
    setMarkers((prev) => {
      if (marker) {
        marker.addListener('click', () => {
          if (Array.isArray(props.pois)) {
            const selectedPoi = props.pois.find((poi) => poi._id === key);
            if (selectedPoi) {
              setSelectedPoi(selectedPoi)
              const cardElement = document.querySelector(
                `#property-${selectedPoi.id}`,
              );
              cardElement && cardElement.scrollIntoView({ behavior: 'smooth' });
              cardElement?.classList.add('active_card')
              
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current); // Clear any previous timeout
              }
              timeoutRef.current = setTimeout(() => {
                cardElement?.classList.remove('active_card')
                timeoutRef.current = null
              }, 2000);
              // clearTimeout(timeoutId)
            }
          } else {
            setSelectedPoi(props.pois);
          }
        });
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent, dom: Listing) => {
      if (!map) return;
      if (!ev.latLng) return;
      map.panTo(ev.latLng);
      setSelectedPoi(dom);
      props.handleStack && props.handleStack('listings');
    },
    [map, props],
  );

  // listingPage coordinates
  const position = {
    lat: (props.pois as Listing)?.location?.coordinates[0],
    lng: (props.pois as Listing)?.location?.coordinates[1],
  };

  return (
    <>
      {Array.isArray(props.pois) ? (
        props.pois.map((poi: Listing) => (
          <AdvancedMarker
            key={poi.id}
            clickable
            onClick={(e) => handleClick(e, poi)}
            position={{
              lat: poi.location?.coordinates[0],
              lng: poi.location?.coordinates[1],
            }}
            ref={(marker) =>
              setMarkerRef(marker as unknown as GoogleMarker, poi._id)
            }
          >
            <Pin
              background={'#437ef7'}
              glyphColor={'#eaebf0'}
              borderColor={'#eaebf0'}
            />
          </AdvancedMarker>
        ))
      ) : ( 
        <AdvancedMarker
          key={props.markedPin ? 1 : props.pois.id}
          clickable
          onClick={(e) => props.markedPin ? null : handleClick(e, props.pois as Listing)}
          position={props.markedPin ? props.markedPin : position}
          ref={(marker) =>
            props.markedPin ? null : setMarkerRef(marker as unknown as GoogleMarker, (props.pois as Listing)._id)
          }
        >
          <Pin
            background={'#437ef7'}
            glyphColor={'#eaebf0'}
            borderColor={'#eaebf0'}
          />
        </AdvancedMarker>
      )}
      {selectedPoi ? (
        <InfoWindow
          position={{
            lat: selectedPoi.location.coordinates[0],
            lng: selectedPoi.location.coordinates[1],
          }}
          headerContent={<h4>{selectedPoi.title}</h4>}
          onCloseClick={() => setSelectedPoi(null)}
          key={selectedPoi.id}
          pixelOffset={[0, -42]}
        >
          <p>{selectedPoi.property_type}</p>
          <p>{selectedPoi.address}</p>
          <p>{selectedPoi.city}</p>
          <p>{selectedPoi.state}</p>
        </InfoWindow>
      ) : null}
    </>
  );
};
