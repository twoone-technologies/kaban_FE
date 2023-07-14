import { arrowLeftIcon, arrowRightIcon, indicatorIcon } from "~/assets"
import styles from "./carousel.module.css"
import Svg from "../Svg"
import { useRef, useState } from "react"
import Card from "../card/Card"

type Props = object & React.ComponentProps<'div'>

export default function Carousel({ children }: Props) {
  const [id, setId] = useState(0);
  const carRef = useRef<HTMLDivElement>(null)
  console.log(children);
  const onSlideHandler = () => {
    // nextId < 0 ? nextId = 0 :
    // nextId >= children.length ? 
    // nextId = children.length - 1: '';
    //setId(window.scrollX + 40)
    // setId(nextId)

  }
  {console.log(carRef)}
  return (
    <div className={`flex ${styles.carousel}`}>
      {children}
      <div className={`flex gap s-btw align-y ${styles.btn_grp}`}>
        <div className="flex gap">
          <Svg href={arrowLeftIcon} />
          <Svg href={arrowRightIcon} />
        </div>
        <div className="flex gap">
          {children?.map((item, id) => {
            return <Svg key={id} href={indicatorIcon} />
          })}
        </div>
      </div>
    </div>
  )
}
