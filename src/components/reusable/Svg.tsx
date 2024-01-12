type Props = {
  className?: string,
  width?: string,
  height?: string,
  width_2?: string,
  href?: string,
  onClick?: () => void,
}

export default function Svg ({className, width='1.5em', height='1.5em', width_2='100%', href, onClick}: Props) {
  return (
    <svg onClick={onClick}
      className={className} 
      width={width}
      height={height}>
      <use width={width_2} href={href}></use>
    </svg>
  )
}
