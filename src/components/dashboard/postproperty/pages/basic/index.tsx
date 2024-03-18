import { useState } from 'react';
import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import Details from '~/components/dashboard/postproperty/pages/basic/Details';
import SalesRentPrice from '~/components/dashboard/postproperty/pages/basic/SalesRentPrice';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import PropertyDescription from '~/components/dashboard/postproperty/pages/basic/PropertyDescription';
import { InputErrors, Register } from '~/components/reusable/FormControl';

type BasicProps = {
  error: InputErrors;
  className: string;
  activeIndex: number;
  register: Register;
};

export default function Basic({
  className,
  activeIndex,
  register,
  error,
}: BasicProps) {
  const svg = <Svg className={styles.svg} href={arrowIcon} />;
  const [details, setDetails] = useState(false);
  return (
    <fieldset
      className={`flex f-column transition ease-in-out  gap-2 ${className}`}
    >
      <PropertyDescription
        id={activeIndex}
        register={register}
        error={error}
        svg={svg}
        setDetails={setDetails}
      />
      <SalesRentPrice register={register} error={error} svg={svg} />
      <Details register={register} error={error} land={details} svg={svg} />
    </fieldset>
  );
}
