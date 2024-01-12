import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { alarmIcon, arrowIcon, shareIcon } from '~/assets/icons';
import styles from './toolkit.module.css';
import Svg from '~/components/reusable/Svg';
import useInteractiveNav from '~/hooks/useInteractiveNav';
import Button from '~/components/reusable/Button';

type ToolkitProps = {
  onClick: () => void,
  onCopy: () => void,
}

export default function Toolkit({onClick, onCopy}: ToolkitProps) {
  const {goingUp, scroll} = useInteractiveNav();
  const navigate = useNavigate();

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

  return (
    <div className={`flex s-btw f-width ${styles.tools}
    ${goingUp ? styles.navstate : styles.translateY}
    ${scroll < 4 ? styles.translate0 : ''}
    `}>
      <Button onClick={() => navigate(-1)} className={`flex align-y c-pad ${styles.rotate}`}>
        <Svg href={arrowIcon} />
      </Button>
      <div className={`flex align-y ${styles.toolkit}`}>
        <CopyToClipboard text={location.href} onCopy={onCopy}>
          <Svg href={shareIcon} onClick={handleShare} />
        </CopyToClipboard>
        <Svg href={alarmIcon} onClick={onClick} />
      </div>
    </div>
  );
}
