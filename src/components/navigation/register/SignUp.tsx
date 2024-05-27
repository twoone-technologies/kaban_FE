import { Form } from 'react-router-dom';
import styles from '~/components/reusable/modal/modal.module.css';
import { googleSvgIcon, logoIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import LineText from './LineText';
import { Link } from 'react-router-dom';
import Button from '~/components/reusable/Button';
import FormControl from '~/components/reusable/FormControl';

export default function SignUp({
  signInUrl,
  className,
  error,
}: {
  signInUrl?: () => void;
  className?: string;
  error?: string;
}) {
  return (
    <div className={className}>
      <h2>Get Started</h2>
      <span className='text-red-500'>{error}</span>
      <Svg
        href={logoIcon}
        width="100px"
        height="40px"
        className={styles.k_logo}
      />
      <LineText className={styles.getStarted} text="sign up as a realtor" />
      <Form method="post" className={`flex f-column gap ${styles.form}`}>
        <FormControl
          as="input"
          title="fullName"
          name="fullName"
          labelText="Full Name"
          type="text"
          placeholder="fullname"
        />
        <FormControl
          as="input"
          name="email"
          title="email"
          labelText="Email"
          type="email"
          placeholder="smith@example.com"
        />
        <FormControl
          as="input"
          name="password"
          type="password"
          title="create_password"
          labelText="Create Password"
          placeholder="8+ characters"
        />
        <div className="flex">
          <Checkbox name="termsPolicy" title="termsPolicy" />
          <span className={styles.termsPolicy}>
            By creating an account you agree to Kaban{' '}
            <Link className="bg-primary" to={''}>
              Terms of use
            </Link>{' '}
            and{' '}
            <Link className="bg-primary" to={''}>
              Privacy policy.
            </Link>
          </span>
        </div>
        <input
          name="intent"
          value="sign up"
          type="submit"
          className={
            'flex bg-primary-1 b-radius bg-grey c-tertiary align-x c-pad'
          }
        />
        <LineText text="Or continue with" />
        <Button
          type="button"
          className={`flex gap align-x align-y c-pad ${styles.google_btn}`}
        >
          <Svg height={'1.3rem'} href={googleSvgIcon} />
          Sign up with Google
        </Button>
        <p>
          Already a Realtor?{' '}
          <span
            className={`bg-primary ${styles.span}`}
            onClick={() => {
              signInUrl && signInUrl();
            }}
          >
            Sign In
          </span>
        </p>
      </Form>
    </div>
  );
}
