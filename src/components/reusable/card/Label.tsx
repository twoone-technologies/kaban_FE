import { dotIcon } from "~/assets/icons"
import styles from "./card.module.css"
import Svg from "../Svg"

type GoodStat = 'featured' | 'sale' | 'rent' ;
type EnlistStat = 'pending' |'published' |  'draft';
type ErrorStat =  'expired' | 'disapproved';

export default function Label({ type }: { type: GoodStat | EnlistStat | ErrorStat}) {
  return (
    <div className={`b-radius flex align-y c-pad ${styles[type]}`}>
      <Svg href={dotIcon} className={styles.label_svg}/>
      <span>{type === 'rent' || type === 'sale' ? `for ${type}` : type}</span>
    </div>
  )
}