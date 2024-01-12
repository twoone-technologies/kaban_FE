import { Link } from 'react-router-dom';
import styles from './wallet.module.css'
import { exLinkIcon } from '~/assets/icons';
import ItemInfo from '~/components/propertyItem/itemInfo/ItemInfo';
import Svg from '~/components/reusable/Svg';

export default function Wallet() {
  const radius = 70;
  const centerX = 100;
  const centerY = 100;
  const startAngle = Math.PI * 1.5;
  const endAngle = Math.PI * -1.76; // Half of a circle

  // Calculate the start and end points of the arc
  const startX = centerX + radius * Math.cos(startAngle);
  const startY = centerY + radius * Math.sin(startAngle);
  const endX = centerX + radius * Math.cos(endAngle);
  const endY = centerY + radius * Math.sin(endAngle);

  // Construct the path string for the arc
  const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;

  return (
    <ItemInfo
      h1={'Your Wallet'}
      className={`box_shadow ${styles.wallet}`}
      children={
        <div className={`flex f-width f-column align-y ${styles.walletWrap}`}>
          <div className={styles.svgWrapper}>
            <svg width="200" height="200">
              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="#5CB1FF"
                strokeWidth="16"
                fill="none"
              />
              <path
                d={pathData}
                stroke="#437EF7"
                strokeWidth="16"
                fill="none"
              />
            </svg>
            <div className={styles.kbtTotal}>
              <span>Total</span>
              <p>KBT 0</p>
            </div>
          </div>
          <ul className={`f-width ${styles.list}`}>
            <li className={styles.listItem}>
              <span>Referrals</span>
              <span className={styles.listKbt}>KBT 0</span>
            </li>
            <li className={styles.listItem}>
              <span>Deposit</span>
              <span className={styles.listKbt}>KBT 0</span>
            </li>
          </ul>
        </div>
      }
      visit={
        <div className="flex pad-1 s-btw">
          <h5>Total Balances</h5>
          <Link className="flex bg-primary gap" to={''}>
            Open <Svg href={exLinkIcon} />
          </Link>
        </div>
      }
    />
  );
}
