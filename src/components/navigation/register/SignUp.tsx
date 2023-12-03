import { Form, useNavigate } from 'react-router-dom';
import styles from '~/components/reusable/modal/modal.module.css';
import { googleSvgIcon, logoIcon } from '~/assets/icons';
import FormInput from '~/components/reusable/FormInput';
import Svg from '~/components/reusable/Svg';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import LineText from './LineText';
import { Link } from 'react-router-dom';
import Button from '~/components/reusable/Button';

export default function SignUp({ signInUrl }: { signInUrl?: () => void }) {
  const navigate = useNavigate()
  return (
    <>
      <h2>Get Started</h2>
      <Svg
        href={logoIcon}
        width="100px"
        height="40px"
        className={styles.k_logo}
      />
      <LineText className={styles.getStarted} text="sign up as a realtor" />
      <Form method="post" className={`flex f-column gap ${styles.form}`}>
        <FormInput
          className={`f-column ${styles.input}`}
          title="fullName"
          inputClass={styles.inputClass}
          title_1="Full Name"
          type="text"
          placeholder="fullname"
        />
        <FormInput
          className={`f-column ${styles.input}`}
          title="email"
          inputClass={styles.inputClass}
          title_1="Email"
          type="email"
          placeholder="smith@example.com"
        />
        <FormInput
          className={`f-column ${styles.input}`}
          title="create_password"
          inputClass={styles.inputClass}
          title_1="Create Password"
          type="password"
          placeholder="8+ characters"
        />
        <div className="flex">
          <Checkbox name='termsPolicy' title="termsPolicy" />
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
          name='intent'
          value='Sign Up'
          type="submit" 
          onClick={() => {
            setTimeout(() => {
              navigate({ search: `?auth=sign_in`})
            }, 500);
          }}
          className={'flex bg-primary-1 b-radius bg-grey c-tertiary align-x c-pad'}
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
    </>
  );
}
