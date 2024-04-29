import { Outlet } from 'react-router-dom';
import { useAppSelector } from '~/api/hooks';
import useAuthUtils from './useAuthUtils';

export default function Onboard() {
  const { removeAuthFromUrl } = useAuthUtils();
  const authState = useAppSelector((state) => state.auth);
  const isLoggedIn = authState.accessToken ? true : false;
  if (isLoggedIn) removeAuthFromUrl();
  return <Outlet />;
}
