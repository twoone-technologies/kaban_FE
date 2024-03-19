import { Wrapper } from '~/components/reusable/Container';
import styles from './edit.module.css';
import useTabulation from '~/hooks/useTabulation';
import { profileHeaders } from './edit';
import Tabulation from '~/components/reusable/tabulation/Tabulation';
import { Form } from 'react-router-dom';
import SocialMedia from './pages/SocialMedia';
import Password from './pages/Password';
import Verification from './pages/Verification';
import Deactivation from './pages/Deactivation';
import Profile from './pages/Profile';
import ProfileHeader from './pages/ProfileHeader';

export default function Edit() {
  const { activeIndex, prevId, handleHeaderClick } = useTabulation(150);

  const underlineStyle = {
    transform: `translateX(${prevId}px)`,
  };

  return (
    <Wrapper element="section" className={styles.wrapper}>
      <Tabulation
        className={styles.tabulation}
        headerArr={profileHeaders}
        idx={activeIndex}
        style={underlineStyle}
        headerSwitch={handleHeaderClick}
      />
      <Form className="flex f-column gap-2">
        <ProfileHeader />
        <>
          <Profile className={activeIndex === 0 ? 'visible' : 'hidden'} />
          <SocialMedia className={activeIndex === 1 ? 'visible' : 'hidden'} />
          <Password className={activeIndex === 2 ? 'visible' : 'hidden'} />
          <Verification className={activeIndex === 3 ? 'visible' : 'hidden'} />
          <Deactivation className={activeIndex === 4 ? 'visible' : 'hidden'} />
        </>
      </Form>
    </Wrapper>
  );
}
