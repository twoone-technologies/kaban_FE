import { ActionFunctionArgs, Outlet, useLocation } from "react-router-dom";
import { signin } from "~/api/features/auth";
import Sidebar from "~/components/dashboard/sidebar";
import Footer from "~/components/footer/Footer";
import Navigation from "~/components/navigation";
import "~/styles/main.css";

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);

  const intent = formData.get('intent')
  switch (intent) {
    case 'Sign Up':
      console.log('signup');
      // send data to BE
      break;
    case 'signin':
      try {
        await signin({
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        });
      } catch (error) {
        console.log(error);
        // return error message for toast notification
      }
      break;
    default:
      console.log('unknown');
      break;
  }
  return null
}

export default function Root() {
  const location = useLocation()

  return (
    <>
      {location.pathname.includes('dashboard') && <Sidebar />}
      <Navigation />
      <Outlet />
      {location.pathname.includes('dashboard') || <Footer />}
    </>
  )
}
