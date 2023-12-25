import { Wrapper } from '~/components/reusable/Container';
import ListingData from '../reusables/ListingData';
import { buildingsIcon } from '~/assets/icons';
import styles from './insights.module.css';
import ItemInfo from '~/components/propertyItem/itemInfo/ItemInfo';
import Listings from './listingswrap';

export default function Insight() {
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
    <Wrapper element="section">
      <div className={`grid gap f-width ${styles.dataWrap}`}>
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'Total Listing'}
        />
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'For Rent'}
        />
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'For Sale'}
        />
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'Expired'}
        />
      </div>
      <ItemInfo
        h1={'Total Insights'}
        children={
          <div className="flex gap">
            <div>
              <ul>
                <li className={`f-width c-pad ${styles.listItem}`}>
                  <span>Views </span>
                  <span className={styles.figs}>3</span>
                </li>
                <li className={`f-width c-pad ${styles.listItem1}`}>
                  <span>Enquiry </span>
                  <span className={styles.figs}>4</span>
                </li>
              </ul>
              <div>
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
                  <div className={`flex f-column ${styles.kbtTotal}`}>
                    <b>88%</b>
                    <small>Conversion Rate</small>
                  </div>
                </div>
              </div>
            </div>
            <div>hhhh</div>
          </div>
        }
      />
      <Listings />
    </Wrapper>
  );
}
