import { ReactNode } from 'react';
import styles from './radio.module.css';
import { Register } from '~/components/reusable/FormControl';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form';

type Props = {
  title1?: string | ReactNode;
} & React.ComponentProps<'input'> &
{
  register?: Register;
  registerOptions?: RegisterOptions<FieldValues, Path<FieldValues>>;
};

export default function RadioButton({
  title1 = '',
  register = (() => ({})) as unknown as Register,
  registerOptions,
  ...props
}: Props) {

  return (
    <label className={`flex align-y ${styles.wrap}`}>
      <input
        {...props}
        type="radio"
        {...register(props.name as Path<Register>, {
          required: props.required && 'This field is required',
          ...registerOptions,
        })}
      />
      <span className={styles.checkmark}></span>
      <span>{title1}</span>
    </label>
  );
}
