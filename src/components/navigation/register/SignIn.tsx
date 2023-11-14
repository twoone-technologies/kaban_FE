import { Form } from 'react-router-dom';
import styles from '~/components/reusable/modal/modal.module.css';
import { googleSvgIcon, logoIcon } from '~/assets/icons';
import FormInput from '~/components/reusable/FormInput';
import Svg from '~/components/reusable/Svg';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import LineText from './LineText';
import { Link } from 'react-router-dom';
import Button from '~/components/reusable/Button';

export default function SignIn({ signUpUrl, isLogged }: { signUpUrl?: () => void, isLogged: () => void }) {
  return (
    <>
      <h2>Welcome</h2>
      <Svg
        href={logoIcon}
        width="100px"
        height="40px"
        className={styles.k_logo}
      />
      <Form method="post" className={`flex f-column gap ${styles.form}`}>
        <FormInput
          required
          className={`f-column ${styles.input}`}
          title="email"
          inputClass={styles.inputClass}
          title_1="Email"
          type="email"
          placeholder="smith@example.com"
        />
        <FormInput
          required
          className={`f-column ${styles.input}`}
          title="password"
          inputClass={styles.inputClass}
          title_1="Password"
          type="password"
          placeholder="8+ characters"
        />
        <div className="flex s-btw">
          <div className="flex">
            <Checkbox required title="keepMeLoggedIn" />
            <span>Keep me logged in</span>
          </div>
          <Link to={''} className="bg-primary">
            Forgot password?
          </Link>
        </div>
        <input
          onClick={() => isLogged()}
          name='intent'
          value={'Sign In'}
          type="submit" 
          className={'flex bg-primary-1 b-radius bg-grey c-tertiary align-x c-pad'}
        />
        <LineText text="Or continue with" />
        <Button
          type="button"
          className={`flex gap align-x align-y c-pad ${styles.google_btn}`}
        >
          <Svg height={'1.3rem'} href={googleSvgIcon} />
          Sign In with Google
        </Button>
        <p>
          {' '}
          Not a Realtor?{' '}
          <span
            className={`bg-primary ${styles.span}`}
            onClick={() => {
              signUpUrl && signUpUrl()
            }}
          >
            Sign Up
          </span>
        </p>
      </Form>
    </>
  );
}
