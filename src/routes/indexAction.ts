import { ActionFunctionArgs } from 'react-router-dom';
import { signin, signup } from '~/api/features/auth';
import { AuthIntent } from '~/utils/types/auth.types';

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  const intent = formData.get('intent');
  switch (intent) {
    case AuthIntent.SIGN_UP:
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
    case AuthIntent.SIGN_IN:
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
