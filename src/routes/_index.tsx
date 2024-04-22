import { ActionFunctionArgs, Outlet, useLocation } from 'react-router-dom';
import { signin, signup } from '~/api/features/auth';
import Sidebar from '~/components/dashboard/sidebar';
import Footer from '~/components/footer/Footer';
import Navigation from '~/components/navigation';
import '~/styles/main.css';

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);

  const alert: {success: boolean, error?: unknown} = {success: false}
  const intent = formData.get('intent');
  switch (intent) {
    case 'Sign Up':
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
      } catch (error) {
        return alert.error = error
        // return error alert for toast notification
      }
      break;
    case 'signin':
      try {
          await signin({
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        });
        return alert.success = true
      } catch (error) {
        return alert.success = false, alert.error = error
      }
    default:
      console.log('unknown');
      break;
  }
  console.log(alert);
  return alert;
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
