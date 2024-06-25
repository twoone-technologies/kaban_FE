import Button from '~/components/reusable/Button';
import styles from '~/components/dashboard/editprofile/miscellenous/pages.module.css';

type Props = { idx: number; isValid: boolean; minNum: boolean, isLoading: boolean, state: string
};

export default function UpdateOrDeactivateBtn({ idx, isValid, minNum, isLoading, state }: Props) {
  const validState =
    isValid && idx !== 2
      ? isValid
        ? 'good'
        : `cursor-not-allowed ${styles.disabled}`
      : isValid && minNum
      ? 'badd'
      : `cursor-not-allowed ${styles.disabled}`;

  const buttonState = () => {
    switch (state) {
      case 'idle':
        if (idx === 4) return 'Deactivate account';
        if (idx === 3) return 'Update password';
        if (idx === 2) return 'Update Documents';
        if (idx === 1) return 'Update Social Links';
        return 'Update Profile';
      case 'submitting':
        return 'Updating...';
      default:
        return '...';
    }
  }

  return (
    <div
      className={`flex w-full mb-8 s-btw gap-2 flex-col-reverse sm:flex-row ${styles.btnGrp}`}
    >
      <Button
        type="submit"
        disabled={
          (idx !== 2 && idx !== 4
            ? !isValid
            : isValid === true && minNum === false) || isLoading
        }
        className={`px-7 py-2 w-full max-w-max h-10 ${validState}`}
      >
        {buttonState()}
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
