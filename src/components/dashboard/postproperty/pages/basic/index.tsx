import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import Details from '~/components/dashboard/postproperty/pages/basic/Details';
import SalesRentPrice from '~/components/dashboard/postproperty/pages/basic/SalesRentPrice';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import PropertyDescription from '~/components/dashboard/postproperty/pages/basic/PropertyDescription';
import ContinueOrCancel from '~/components/dashboard/postproperty/pages/miscellenous/ContinueOrCancel';

type BasicProps = {
  className: string;
  activeIndex: number;
  setNewIndex: (num: number) => void;
};

export default function Basic({
  className,
  activeIndex,
  setNewIndex,
}: BasicProps) {
  const svg = <Svg className={styles.svg} href={arrowIcon} />;

  return (
    <div className={`flex f-column transition ease-in-out  gap-2 ${className}`}>
      <PropertyDescription svg={svg} />
      <SalesRentPrice svg={svg} />
      <Details svg={svg} />
      <ContinueOrCancel activeIndex={activeIndex} setNewIndex={setNewIndex} />
    </div>
  );
}
