import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';
import styles from './listings.module.css'
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { IkonIcon } from '~/assets/img';
import Svg from '~/components/reusable/Svg';
import { arrowLeftIcon, arrowRightIcon, exLinkIcon, locationIcon } from '~/assets/icons';
import Label from '~/components/reusable/card/Label';

export default function Listings() {
  return (
    <div>
      <Form>
        <input type="search" />
      </Form>
      <table className={`f-width b-radius ${styles.margi}`}>
        <thead className="">
          <tr className={styles.margin}>
            <th>Listings</th>
            <th>Status</th>
            <th>Price (₦)</th>
            <th>Page View</th>
            <th>WhatsApp Click</th>
            <th>Phone Click</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td>
              <CardAgentInfo
                imgClass={styles.img}
                className={styles.bgCard}
                src={IkonIcon}
                identity={
                  <div className={styles.listings}>
                    <h5>shop</h5>
                    <h3>Luxury apartments</h3>
                    <div className={styles.address}>
                      <Svg href={locationIcon} 
                        width='0.5rem' height='1rem'
                        className={styles.locationSvg}
                      />
                      <span>Uyo, Nwaniba</span>
                    </div>
                  </div>
                } />
            </td>
            <td>
              <Label type={'featured'} />
            </td>
            <td>20000000</td>
            <td>22</td>
            <td>22</td>
            <td>22</td>
            <td><Svg href={exLinkIcon} height='1.3rem' /></td>
          </tr>
        </tbody>
        <tfoot>
          <tr className={styles.pagination}>
            <td colSpan={2}>
              <Svg href={arrowLeftIcon} height='1rem'/> Prev
            </td>
            <td colSpan={4}>
              <span className={styles.td}>2</span>
              <span className={styles.td}>3</span>
              <span className={styles.td}>4</span>
              <span className={styles.td}>5</span>
            </td>
            <td>Next <Svg href={arrowRightIcon} height='1rem'/></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
