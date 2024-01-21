import { dotIcon } from "~/assets/icons"
import styles from "./card.module.css"
import Svg from "../Svg"

export default function Label({ type }: { type: 'featured' | 'sale' | 'rent' | 'pending' | 'expiried' | 'published' | 'disapproved'| 'draft' | 'pending' | 'expired' | 'published' | 'disapproved'}) {
  return (
    <div className={`b-radius flex align-y c-pad ${styles[type]}`}>
      <Svg href={dotIcon} className={styles.label_svg}/>
      <span>{type === 'rent' || type === 'sale' ? `for ${type}` : type}</span>
    </div>
  )
}