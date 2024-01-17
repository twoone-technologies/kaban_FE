import { Form } from 'react-router-dom';
import styles from './listings.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { IkonIcon } from '~/assets/img';
import Svg from '~/components/reusable/Svg';
import {
  arrowLeftIcon,
  arrowRightIcon,
  exLinkIcon,
  locationIcon,
  searchIcon,
} from '~/assets/icons';
import Label from '~/components/reusable/card/Label';
import FormInput from '~/components/reusable/FormInput';
import Button from '~/components/reusable/Button';

export default function Listings() {
  return (
    <div>
      <Form className={`flex ${styles.form}`}>
        <FormInput
          width="17px"
          height="17px"
          type={'text'}
          maxLength={30}
          // link={searchIcon}
          title={'search'}
          className={styles.input}
        />
        <Button type="submit" className={styles.btn}>
          <Svg href={searchIcon} />
        </Button>
      </Form>
      <div className={`f-width b-radius ${styles.table_wrap}`}>
        <table className={`f-width b-radius ${styles.margin}`}>
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
                        <Svg
                          href={locationIcon}
                          width="0.5rem"
                          height="1rem"
                          className={styles.locationSvg}
                        />
                        <span>Uyo, Nwaniba</span>
                      </div>
                    </div>
                  }
                />
              </td>
              <td>
                <Label type={'featured'} />
              </td>
              <td>20000000</td>
              <td>22</td>
              <td>22</td>
              <td>22</td>
              <td>
                <Svg href={exLinkIcon} height="1.3rem" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={`flex s-btw pad-1 ${styles.pagination}`}>
          <div>
            <Svg href={arrowLeftIcon} height="1.2rem" /> Prev
          </div>
          <div>
            <span className={styles.td}>2</span>
            <span className={styles.td}>3</span>
            <span className={styles.td}>4</span>
            <span className={styles.td}>5</span>
          </div>
          <div>
            Next <Svg href={arrowRightIcon} height="1.2rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
