import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '~/api/hooks';
import useAuthUtils from './useAuthUtils';

export default function RequireAuth() {
  const { addAuthToUrl, authState: authSearchState } = useAuthUtils();
  const authState = useAppSelector((state) => state.auth);
  const isLoggedIn = authState.accessToken ? true : false;
  const isSignedUp = authState.email ? true : false;

  useEffect(() => {
    if (!authSearchState) {
      if (!isLoggedIn && !isSignedUp) { addAuthToUrl('sign_up'); }
      else if (!isLoggedIn && isSignedUp) { addAuthToUrl('sign_in'); }
    }
  }, [authSearchState])

  return <Outlet />;
}
