import { arrowIcon } from '~/assets/icons';
import Svg from './Svg';
import styles from './utils.module.css';

type BackBtnProps = { text: string | undefined; onClick?: () => void };

export default function BackBtn({ text, onClick }: BackBtnProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex align-y gap my-1 ${styles.backBtn}`}
    >
      <div className={`flex align-x align-y ${styles.svgWrap}`}>
        <Svg href={arrowIcon} />
      </div>
      <span className="font-bold text-sm bg-primary">{text}</span>
    </div>
  );
}
