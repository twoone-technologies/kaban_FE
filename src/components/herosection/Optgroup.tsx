type Props = {
  onClick?: () => void,
  header?: string,
  subItems?: {
    type: string,
    value: string,
  }[] | string[] | string,
} & React.ComponentProps<'optgroup'>;

export default function OptGroup({ subItems, header, className, onClick }: Props) {
  return (
    <optgroup label={header} className={className}>
      {Array.isArray(subItems) ? (
        subItems.map((item) => (
          typeof item === 'string' ? (
            <option key={item} onClick={onClick} value={item}>{item}</option>
          ) : (
            <option key={item.type} onClick={onClick} value={item.value}>{item.type}</option>
          )
        ))
      ) : (
        <option value={header}>{header}</option>
      )}
    </optgroup>
  );
}
