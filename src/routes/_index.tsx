import {
  ActionFunctionArgs,
  Outlet,
  useActionData,
  useLocation,
} from 'react-router-dom';

import { signin, signup } from '~/api/features/auth';
import { useAppSelector } from '~/api/hooks';
import useAuthUtils from '~/utils/functions/useAuthUtils';
import Sidebar from '~/components/dashboard/sidebar';
import Footer from '~/components/footer/Footer';
import Navigation from '~/components/navigation';
import '~/styles/main.css';
import { useEffect } from 'react';
import { AuthIntent } from '~/utils/types/auth.types';

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  const intent = formData.get('intent');
  switch (intent) {
    case AuthIntent.SIGN_UP :
      try {
        await signup({
          email: formData.get('email') as string,
          full_name: formData.get('fullName') as string,
          password: formData.get('password') as string,
          role: 1,
        }).unwrap();
        return { data: 201 };
      } catch (error) {
        console.log(error);
        return { error: 'signup is unsuccessful' };
      }
    case AuthIntent.SIGN_IN :
      try {
        await signin({
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        }).unwrap();
        return { data: 200 };
      } catch (error) {
        console.log(error);
        return { error: 'signin is unsuccessful' };
      }
    default:
      return { error: 'Unknown action' };
  }
}

export default function Root() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  const { addAuthToUrl } = useAuthUtils();
  const actionRes = useActionData() as Awaited<ReturnType<typeof action>>;

  useEffect(() => {
    if (actionRes?.data === 201) {
      addAuthToUrl('sign_in');
    }
  }, [actionRes]);

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

