import styles from '~/components/searchForm/searchForm.module.css';
import Checkbox from '../searchForm/checkbox/Checkbox';
import { useLocation } from 'react-router-dom';
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Inputs } from '../dashboard/postproperty';
import { arrowIcon } from '~/assets/icons';
import Svg from './Svg';

type FormControlElement = 'input' | 'select' | 'textarea';
type InputProps = React.ComponentPropsWithoutRef<'input'>;
type SelectProps = React.ComponentPropsWithoutRef<'select'>;
type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'>;
export type Register = UseFormRegister<FieldValues>;
export type InputErrors = FieldErrors<Inputs>;

type ControlProps = (
  | ({ as: 'input' } & InputProps)
  | ({ as: 'select' } & SelectProps)
  | ({ as: 'textarea' } & TextAreaProps)
) & {
  icon?: React.ReactNode;
  onContainerFocus?: React.FocusEventHandler<HTMLDivElement>;
  containerClass?: string;
  labelText?: string;
  radius?: string;
  error?: string;
  register?: Register;
  registerOptions?: RegisterOptions<FieldValues, Path<FieldValues>>;
};

function isSelect(
  as: FormControlElement,
  props: unknown,
): props is SelectProps {
  return as === 'select' && props === props;
}
function isInput(as: FormControlElement, props: unknown): props is InputProps {
  return as === 'input' && props === props;
}
export default function FormControl({
  as,
  icon,
  error,
  radius,
  labelText,
  containerClass,
  registerOptions,
  onContainerFocus,
  register = (() => ({})) as unknown as Register,
  ...props
}: ControlProps) {
  const location = useLocation();
  const svgIcon = <Svg className={styles.svg} href={arrowIcon} />;
  const formWrapStyle =
    location.pathname !== '/' && location.pathname !== '/search_results'
      ? `gap-0 f-column ${styles.inputWrap}`
      : styles.form_input;

  let content; let notice;
  if (isSelect(as, props)) {
    props.required ? notice = '*' : '';
    content = (
      <select
        {...props}
        className={`flex b-radius f-width ${props.className} ${styles.input}`}
        {...register(props.name as Path<Register>, {
          required: props.required && 'This field is required',
          ...registerOptions,
        })}
      >
        {props.children}
      </select>
    );
  } else if (isInput(as, props)) {
    props.required ? notice = '*' : '';
    content = radius ? (
      <>
        <Checkbox id={props.name} onChange={props.onChange} />
        <output className={styles.output} id="rangevalue">
          Radius {radius}km
        </output>
      </>
    ) : (
      <input
        {...props}
        {...register(props.name as Path<Register>, {
          required: props.required && 'This field is required',
          ...registerOptions,
        })}
        className={`flex b-radius f-width ${props.className} ${styles.input}`}
      />
    );
  } else {
    props.required ? notice = '*' : '';
    content = (
      <textarea
        maxLength={500}
        {...props}
        id={props.id ?? 'message'}
        className={`flex b-radius f-width h-24 ${props.className} ${styles.input}`}
        placeholder={props.placeholder ?? 'write your message here'}
        {...register(props.name as Path<Register>, {
          required: props.required && 'This field is required',
          ...registerOptions,
        })}
      />
    );
  }

  return (
    <div
      onFocus={onContainerFocus}
      className={`flex b-radius f-width relative ${formWrapStyle} ${containerClass}`}
    >
      {labelText ? (
        <div className="w-full flex space-between">
          <label htmlFor={props.name}>{labelText}{notice}</label>
          {error ? (
            <span className={`text-red-600 ${styles.errorText}`}>{error}</span>
          ) : null}
        </div>
      ) : null}
      {content}
      {as === 'select'? svgIcon : icon}
    </div>
  );
}
