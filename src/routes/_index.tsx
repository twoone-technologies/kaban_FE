import {
  ActionFunctionArgs,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { signin, signup } from '~/api/features/auth';
import Sidebar from '~/components/dashboard/sidebar';
import Footer from '~/components/footer/Footer';
import Navigation from '~/components/navigation';
import '~/styles/main.css';

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);

  const intent = formData.get('intent');
  switch (intent) {
    case 'signup':
      console.log('signup');
      // send data to BE
      try {
        await signup({
          email: formData.get('email') as string,
          full_name: formData.get('fullName') as string,
          password: formData.get('password') as string,
          phone_num: '123456799',
          role: 3,
        });
        return { data: 'success' };
      } catch (error) {
        return { error: 'signup is unsuccessful' };
      }
    case 'signin':
      try {
        await signin({
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        });
        return { data: 'success' };
      } catch (error) {
        return { error: 'signup is unsuccessful' };
      }
    default:
      return 'unknown';
  }
}

export default function Root() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes('dashboard') && <Sidebar />}
      <Navigation />
      <Outlet />
      {location.pathname.includes('dashboard') || <Footer />}
    </>
  );
}
