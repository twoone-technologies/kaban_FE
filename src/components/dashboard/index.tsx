import {
  buildingsIcon,
  editIcon,
  exLinkIcon,
  eyeIcon,
  giftIcon,
  inviteIcon,
  kbtIcon,
  phoneIcon,
  whatsappIcon,
} from '~/assets/icons';
import ikon from '~/assets/img/Ikon.png';
import Button from '../reusable/Button';
import Container from '../reusable/Container';
import Svg from '../reusable/Svg';
import styles from './index.module.css';
import ListingData from './reusables/ListingData';
import { Link } from 'react-router-dom';
import Rating from '../propertyItem/micellenous/Rating';
import ItemInfo from '../propertyItem/itemInfo/ItemInfo';

export default function Dashboard() {
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
    <Container element="section" className={`flex f-column ${styles.overview}`}>
      <div
        className={`flex s-btw pad-block-0 pad-inline-1 b-radius ${styles.invite}`}
      >
        <ListingData
          href={giftIcon}
          data="Refer & Earn"
          title={'invite a realtor and earn 15kbt per referral'}
        />
        <Button className={`flex gap align-y c-pad`}>
          <Svg href={inviteIcon} />
          Invite a realtor
        </Button>
      </div>
      <div className={`grid gap-2 ${styles.agentStat}`}>
        <div
          className={`flex f-column f-width gap b-radius ${styles.accountDetails}`}
        >
          <div className={`pad-15`}>
            <div className={`flex s-btw ${styles.header}`}>
              <h3>Welcome, FISHER</h3>
              <div className={`flex gap-15`}>
                <span>Balance(KBT)</span>
                <div className={`flex gap`}>
                  <Svg href={kbtIcon} />
                  <div className={`flex f-column ${styles.currency}`}>
                    <small>100.00</small>
                    <small>≈ ₦1000</small>
                  </div>
                </div>
              </div>
            </div>
            <p>Hello, we're happy to have you here!</p>
          </div>
          <div className={`flex b-radius pad-1 ${styles.listingInfo}`}>
            <ListingData
              data={'6'}
              href={buildingsIcon}
              className={styles.l_data}
              title={'Total listing'}
            />
            <div className={`flex gap-1 ${styles.dataGrp}`}>
              <ListingData data={'3'} title={'Listing for rent'} />
              <ListingData data={'3'} title={'Listing for sale'} />
              <ListingData data={'3'} title={'Expired Listings'} />
            </div>
          </div>
          <div className={`flex s-btw pad-15 ${styles.report}`}>
            <small>Your property portfolio report</small>
            <Link to={''}>
              <small className="flex align-y bg-primary gap">View listings <Svg href={exLinkIcon} height='1.5rem' width='1rem'/></small>
            </Link>
          </div>
        </div>
        <div
          className={`flex f-column align-y pad-2 gap box_shadow ${styles.agentCard}`}
        >
          <div className={styles.imgWrap}>
            <img className={styles.img} src={ikon} alt="" />
          </div>
          <h4>Precious Ekong</h4>
          <span>email@email.com</span>
          <Rating num={4} />
          <Button className="flex gap align-x c-pad f-width">
            <Svg href={editIcon} />
            Edit Profile
          </Button>
        </div>
        <ItemInfo
          h1={'Insights'}
          className={`box_shadow ${styles.insights_wrap}`}
          children={
            <div className={`flex f-width ${styles.insightsDataWrap}`}>
              <ListingData
                className={styles.insights}
                href={eyeIcon}
                data={'3'}
                title={'Total views'}
              />
              <ListingData
                className={styles.insights}
                href={phoneIcon}
                data={'3'}
                title={'Phone Clicks'}
              />
              <ListingData
                className={styles.insights}
                href={whatsappIcon}
                data={'3'}
                title={'Whatsapp Clicks'}
              />
            </div>
          }
          visit={
            <div className="flex pad-1 s-btw">
              <h5>Performance</h5>
              <Link className="flex bg-primary gap" to={''}>
                View insights <Svg href={exLinkIcon} />
              </Link>
            </div>
          }
        />
      </div>
      <div className={`flex gap-1 ${styles.walletBlog}`}>
        <ItemInfo
          h1={'Your Wallet'}
          className={`box_shadow ${styles.wallet}`}
          children={
            <div
              className={`flex f-width f-column align-y ${styles.walletWrap}`}
            >
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
        <ItemInfo
          h1={'Realtors Blog'}
          className={`box_shadow f-width ${styles.wallet}`}
          children={
            <div className="flex f-width f-column gap-1">
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
            </div>
          }
          visit={
            <div className="flex pad-1 s-btw">
              <b></b>
              <Link className="flex bg-primary gap" to={''}>
                See all blogs <Svg href={exLinkIcon} />
              </Link>
            </div>
          }
        />
      </div>
    </Container>
  );
}
