import styles from './tabulation.module.css';

type Props = {
  idx: number;
  headerWidth: number;
  activeTab: number;
  className?: string;
  isValid?: boolean;
  headerArr: { value: number; type: string }[];
  headerSwitch?: (
    value: number,
    headerArr: { value: number; type: string }[],
  ) => void;
};

// this component is used to display the tabulation of any listitem
// it takes in the following props:
// idx: number - the index of the current active tab (zero-based)
// headerWidth: number - the width of each tab
// activeTab: number - the index of the current active tab (zero-based)
// className: string - the class name of the tabulation
// headerArr: { value: number; type: string }[] - the list of tabulation items
// headerSwitch: (value: number, headerArr: { value: number; type: string }[]) => void - the function to switch between tabs
// when this component is called its called with the use tabulation hook
// a width variable is passed depending on the general acceptable with of all headers.

export default function Tabulation({
  headerArr,
  idx,
  isValid,
  activeTab,
  headerWidth,
  className,
  headerSwitch,
}: Props) {
  return (
    <ul className={`flex w-full ${styles.formNav} ${className}`}>
      {headerArr.map((header) => (
        <li
          key={header.value}
          className={`flex align-x ${styles.header}
          ${isValid === undefined || isValid === true ? 'cursor-pointer' : 'cursor-not-allowed'}
          ${
            header.value === idx
              ? header.value === 4 && header.type === 'Deactivate Account'
                ? styles.deactivate
                : styles.isActive
              : ''
          }`}
          style={{ minWidth: headerWidth }}
          onClick={() => {
            if (isValid === undefined || isValid === true) {
              headerSwitch && headerSwitch(header.value, headerArr);
            }
          }}
        >
          {header.type}
        </li>
      ))}
      <li
        className={`${styles.underline} ${
          location.pathname === '/dashboard/profile_edit' &&
          headerArr[4].type === 'Deactivate Account' &&
          idx === 4
            ? 'bg-red-700'
            : 'bg-primary-1'
        }`}
        style={{
          transform: `translateX(${activeTab}px)`,
          width: headerWidth,
        }}
      />
    </ul>
  );
}
