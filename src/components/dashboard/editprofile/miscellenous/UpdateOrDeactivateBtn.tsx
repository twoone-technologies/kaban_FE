import Button from '~/components/reusable/Button';
import styles from '~/components/dashboard/editprofile/miscellenous/pages.module.css';

type Props = { idx: number; isValid: boolean; minNum: boolean };

export default function UpdateOrDeactivateBtn({ idx, isValid, minNum }: Props) {
  const validState =
    isValid && idx !== 3
      ? isValid
        ? ''
        : `cursor-not-allowed ${styles.disabled}`
      : isValid && minNum
      ? ''
      : `cursor-not-allowed ${styles.disabled}`;

  return (
    <div
      className={`flex w-full mb-8 s-btw gap-2 flex-col-reverse sm:flex-row ${styles.btnGrp}`}
    >
      <Button
        type="submit"
        disabled={idx !== 3 && idx !== 4 ? !isValid : isValid === true && minNum === false}
        className={`c-pad w-full max-w-40 ${validState}`}
      >
        {idx === 4 ? 'Deactivate account' : 'Update Profile'}
      </Button>
      {idx === 3 && (
        <span className="md:max-w-96 text-left">
          Your profile verification remains valid for one year. Upon expiration,
          re-verification will be required to maintain validity.
        </span>
      )}
    </div>
  );
}
