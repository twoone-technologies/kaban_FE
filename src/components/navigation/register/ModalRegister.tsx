import Modal from '../../reusable/modal/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { useLocation } from 'react-router-dom';

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  signInUrl?: () => void;
  signUpUrl?: () => void;
} & React.ComponentProps<'dialog'>;

export default function ModalRegister({
  isVisible,
  signUpUrl,
  signInUrl,
  closeModal,
}: Props) {
  const location = useLocation();
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      {location.search.includes('sign_in') && (
        <SignIn signUpUrl={signUpUrl} isLogged={() => ''} />
      )}
      {location.search.includes('sign_up') && <SignUp signInUrl={signInUrl} />}
    </Modal>
  );
}
