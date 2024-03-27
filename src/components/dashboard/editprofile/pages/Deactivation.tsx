import InputWrap from '../../reusables/InputWrap';
import { EditProfileInputs } from '..';
import styles from '../miscellenous/pages.module.css';
import { UseFormRegister } from 'react-hook-form';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import { useState } from 'react';
import Button from '~/components/reusable/Button';

type DeactivationProps = {
  register: UseFormRegister<EditProfileInputs>;
};

export default function Deactivation({ register }: DeactivationProps) {
  const [checkStat, setCheckStat] = useState(0);

  const handleCheck = (e: { target: { checked: boolean } }) => {
    e.target.checked
      ? setCheckStat((prev) => prev + 1)
      : setCheckStat((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col gap-2 items-end">
      <InputWrap className="w-full">
        <h3>Reason</h3>
        <Checkbox
          register={register}
          registerOptions={{
            onChange: handleCheck,
          }}
          name="reason"
          value={'I want to open a new account'}
          title1={'I want to open a new account'}
        />
        <Checkbox
          register={register}
          registerOptions={{
            onChange: handleCheck,
          }}
          name="reason"
          value={'I am retiring /changing career'}
          title1="I am retiring /changing career"
        />
        <Checkbox
          register={register}
          registerOptions={{
            onChange: handleCheck,
          }}
          name="reason"
          value={
            'I am not satisfied with the services offered on this platform'
          }
          title1="I am not satisfied with the services offered on this platform"
        />
        <Checkbox
          register={register}
          registerOptions={{
            onChange: handleCheck,
          }}
          name="reason"
          value={
            'I have a tarnished reputation on the platform due to negative reviews'
          }
          title1="I have a tarnished reputation on the platform due to negative reviews"
        />
        <Checkbox
          register={register}
          registerOptions={{
            onChange: handleCheck,
          }}
          name="reason"
          value={'I opened the wrong account type'}
          title1="I opened the wrong account type"
        />
        <Checkbox
          register={register}
          registerOptions={{
            onChange: handleCheck,
          }}
          name="reason"
          value={'Others'}
          title1="Others"
        />
      </InputWrap>
      <Button
        type="submit"
        disabled={checkStat === 0}
        className={`c-pad w-full max-w-40 transition-colors 
        ${checkStat ? styles.deactivateBtn : styles.notActiveBtn}`}
      >
        Deactivate account
      </Button>
    </div>
  );
}
