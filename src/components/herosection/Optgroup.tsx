type Props = {
  header: string,
  subItems: {
    type: string,
    value: string,
  }[],
} & React.ComponentProps<'optgroup'>

export default function OptGroup({ subItems, header, className }: Props) {
  return (
    <optgroup label={header} className={className}>
      {subItems.map((item) => (
        <option key={item.type} value={item.value}>{item.type}</option>
      ))}
    </optgroup>
  )
}
