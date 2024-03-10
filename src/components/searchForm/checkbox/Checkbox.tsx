import { ReactNode } from 'react';
import styles from './checkbox.module.css';

type Props = {
  title1?: string | ReactNode;
  onBlur?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
} & React.ComponentProps<'input'>;

export default function Checkbox({
  title1 = '',
  onChange,
  onBlur,
  checked,
  ...restProps
}: Props) {
  return (
    <label className={`flex align-y ${styles.wrap}`}>
      <input
        {...restProps}
        type="checkbox"
        onBlur={onBlur}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark}></span>
      <span>{title1}</span>
    </label>
  );
}
