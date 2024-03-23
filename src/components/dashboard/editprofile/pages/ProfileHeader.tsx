import styles from '../edit.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import Button from '~/components/reusable/Button';
import InputWrap from '../../reusables/InputWrap';
import useImageUpload from '~/hooks/useFileUpload';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { EditProfileInputs } from '..';

type ProfileHeaderProps = {
  id: number;
  register: UseFormRegister<EditProfileInputs>;
  setValue: UseFormSetValue<EditProfileInputs>;
};

export default function ProfileHeader({
  id,
  register,
  setValue,
}: ProfileHeaderProps) {
  const { coverImage, setCoverImage, handleCoverImg } = useImageUpload();
  setValue('agent_image', JSON.stringify(coverImage));

  return (
    <InputWrap
      className={`flex s-btw flex-col sm:flex-row ${styles.agentProfileInfo}`}
    >
      <CardAgentInfo
        className={styles.cardAgentInfo}
        src={coverImage[0]?.url}
        star={3}
        identity={
          <div>
            <h3 className="text-xl">Victor Pop</h3>
            <span>pop@gmail.com</span>
          </div>
        }
      />
      {id === 0 && <div className={`relative flex align-y gap ${id !== 0 ? 'hidden' : ''}`}>
        <label htmlFor="agentImg" className={`b-radius ${styles.btn}`}>
          Upload picture
        </label>
        <Button
          type="button"
          onClick={() => setCoverImage([])}
          className={styles.btn}
        >
          Remove
        </Button>
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
      </div>}
    </InputWrap>
  );
}
