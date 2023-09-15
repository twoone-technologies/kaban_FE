import OptGroup from '../herosection/Optgroup';
import { property_type } from '../herosection/formData';
import Svg from './Svg';
import Checkbox from '../searchForm/checkbox/Checkbox';
import styles from '~/components/searchForm/searchForm.module.css';

type Props = {
  title: string;
  type?: string;
  link?: string;
  width?: string;
  height?: string;
  radius?: string;
  header?: string;
  subItems?:
    | string
    | {
        type: string;
        value: string;
      }[];
  inputClass?: string;
  className?: string;
  onFocus?: () => void;
  onChange?: () => void;
  onChange1?: (e: never) => void;
} & React.ComponentProps<'select'> &
  React.ComponentProps<'input'>;

export default function FormInput({
  title,
  type,
  header,
  subItems,
  link,
  width,
  height,
  radius,
  inputClass,
  className,
  onFocus,
  onChange,
  onChange1,
  ...restProps
}: Props) {
  let select;
  title === 'propertyType'
    ? (select = (
        <select
          name={title}
          title={title}
          className={`flex b-radius f-width ${styles.input}`}
        >
          {Object.entries(property_type).map(([key, val], id) => (
            <OptGroup key={id} header={key} subItems={val.subItems} />
          ))}
        </select>
      ))
    : (select = (
        <select
          name={title}
          title={title}
          onChange={onChange1}
          className={`flex b-radius f-width ${styles.input}`}
        >
          <OptGroup header={header} subItems={subItems} />
        </select>
      ));

  const input = (
    <input
      placeholder={title}
      type={type}
      {...restProps}
      name={title}
      title={title}
      onChange={onChange1}
      className={`flex b-radius f-width 
      ${inputClass} ${styles.input}`}
    />
  );

  const output = (
    <>
      <Checkbox id={title} onChange={onChange} />
      <output className={styles.output} id="rangevalue">
        Radius {radius}km
      </output>
    </>
  );

  let svg;
  title === 'location'
    ? (svg = (
        <Svg
          href={link}
          width={width}
          height={height}
          className={`${styles.svgIcon}`}
        />
      ))
    : (svg = (
        <Svg
          href={link}
          width={width}
          height={height}
          className={`${styles.rotate} ${styles.svgIcon}`}
        />
      ));

  return (
    <div
      onFocus={onFocus}
      className={`flex b-radius f-width ${styles.form_input} ${className}`}
    >
      <label htmlFor={title} />
      {header|| subItems || title === 'propertyType' ? select : null}
      {type === 'range' ? output : null}
      {type ? input : null}
      {link ? svg : null}
    </div>
  );
}
