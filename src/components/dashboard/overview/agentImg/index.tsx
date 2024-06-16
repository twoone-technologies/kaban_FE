import styles from './agentImg.module.css';
import { editIcon, logoIcon } from '~/assets/icons';
import Rating from '~/components/propertyItem/micellenous/Rating';
import Svg from '~/components/reusable/Svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '~/api/hooks';
import { useGetRealtorQuery } from '~/api/features/realtor';

export default function AgentImg() {
  const userInfo = useAppSelector((state) => state.auth);
  const { data } = useGetRealtorQuery(userInfo.realtor.id || '');
  return (
    <div
      className={`flex f-column align-y pad-2 gap box_shadow ${styles.agentCard}`}
    >
        {data?.realtor_pic ? (
          <div className={styles.imgWrap}>
            <img className={styles.img} src={data?.realtor_pic} alt="hh" />
          </div>
        ) : (
          <Svg className='text-blue-500' href={logoIcon} width='7rem' height='3rem' />
        )}
      <h4>{userInfo.fullName}</h4>
      <span>{userInfo.email}</span>
      {data?.rating ? <Rating num={data?.rating} /> : null}
      <Link
        to={'/dashboard/profile_edit'}
        className="flex gap b-radius text-white bg-primary-1 align-x c-pad f-width"
      >
        <Svg href={editIcon} />
        Edit Profile
      </Link>
    </div>
  );
}
