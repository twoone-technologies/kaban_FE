import styles from '../edit.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import Button from '~/components/reusable/Button';
import InputWrap from '../../reusables/InputWrap';
import useImageUpload from '~/hooks/useImageUpload';

export default function ProfileHeader() {  
  const { coverImage, deleteImage, handleCoverImg } = useImageUpload();
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
      <div className="relative flex align-y gap">
        <label htmlFor="agentImg" className={`b-radius ${styles.btn}`}>
          Upload picture
        </label>
        <Button
          type="reset"
          onClick={() => deleteImage()}
          className={styles.btn}
        >
          Remove
        </Button>
        <input
          hidden
          id="agentImg"
          name="agentImg"
          accept=".jpg, .jpeg, .png"
          type="file"
          onChange={handleCoverImg}
        />
      </div>
    </InputWrap>
  );
}
