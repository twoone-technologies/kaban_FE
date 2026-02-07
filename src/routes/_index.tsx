import {
  Outlet,
  useActionData,
  useLocation,
} from 'react-router-dom';

import { useAppSelector } from '~/api/hooks';
import useAuthUtils from '~/utils/functions/useAuthUtils';
import Sidebar from '~/components/dashboard/sidebar';
import Footer from '~/components/footer/Footer';
import Navigation from '~/components/navigation';
import '~/styles/main.css';
import { useEffect } from 'react';
import { action } from './indexAction';

export default function Root() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  const { addAuthToUrl } = useAuthUtils();
  const actionRes = useActionData() as Awaited<ReturnType<typeof action>>;

  useEffect(() => {
    if (actionRes?.data === 201) {
      addAuthToUrl('sign_in');
    }
  }, [actionRes, addAuthToUrl]);

  // Remove auth query param if user is logged in.
  const authState = useAppSelector((state) => state.auth);
  const isLoggedIn = authState.accessToken ? true : false;
  const { removeAuthFromUrl, authState: authSearchState } = useAuthUtils();
  if (isLoggedIn && authSearchState) removeAuthFromUrl();

  return (
    <>
      {isDashboard && <Sidebar />}
      <Navigation res={actionRes} />
      <Outlet />
      {isDashboard || <Footer />}
    </>
  );
}

