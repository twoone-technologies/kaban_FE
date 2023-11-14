import Modal from '../../reusable/modal/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';

type Props = {
  isVisible: boolean;
  signInUrl?: () => void;
  signUpUrl?: () => void;
} & React.ComponentProps<'dialog'>;

export function SignUpModal({ isVisible, signInUrl }: Props) {
  return (
    <Modal isVisible={isVisible}>
      <SignUp signInUrl={signInUrl} />
    </Modal>
  );
}

export function SignInModal({ isVisible, signUpUrl }: Props) {
  const navigate = useNavigate();
  return (
    <Modal isVisible={isVisible}>
      <SignIn
        signUpUrl={signUpUrl}
        isLogged={() => {''
          // setTimeout(() => {
          //   navigate({ search: `` });
          // }, 1000);
        }}
      />
    </Modal>
  );
}
