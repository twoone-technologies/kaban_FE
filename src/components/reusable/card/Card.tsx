import { heartIcon, bedIcon, showerIcon, toiletIcon, carIcon, IkonIcon } from "~/assets"
import Svg from "../Svg"
import styles from "./card.module.css"

type HouseCard = {
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

export default function Card({ card }: { card: HouseCard }) {

  const setNums = (str: string) => {
    if (str === undefined || NaN || '') {
      return "..."
    }
    return parseInt(str).toLocaleString();
  }

  return (
    <div className={`b-radius ${styles.card}`}>
      <div className={`flex f-column s-btw ${styles.above}`}>
        <img src={card.apartmentImg} alt={card.apartmentImg} className={styles.img} />
        <div className={`flex s-btw f-width`}>
          <span className={`b-radius stack c-pad ${styles.sale}`}>FOR {card.status}</span>
          <span className={`b-radius stack c-pad ${styles.featured}`}>{card.featured}</span>
        </div>
        <div className={`flex s-btw f-width`}>
          <b className={`stack`}>₦{setNums(card.price)}</b><Svg className={`stack`} href={heartIcon} />
        </div>
      </div>
      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <div className={`flex f-column ${styles.header}`}>
          <h3>{card.apartmentName}</h3>
          <small>{card.address}</small>
        </div>
        <div className={`flex s-btw c-pad f-width ${styles.iconWrap}`}>
          <p>{card.propertyType}</p>
          <div className={`flex s-btw f-width ${styles.icons}`}>
            <div className="flex align-y">
              <Svg href={bedIcon} />
              <span>{card.bedNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={showerIcon} />
              <span>{card.showerNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={toiletIcon} />
              <span>{card.toiletNo}</span>
            </div>
            <div className="flex align-y">
              <Svg href={carIcon} />
              <span>{card.carNo}</span>
            </div>
          </div>
        </div>
        <div className={`flex s-btw f-width align-y ${styles.agent}`}>
          <div className="flex align-y">
            <div className={styles.agent_img_wrap}>
              <img src={IkonIcon} className={styles.agent_img}
                alt={card.agentName} />
            </div>
            <small>{card.agentName}</small>
          </div>
          <small className={`b-radius c-pad ${styles.date}`}>{card.date}</small>
        </div>
      </div>
    </div>
  )
}