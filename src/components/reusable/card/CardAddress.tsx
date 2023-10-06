import { locationIcon } from '~/assets/icons';
import Svg from '../Svg';

export default function CardAddress({
  title,
  address,
}: {
  title: string;
  address: string;
}) {
  return (
    <>
      <span className="c-grey">{title}</span>
      <div className="flex align-y c-grey">
        <Svg
          width_2="0.8rem"
          width="1rem"
          height="1.5rem"
          className="locate"
          href={locationIcon}
        />
      <small>{address}</small>
      </div>
    </>
  );
}
