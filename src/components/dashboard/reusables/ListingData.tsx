import Svg from '~/components/reusable/Svg';
import styles from './reusables.module.css';
import { giftIcon } from '~/assets/icons';

export default function ListingData({
  data,
  href,
  title,
  className
}: {
  data: string;
  title: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={`flex gap-1 align-y ${className} ${styles.listingData}`}>
      {href &&
        (href === giftIcon ? (
          <div className={`flex align-x align-y ${styles.giftIcon}`}>
            <Svg href={href} />
          </div>
        ) : (
          <div className={`flex align-x align-y ${styles.svgWrap}`}>
            <Svg href={href} className={styles.svgClass} />
          </div>
        ))}
      <div>
        <h4 className={styles.num}>{data}</h4>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
}
