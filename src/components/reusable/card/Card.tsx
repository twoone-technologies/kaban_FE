import { heartIcon, bedIcon, showerIcon, toiletIcon, carIcon } from "~/assets"
import Svg from "../Svg"
import styles from "./card.module.css"

type Props = {
  apartmentImg: string,
  apartmentName: string,
  status: string,
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

export default function Card(props: Props) {

  const setNums = (str:string) => {
    if (str === undefined || NaN || '') {
      return "..."
    }
    return parseInt(str).toLocaleString();
  }
  
  return (
    <div className={styles.card}>
      <div className={`flex f-column s-btw ${styles.above}`}>
        <img src={props.apartmentImg} alt={props.apartmentImg} className={styles.img} />
        <div className={`flex s-btw f-width`}>
          <span className={`b-radius stack c-pad ${styles.sale}`}>FOR {props.status}</span>
          <span className={`b-radius stack c-pad ${styles.featured}`}>{props.featured}</span>
        </div>
        <div className={`flex s-btw f-width`}>
          <b className={`stack`}>₦{setNums(props.price)}</b><Svg className={`stack`} href={heartIcon} />
        </div>
      </div>
      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <div className={`flex f-column ${styles.header}`}>
          <h3>{props.apartmentName}</h3>
          <small>{props.address}</small>
        </div>
        <div className={`flex s-btw c-pad f-width ${styles.iconWrap}`}>
          <p>{props.propertyType}</p>
          <div className={`flex s-btw f-width ${styles.icons}`}>
            <div className="flex align-y">
              <Svg href={bedIcon} />
              <span>{props.bedNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={showerIcon} />
              <span>{props.showerNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={toiletIcon} />
              <span>{props.toiletNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={carIcon} />
              <span>{props.carNo}</span>
            </div>
          </div>
        </div>
        <div className={`flex s-btw f-width align-y ${styles.agent}`}>
          <div className="flex align-y">
            <div className={styles.agent_img_wrap}>
              <img src={props.agentImg} className={`${styles.agentImg}`} alt={props.agentName} />
            </div>
            <small>{props.agentName}</small>
          </div>
          <small className={`b-radius c-pad ${styles.date}`}>{props.date}</small>
        </div>
      </div>
    </div>
  )
}