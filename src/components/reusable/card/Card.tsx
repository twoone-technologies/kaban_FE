import { heartIcon, bedIcon, showerIcon, toiletIcon, carIcon } from "~/assets"
import Svg from "../Svg"
import styles from "./card.module.css"

type Props = {
  apartmentImg: string,
  apartmentName: string,
  sale: string,
  featured: string,
  price: string,
  address: string,
  propertyType: string,
  bedNo: string,
  toiletNo: string,
  showerNo: string,
  carNo: string,
  agentImg: string,
  agentName: string,
  date: string 
}

export default function Card(
  { apartmentImg, apartmentName, sale, featured, price, address, propertyType,
  bedNo, toiletNo, showerNo, carNo, agentImg, agentName, date }: Props) {

  const setNums = (str:string) => {
    if (str === undefined || NaN || '') {
      return "..."
    }
    return parseInt(str).toLocaleString();
  }
  
  return (
    <div className={styles.card}>
      <div className={`flex f-column s-btw ${styles.above}`}>
        <img src={apartmentImg} alt={apartmentImg} className={styles.img} />
        <div className={`flex s-btw f-width`}>
          <span className={`b-radius stack c-pad ${styles.sale}`}>FOR {sale}</span>
          <span className={`b-radius stack c-pad ${styles.featured}`}>{featured}</span>
        </div>
        <div className={`flex s-btw f-width`}>
          <b className={`stack`}>₦{setNums(price)}</b><Svg className={`stack`} href={heartIcon} />
        </div>
      </div>
      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <div className={`flex f-column ${styles.header}`}>
          <h3>{apartmentName}</h3>
          <small>{address}</small>
        </div>
        <div className={`flex s-btw c-pad f-width ${styles.iconWrap}`}>
          <p>{propertyType}</p>
          <div className={`flex s-btw f-width ${styles.icons}`}>
            <div className="flex align-y">
              <Svg href={bedIcon} />
              <span>{bedNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={showerIcon} />
              <span>{showerNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={toiletIcon} />
              <span>{toiletNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={carIcon} />
              <span>{carNo}</span>
            </div>
          </div>
        </div>
        <div className={`flex s-btw f-width align-y ${styles.agent}`}>
          <div className="flex align-y">
            <div className={styles.agent_img_wrap}>
              <img src={agentImg} className={`${styles.agentImg}`} alt={agentName} />
            </div>
            <small>{agentName}</small>
          </div>
          <small className={`b-radius c-pad ${styles.date}`}>{date}</small>
        </div>
      </div>
    </div>
  )
}