import Button from '~/components/reusable/Button';
import styles from './wallet.module.css';
import { Wrapper } from '~/components/reusable/Container';
import Svg from '~/components/reusable/Svg';
import { arrowLeftIcon, arrowRightIcon, sortIcon } from '~/assets/icons';
import { sortToken, transactionArr } from './tokenHistory';
import useSortSwitch from '~/hooks/useSortSwitch';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl from '~/components/reusable/FormControl';
import Modal from '~/components/reusable/modal/Modal';
import { useState } from 'react';

export type Transaction = {
  id: string;
  title: string;
  action: string;
  tokenQuantity: string;
  date: string;
};

export default function Token() {
  const { sortArr, handleSort } = useSortSwitch(transactionArr);
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper element="section">
      <div
        className={`b-radius flex f-column p-4 gap-0 ${styles.tokenBalance}`}
      >
        <span>Available Balance</span>
        <h3>
          50<span>kbt</span>
        </h3>
        <Button onClick={() => setShowModal(true)} className="c-pad">
          Buy Kaban Token
        </Button>
        <Modal isVisible={showModal} closeModal={() => setShowModal(false)}>
          <div className="f-column w-max mb-0.5 text-left">
            <h2 className='mb-1 text-2xl font-bold'>Buy Token</h2>
            <p className='text-gray-400'>Available Balance</p>
            <h3 className='font-bold text-sm'>50<span> KBT</span></h3>
          </div>
          <hr className='mb-5' />
          <div className="flex flex-col gap">
            <FormControl
              as="input"
              labelText={<b>Enter amount to be received (KBT)</b>}
              containerClass={styles.select}
              placeholder="Min: 100"
              className={styles.inputSelect}
            />
            <FormControl
              as="input"
              labelText={<b>amount</b>}
              containerClass={styles.input}
              className={styles.inputSelect}
              placeholder="Enter Amount"
            />
            <Button className="py-3 mt-1 w-full">Buy Token</Button>
          </div>
        </Modal>
      </div>
      <div className={`f-width b-radius p-4 ${styles.table_wrap}`}>
        <div className="pad flex align-y s-btw">
          <h3>Transaction History</h3>
          <div className="flex align-y gap">
            <Svg
              href={sortIcon}
              className={styles.sortIcon}
              width="50px"
              height="30px"
            />
            <FormControl
              as="select"
              containerClass={styles.sort}
              className={styles.inputSort}
              onChange={(e) => handleSort(e.target.value)}
            >
              <OptGroup header="Sort options" subItems={sortToken} />
            </FormControl>
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
            {sortArr.map(
              (item) =>
                'action' in item && (
                  <tr key={item.id} className="">
                    <td>{(item as Transaction).title}</td>
                    <td>{(item as Transaction).action}</td>
                    <td>{(item as Transaction).tokenQuantity}</td>
                    <td>{(item as Transaction).date}</td>
                  </tr>
                ),
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
