import Button from '~/components/reusable/Button';
import styles from './wallet.module.css';
import { Wrapper } from '~/components/reusable/Container';
import FormInput from '~/components/reusable/FormInput';
import Svg from '~/components/reusable/Svg';
import { arrowIcon, arrowLeftIcon, arrowRightIcon, sortIcon } from '~/assets/icons';
import { sortToken, transactionArr } from './tokenHistory';
import useSortSwitch from '~/hooks/useSortSwitch';

export type Transaction = {
  id: string;
  title: string;
  action: string;
  tokenQuantity: string;
  date: string;
};

export default function Wallet() {
  const { sortArr, handleSort } = useSortSwitch(transactionArr);

  return (
    <Wrapper element="section">
      <div className={`b-radius flex f-column pad gap-0 ${styles.tokenBalance}`}>
        <span>Available Balance</span>
        <h3>50<span>kbt</span></h3>
        <Button className="c-pad">Buy Kaban Token</Button>
      </div>
      <div className={`f-width b-radius ${styles.table_wrap}`}>
        <div className="pad flex align-y s-btw">
          <h3>Transaction History</h3>
          <div className="flex align-y gap">
            <Svg
              href={sortIcon}
              className={styles.sortIcon}
              width="50px"
              height="30px"
            />
            <FormInput
              title={'sort'}
              className={styles.sort}
              selectClass={styles.inputSort}
              header={'Sort by'}
              subItems={sortToken}
              onChange1={handleSort}
              link={arrowIcon}
            />
          </div>
        </div>
        <table className={`f-width b-radius ${styles.margin}`}>
          <thead className="">
            <tr className={styles.margin}>
              <th>Title</th>
              <th>Action</th>
              <th>Token Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="">
            {sortArr.map((item) => 'action' in item && 
              <tr key={item.id} className="">
                <td>{(item as Transaction).title}</td>
                <td>{(item as Transaction).action}</td>
                <td>{(item as Transaction).tokenQuantity}</td>
                <td>{(item as Transaction).date}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={`flex s-btw c-pad ${styles.pagination}`}>
          <div className="flex gap">
            <Svg href={arrowLeftIcon} height="1.2rem" /> Prev
          </div>
          <div className="flex gap">
            <span className={styles.td}>2</span>
            <span className={styles.td}>3</span>
            <span className={styles.td}>4</span>
            <span className={styles.td}>5</span>
          </div>
          <div className="flex gap">
            Next <Svg href={arrowRightIcon} height="1.2rem" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
