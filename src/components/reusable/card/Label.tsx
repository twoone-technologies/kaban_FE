import { dotIcon } from "~/assets/icons"
import styles from "./card.module.css"
import Svg from "../Svg"

export default function Label({ type, text }: { type: 'featured' | 'status', text: string }) {
  return (
    <div className={`b-radius flex align-y c-pad ${styles[type]}`}>
      <Svg href={dotIcon} />
      <span>{text}</span>
    </div>
  )
}