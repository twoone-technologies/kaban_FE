import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from '~/components/reusable/Container';
import { helpData } from '../supportData';
import styles from '../micelleous/styles.module.css';
import { useState } from 'react';
import BackBtn from '~/components/reusable/BackBtn';

export default function SupportCard() {
  const { title } = useParams();
  const filteredCard = helpData.find(
    (item) => item.title === title?.replace(/_/g, ' '),
  );
  const navigate = useNavigate();
  const [guidelines, setGuidelines] = useState(filteredCard?.data[0]) ?? [];
  const [tipsPage, setTipsPage] = useState(false);

  return (
    <Wrapper element="section" className={`flex ${styles.supportCardWrap}`}>
      <div className={styles.supportShowCard}>
        <BackBtn text={'Support'} onClick={() => navigate(-1)} />
        <h4 className="font-bold">{filteredCard?.title}</h4>
        <ul>
          {filteredCard?.data.map((tips, id) => (
            <li key={id}
              onClick={() => {
                setGuidelines(tips);
                setTipsPage(true);
              }}
              className={`cursor-pointer ${
                guidelines === tips ? 'bg-primary' : undefined
              } `}
            >
              {tips}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.contents}
        ${!tipsPage ? styles.showTips : undefined}
      `}>
        <BackBtn text={filteredCard?.title} onClick={() => setTipsPage(false)} />
        <h5 className="font-bold">{guidelines}</h5>
      </div>
    </Wrapper>
  );
}
