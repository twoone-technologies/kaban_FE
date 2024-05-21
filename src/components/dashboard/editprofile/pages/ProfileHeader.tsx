import styles from '../edit.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import InputWrap from '../../reusables/InputWrap';
import useImageUpload from '~/hooks/useFileUpload';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { EditProfileInputs } from '..';
import { useAppSelector } from '~/api/hooks';

type ProfileHeaderProps = {
  register: UseFormRegister<EditProfileInputs>;
  setValue: UseFormSetValue<EditProfileInputs>;
};

export default function ProfileHeader({
  register,
  setValue,
}: ProfileHeaderProps) {
  const { coverImage, setCoverImage, handleCoverImg } = useImageUpload();
  setValue('agent_image', JSON.stringify(coverImage));
  const authState = useAppSelector((state) => state.auth);

  const handleRemove = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    if (coverImage.length > 0) {
      e.preventDefault();
      setCoverImage([])
    }
  };

  return (
    <InputWrap
      className={`flex s-btw flex-col sm:flex-row ${styles.agentProfileInfo}`}
    >
      <CardAgentInfo
        className={styles.cardAgentInfo}
        src={coverImage[0]?.url}
        star={3}
        firstLetter={authState.fullName?.split(' ')[0]?.split('')[0]}
        lastLetter={authState.fullName?.split(' ')[1]?.split('')[0]}
        identity={
          <div>
            <h3 className="text-xl">{authState.fullName}</h3>
            <span>{authState.email}</span>
          </div>
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
          onChange={handleCoverImg}
        />
        <input
          type="text"
          required
          {...register('agent_image')}
          hidden
          name="agent_name"
        />
      </div>
    </InputWrap>
  );
}
