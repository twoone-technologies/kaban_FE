import { cameraIcon, heartIcon } from '~/assets/icons';
import styles from './card.module.css';
import Svg from '../Svg';

type Props = {
  enter: boolean;
  src?: string;
  title: string;
  date: string;
  imgNo: number;
};

export default function CardImg({ enter, src, title, date, imgNo }: Props) {
  return (
    <>
      <div
        className={`f-width ${styles.overlay}
        ${enter ? styles.nil : ''}`}
      ></div>
      <img
        alt={title}
        src={src}
        className={`${styles.img} ${enter ? styles.scale : ''}`}
      />
      <div className={`flex s-btw f-width`}>
        <small className={`b-radius stack c-pad ${styles.date}`}>{date}</small>
        <Svg className={`stack`} href={heartIcon} />
      </div>
      <div className="flex stack align-y">
        <Svg href={cameraIcon} />
        <span>{imgNo}</span>
      </div>
    </>
  );
}
