import { useNavigate } from 'react-router-dom';
import styles from './agentImg.module.css'
import { editIcon } from '~/assets/icons';
import ikon from '~/assets/img/Ikon.png';
import Rating from '~/components/propertyItem/micellenous/Rating';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';

export default function AgentImg() {
  const navigate = useNavigate()
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
      <Link to={'/dashboard/profile_edit'} className="flex gap b-radius text-white bg-primary-1 align-x c-pad f-width">
        <Svg href={editIcon} />
        Edit Profile
      </Link>
    </div>
  );
}
