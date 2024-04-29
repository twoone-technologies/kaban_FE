import { Outlet } from 'react-router-dom';
import { useAppSelector } from '~/api/hooks';
import useAuthUtils from './useAuthUtils';

export default function RequireAuth() {
  const { addAuthToUrl } = useAuthUtils();
  const authState = useAppSelector((state) => state.auth);
  const isLoggedIn = authState.accessToken ? true : false;
  const isSignedUp = authState.email ? true : false;
  if (!isLoggedIn && !isSignedUp) addAuthToUrl('sign_up');
  else if(!isLoggedIn && isSignedUp) addAuthToUrl('sign_in')
  return <Outlet />;
}
