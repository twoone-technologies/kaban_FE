import Modal from '../../reusable/modal/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';

type Props = {
  authState: string | null;
  closeModal: () => void;
  signInUrl: () => void;
  signUpUrl: () => void;
} & React.ComponentProps<'dialog'>;

export default function ModalRegister({
  authState,
  signUpUrl,
  signInUrl,
  closeModal,
}: Props) {
  return (
    <Modal isVisible={!!authState} closeModal={closeModal}>
      {authState === 'sign_in' ? (
        <SignIn signUpUrl={signUpUrl} />
      ) : (
        <SignUp signInUrl={signInUrl} />
      )}
    </Modal>
  );
}
