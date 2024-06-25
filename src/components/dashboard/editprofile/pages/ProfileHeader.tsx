import styles from '../edit.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import InputWrap from '../../reusables/InputWrap';
import useImageUpload from '~/hooks/useFileUpload';
import { useAppSelector } from '~/api/hooks';
import { useGetRealtorQuery } from '~/api/features/realtor';

export default function ProfileHeader() {
  const { coverImage, setCoverImage, handleCoverImg } = useImageUpload();
  const authState = useAppSelector((state) => state.auth);
  const { data } = useGetRealtorQuery(authState.realtor.id || '');

  const handleRemove = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    if (coverImage.length > 0) {
      e.preventDefault();
      setCoverImage([]);
    }
  };

  return (
    <InputWrap
      className={`flex s-btw flex-col sm:flex-row ${styles.agentProfileInfo}`}
    >
      <CardAgentInfo
        className={styles.cardAgentInfo}
        src={coverImage[0]?.url || data?.realtor_pic}
        star={data?.rating}
        firstLetter={authState.fullName?.split(' ')[0]?.split('')[0]}
        lastLetter={authState.fullName?.split(' ')[1]?.split('')[0]}
        identity={
          <>
            <h3 className="text-xl">{authState.fullName}</h3>
            <span>{authState.email}</span>
          </>
        }
      />
      <div className={`relative flex align-y gap `}>
        <label
          htmlFor="agentImg"
          onClick={handleRemove}
          className={`b-radius ${styles.btn}`}
        >
          {coverImage.length === 0 ? 'Select Picture' : 'Remove Picture'}
        </label>
        <input
          hidden
          id="agentImg"
          accept=".jpg, .jpeg, .png"
          type="file"
          name="realtor_pic"
          onChange={handleCoverImg}
        />
      </div>
    </InputWrap>
  );
}
