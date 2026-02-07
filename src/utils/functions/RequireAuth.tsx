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
    if (!isLoggedIn) {
      if (isSignedUp && authSearchState != 'sign_in') { addAuthToUrl('sign_in'); }
      else if (authSearchState != 'sign_up') { addAuthToUrl('sign_up'); }
    }
  }, [authSearchState, addAuthToUrl, isLoggedIn, isSignedUp]);

  return <Outlet />;
}
