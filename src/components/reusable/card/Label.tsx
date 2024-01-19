import { dotIcon } from "~/assets/icons"
import styles from "./card.module.css"
import Svg from "../Svg"

export default function Label({ type }: { type: 'featured' | 'sale' | 'sent' | 'draft' | 'pending' | 'expiried' | 'published' | 'dissapproved'}) {
  return (
    <div className={`b-radius flex align-y c-pad ${styles[type]}`}>
      <Svg href={dotIcon} className={styles.label_svg}/>
      <span>{type !== 'featured' ? `for ${type}` : 'featured'}</span>
    </div>
  )
}