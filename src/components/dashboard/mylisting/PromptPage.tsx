import { buildingsIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';
import styles from './listings.module.css';

export default function PromptPage() {
  return (
    <div className={`flex f-column align-x align-y ${styles.promptPage}`}>
      <div className={`flex f-column gap b-radius box_shadow align-x align-y ${styles.prompt}`}>
        <div className={styles.svgWrap}>
          <Svg href={buildingsIcon}
            className={styles.svg}
          />
        </div>
        <h3>Create a Listing</h3>
        <span>click the button below to create a listing</span>
        <Button className='c-pad'>Post a property</Button>
      </div>
    </div>
  );
}
