import { useState } from 'react';
import Modal from '../../reusable/modal/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';

type Props = {
  isVisible: boolean;
  onClose?: () => void;
  signInUrl?: () => void;
  signUpUrl?: () => void;
} & React.ComponentProps<'dialog'>;

export function SignUpModal({ isVisible, onClose, signInUrl }: Props) {
  return (
    <Modal isVisible={isVisible} onClose={() => onClose}>
      <SignUp signInUrl={signInUrl}  />
    </Modal>
  );
}

export function SignInModal({ isVisible, onClose, signUpUrl }: Props) {
  return (
    <Modal isVisible={isVisible} onClose={() => onClose}>
      <SignIn signUpUrl={signUpUrl}  />
    </Modal>
  );
}
