import styles from '~/components/searchForm/searchForm.module.css';
import Checkbox from '../searchForm/checkbox/Checkbox';
import { useLocation } from 'react-router-dom';

type FormControlElement = 'input' | 'select' | 'textarea';
type InputProps = React.ComponentPropsWithoutRef<'input'>;
type SelectProps = React.ComponentPropsWithoutRef<'select'>;
type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'>;

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
  onContainerFocus,
  containerClass,
  labelText,
  radius,
  error,
  ...props
}: ControlProps) {
  const location = useLocation();
  const formWrapStyle =
    location.pathname !== '/' && location.pathname !== '/search_results'
      ? `gap-0 f-column ${styles.inputWrap}`
      : styles.form_input;

  let content;
  if (isSelect(as, props)) {
    content = (
      <select
        {...props}
        className={`flex b-radius f-width ${props.className} ${styles.input}`}
      >
        {props.children}
      </select>
    );
  } else if (isInput(as, props)) {
    content = radius ? (
      <>
        <Checkbox id={props.id} onChange={props.onChange} />
        <output className={styles.output} id="rangevalue">
          Radius {radius}km
        </output>
      </>
    ) : (
      <input
        {...props}
        className={`flex b-radius f-width ${props.className} ${styles.input}`}
      />
    );
  } else {
    content = (
      <textarea
        maxLength={500}
        {...props}
        id={props.id ?? 'message'}
        name={props.name ?? 'message'}
        className={`flex b-radius f-width h-24 ${props.className} ${styles.input}`}
        placeholder={props.placeholder ?? 'write your message here'}
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
          <label htmlFor={props.name}>{labelText}</label>
        </div>
      ) : null}
      {error ? (
        <span className={`text-red-600 ${styles.errorText}`}>{error}</span>
      ) : null}
      {content}
      {icon}
    </div>
  );
}
