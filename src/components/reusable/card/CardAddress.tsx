import { locationIcon } from '~/assets/icons';
import Svg from '../Svg';
import { Listing } from '~/utils/types/listing.types';
import { useNavigate } from 'react-router-dom';

export default function CardAddress({
  addressProps,
}: {
  addressProps: Listing;
}) {
  const navigate = useNavigate();
  return (
    <>
      <span className="cursor-pointer" 
        onClick={() => {
          location.pathname.includes('dashboard') &&
            navigate(`/property-item/${addressProps.id}`)
        }}
      >
        <span className={location.pathname.includes('dashboard') ? 'text-blue-400 text-lg font-bold': ''}>
        {addressProps.title}
        </span>
      </span>
      <div className="flex align-y c-grey">
        <Svg
          width_2="0.8rem"
          width="1rem"
          height="1.5rem"
          className="locate"
          href={locationIcon}
        />
        <small>{addressProps.address}</small>
      </div>
    </>
  );
}
