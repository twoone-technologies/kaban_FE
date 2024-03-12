import styles from './tabulation.module.css';

type Props = {
  idx: number;
  className?: string;
  style: React.CSSProperties;
  headerArr: { value: number; type: string }[];
  headerSwitch: (
    value: number,
    headerArr: { value: number; type: string }[],
  ) => void;
};

export default function Tabulation({
  headerArr,
  idx,
  style,
  className,
  headerSwitch,
}: Props) {

  return (
    <ul className={`flex w-full ${styles.formNav} ${className}`}>
      {headerArr.map((header) => (
        <li
          key={header.value}
          onClick={() => headerSwitch(header.value, headerArr)}
          className={`flex align-x ${styles.header} ${
            header.value === idx ? styles.active : ''
          }`}
        >
          {header.type}
        </li>
      ))}
      <li className={styles.underline} style={style} />
    </ul>
  );
}
