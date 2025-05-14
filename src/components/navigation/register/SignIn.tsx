import { Form, useNavigate, useNavigation } from 'react-router-dom';
import styles from '~/components/reusable/modal/modal.module.css';
import { googleSvgIcon, logoIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import LineText from './LineText';
import { Link } from 'react-router-dom';
import Button, { ThreeDots } from '~/components/reusable/Button';
import FormControl from '~/components/reusable/FormControl';
import { AuthIntent } from '~/utils/types/auth.types';

export default function SignIn({
  signUpUrl,
  className,
  error,
}: {
  error?: string;
  className?: string;
  signUpUrl: () => void;
}) {
  const navigate = useNavigate();
  const { state } = useNavigation();

  return (
    <div className={className}>
      <h2>Welcome</h2>
      <span className='text-red-500'>{error}</span>
      <Svg
        href={logoIcon}
        width="100px"
        height="40px"
        className={styles.k_logo}
      />
      <Form method="post" className={`flex f-column gap ${styles.form}`}>
        <FormControl
          as="input"
          required
          title="email"
          name="email"
          labelText="Email"
          type="email"
          placeholder="smith@example.com"
        />
        <FormControl
          as="input"
          required
          type="password"
          title="password"
          name="password"
          labelText="Password"
          placeholder="8+ characters"
        />
        <div className="flex s-btw">
          <div className="flex">
            <Checkbox title="keepMeLoggedIn" name="keepMeLoggedIn" />
            <span>Keep me logged in</span>
          </div>
          <Link to={''} className="bg-primary">
            Forgot Password?
          </Link>
        </div>
        {state === 'submitting' ? (
          <ThreeDots />
        ) : (
          <input
            name="intent"
            value={AuthIntent.SIGN_IN}
            type="submit"
            className={
              'flex bg-primary-1 b-radius bg-grey c-tertiary align-x c-pad'
            }
          />
        )}
        <LineText text="Or continue with" />
        <Button
          type="button"
          onClick={() => navigate(-1)}
          className={`flex gap align-x align-y c-pad ${styles.google_btn}`}
        >
          <Svg height={'1.3rem'} href={googleSvgIcon} />
          Google
        </Button>
        <p>
          Not yet registered?{' '}
          <span
            className={`bg-primary ${styles.span}`}
            onClick={() => {
              signUpUrl && signUpUrl();
            }}
          >
            Sign Up
          </span>
        </p>
      </Form>
    </div>
  );
}
