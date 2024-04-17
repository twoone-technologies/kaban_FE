import Modal from '../../reusable/modal/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  signInUrl?: () => void;
  signUpUrl?: () => void;
} & React.ComponentProps<'dialog'>;

export function SignUpModal({ isVisible, signInUrl, closeModal }: Props) {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <SignUp signInUrl={signInUrl} />
    </Modal>
  );
}

export function SignInModal({ isVisible, signUpUrl, closeModal }: Props) {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <SignIn
        signUpUrl={signUpUrl}
        isLogged={() => ''}
      />
    </Modal>
  );
}
