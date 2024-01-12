import styles from './agentImg.module.css'
import { editIcon } from '~/assets/icons';
import ikon from '~/assets/img/Ikon.png';
import Rating from '~/components/propertyItem/micellenous/Rating';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';

export default function AgentImg() {
  return (
    <div
      className={`flex f-column align-y pad-2 gap box_shadow ${styles.agentCard}`}
    >
      <div className={styles.imgWrap}>
        <img className={styles.img} src={ikon} alt="hh" />
      </div>
      <h4>Precious Ekong</h4>
      <span>email@email.com</span>
      <Rating num={4} />
      <Button className="flex gap align-x c-pad f-width">
        <Svg href={editIcon} />
        Edit Profile
      </Button>
    </div>
  );
}
