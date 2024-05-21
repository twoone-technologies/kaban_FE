import Modal from '../../reusable/modal/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';

type Props = {
  error?: string;
  authState: string | null;
  closeModal: () => void;
  signInUrl: () => void;
  signUpUrl: () => void;
} & React.ComponentProps<'dialog'>;

export default function ModalRegister({
  authState, signUpUrl, signInUrl, closeModal, error
}: Props) {
  return (
    <Modal isVisible={!!authState} closeModal={closeModal}>
      {authState === 'sign_in' ? (
        <SignIn error={error} signUpUrl={signUpUrl} />
      ) : (
        <SignUp error={error} signInUrl={signInUrl} />
      )}
    </Modal>
  );
}
