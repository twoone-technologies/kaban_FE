import Button from '~/components/reusable/Button';
import styles from './hero.module.css';
import { Form } from 'react-router-dom';
import HeroFormItem from '~/components/heroSection/HeroFormItem';
import Tabulation from '../reusable/tabulation/Tabulation';
import useTabulation from '~/hooks/useTabulation';

export default function HeroForm() {
  const statWidth = 80
  const { activeIndex, prevId, handleHeaderClick } = useTabulation(statWidth);
  const statValue = [
    { value: 0, type: 'Sale' },
    { value: 1, type: 'Rent' },
  ].find((item) => item.value === activeIndex)?.type.toLowerCase();

  return (
    <Form method="post" className={`b-radius f-width ${styles.form}`}>
      <input type="hidden" name="status" value={statValue} />
      <Tabulation
        activeTab={prevId}
        idx={activeIndex}
        headerWidth={statWidth}
        className={styles.btn_wrap}
        headerSwitch={handleHeaderClick}
        headerArr={[
          { value: 0, type: 'For Sale' },
          { value: 1, type: 'For Rent' },
        ]}
      />
      <HeroFormItem />
      <Button type="submit" className={styles.btn}>
        Search
      </Button>
    </Form>
  );
}
