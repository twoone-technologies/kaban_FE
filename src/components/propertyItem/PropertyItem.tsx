import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Container from '../reusable/Container';
import { dummyObj } from '../reusable/dummyObj';
import styles from './propertyItem.module.css';
import Gallery from './Gallery';
import Svg from '../reusable/Svg';
import { alarmIcon, arrowIcon, shareIcon } from '~/assets/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './modal/Modal';
import useModal from '~/hooks/useModal';

export default function PropertyItem() {
  const [copy, setCopy] = useState(false);
  const { id } = useParams();
  const listingItem = dummyObj.find((item) => parseInt(item.id) === Number(id));

  const tooltip = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 4000);
  };

  // const [ref, onOpen, onClose] = useModal();
  console.log(location.href);

  return (
    <Container element="section" className={styles.wrapper}>
      {/* <Modal ref={ref} onClose={onClose}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Modal> */}
      <div className={`flex s-btw f-width ${styles.tools}`}>
        <Link to={'/'} className={`flex align-y c-pad ${styles.rotate}`}>
          <Svg href={arrowIcon} />
        </Link>
        <div className={`flex align-y ${styles.toolkit}`}>
          <i
            className={`c-pad ${styles.tooltip}
            ${copy === true ? styles.active : styles.slide}`}
          >
            Copied
          </i>
          <CopyToClipboard text={location.href} onCopy={tooltip}>
            <Svg href={shareIcon} />
          </CopyToClipboard>
          <Svg href={alarmIcon} />
        </div>
      </div>
      <Gallery item={listingItem} />
    </Container>
  );
}
