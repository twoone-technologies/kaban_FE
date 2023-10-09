import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { alarmIcon, arrowIcon, shareIcon } from '~/assets/icons';
import styles from './toolkit.module.css';
import Svg from '~/components/reusable/Svg';

export default function Toolkit({onClick}: {onClick: () => void}) {
  const [copy, setCopy] = useState(false);
  const handleShare = () => {
    console.log(location);
    if (navigator.share) {
      // Share data
      const shareData = {
        title: 'Property',
        text: 'listing Item',
        url: `${location.href}`,
      };

      // Open the share dialog
      navigator
        .share(shareData)
        .then(() => {
          // console.log('Share successful');
        })
        .catch(() => {
          // console.error('Share failed:', error);
        });
    } else {
      // Fallback for browsers that don't support the Web Share API
      // You can implement your custom sharing solution here
    }
  };

  const tooltip = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className={`flex s-btw f-width ${styles.tools}`}>
      <Link to={'/'} className={`flex align-y c-pad ${styles.rotate}`}>
        <Svg href={arrowIcon} />
      </Link>
      <div className={`flex align-y ${styles.toolkit}`}>
        <h3
          className={`c-pad stack box-shadow ${styles.tooltip}
            ${copy === true ? styles.active : styles.slide}`}
        >
          Link copied to clipboard
        </h3>
        <CopyToClipboard text={location.href} onCopy={tooltip}>
          <Svg href={shareIcon} onClick={handleShare} />
        </CopyToClipboard>
        <Svg href={alarmIcon} onClick={onClick} />
      </div>
    </div>
  );
}
