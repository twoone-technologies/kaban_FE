import { Link } from 'react-router-dom';
import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import styles from './support.module.css';

export default function ConclusionAndLinks() {
  return (
    <div className="gap my-8 f-column sm:flex-row flex s-btw w-full">
      <div className={`flex gap flex-col ${styles.helpQuest}`}>
        <h3 className="font-bold">
          Thank you for choosing us for your real estate need
        </h3>
        <span className="">
          We're committed to helping you succeed in the real estate market, and
          we're here to support you every step of the way.
        </span>
      </div>
      <div className="flex gap">
        <Link to={'#'} className={`flex align-x align-y ${styles.svgWrap}`}>
          <Svg height="1.9rem" href={facebookIcon} />
        </Link>
        <Link to={'#'} className={`flex align-x align-y ${styles.svgWrap}`}>
          <Svg height="1.9rem" href={twitterIcon} />
        </Link>
        <Link to={'#'} className={`flex align-x align-y ${styles.svgWrap}`}>
          <Svg height="1.9rem" href={instagramIcon} />
        </Link>
        <Link to={'#'} className={`flex align-x align-y ${styles.svgWrap}`}>
          <Svg height="1.9rem" href={linkedinIcon} />
        </Link>
      </div>
    </div>
  );
}
