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

export default function PropertyItem() {
  const [show, setShow] = useState(false)
  const [copy, setCopy] = useState(false);
  const { id } = useParams();
  const listingItem = dummyObj.find((item) => parseInt(item.id) === Number(id));

  const handleShare = () => {
    console.log(location);
    if (navigator.share) {
      // Share data
      const shareData = {
        title: 'Share GOAT',
        text: 'Share TextGOAT',
        url: `${location.href}`,
      };
    
      // Open the share dialog
      navigator.share(shareData)
        .then(() => {
          console.log('Share successful');
        })
        .catch((error) => {
          console.error('Share failed:', error);
        });
    } else {
      // Fallback for browsers that don't support the Web Share API
      // You can implement your custom sharing solution here
      console.log('Web Share API is not supported');
    }
  }

  const tooltip = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 4000);
  };

  console.log(location.href);

  return (
    <Container element="section" className={styles.wrapper}>
      <Modal isVisible={show} onClose={() => setShow(false)}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Modal>
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
            <Svg href={shareIcon} onClick={handleShare} />
          </CopyToClipboard>
          <Svg href={alarmIcon} onClick={() => setShow(true)} />
        </div>
      </div>
      <Gallery item={listingItem} />
    </Container>
  );
}
