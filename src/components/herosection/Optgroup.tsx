type Props = {
  onClick?: () => void,
  header?: string,
  subItems?: {
    type: string,
    value: string,
  }[] | string,
} & React.ComponentProps<'optgroup'>

export default function OptGroup({ subItems, header, className, onClick }: Props) {
  return (
    <optgroup label={header} className={className}>
      {typeof subItems === 'object'? subItems.map((item) => (
        <option key={item.type} onClick={onClick} value={item.value}>{item.type}</option>
      )) : 
        <option value={header}>{header}</option>
      }
    </optgroup>
  )
}
