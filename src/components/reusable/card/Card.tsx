import { useState } from "react";
import { heartIcon, bedIcon, showerIcon, carIcon, IkonIcon, locationIcon, cameraIcon, dotIcon } from "~/assets"
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
  photoNo: string,
  bedNo: string,
  toiletNo: string,
  showerNo: string,
  carNo: string,
  agentImg: string,
  agentName: string,
  date: string
}

export default function Card({ card }: { card: HouseCard }) {
  const [hover, setHover] = useState(false)

  const onHoverHandler = () => {
    setHover(!hover);
  }

  const setNums = (str: string) => {
    if (str === undefined || NaN || '') {
      return "..."
    }
    return parseInt(str).toLocaleString();
  }

  return (
    <div  onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler} className={`b-radius ${styles.card}`}>
      <div
        className={`flex f-column s-btw ${styles.above}`}>
        <div className={`f-width ${styles.overlay} ${hover ? styles.nil : ''}`}></div>
        <img src={card.apartmentImg} alt={card.apartmentImg}
        className={`${styles.img} ${hover ? styles.scale : ''}`}  />
        <div className={`flex s-btw f-width`}>
          <small className={`b-radius stack c-pad ${styles.date}`}>{card.date}</small>
          <Svg className={`stack`} href={heartIcon} />
        </div>
        <div className='flex stack align-y'>
          <Svg href={cameraIcon} />
          <span>{card.photoNo}</span>
        </div>
      </div>
      <div className={`flex f-column c_pad s-btw ${styles.below}`}>
        <div className={`flex f-column ${styles.header}`}>
          <p>{card.propertyType}</p>
          <div className="flex s-btw">
            <h3>₦{setNums(card.price)}</h3>
            <div className={`flex gap ${styles.status_grp}`}>
              <div className={`b-radius flex align-y c-pad ${styles.featured}`}>
                <Svg href={dotIcon} />
                <span>{card.featured}</span>
              </div>
              <div className={`b-radius flex align-y c-pad ${styles.status}`}>
                <Svg href={dotIcon} />
                <span>FOR {card.status}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex f-column s-btw gap ${styles.iconWrap}`}>
          <b className="c-grey">{card.apartmentName}</b>
          <div className="flex c-grey">
            <Svg width_2="1.2rem" width="1.2rem" className="locate" href={locationIcon} />
            <small>{card.address}</small>
          </div>
          <div className={`flex f-width ${styles.icons}`}>
            <div className="flex align-y">
              <Svg href={bedIcon} />
              <span>{card.bedNo} bed</span>
            </div>
            <div className="flex align-y">
              <Svg href={showerIcon} />
              <span>{card.showerNo} bath</span>
            </div>
            <div className="flex align-y">
              <Svg href={carIcon} />
              <span>{card.carNo} parking spots</span>
            </div>
          </div>
        </div>
        <div className={`flex s-btw f-width align-y b-radius c-pad bg-grey ${styles.agent}`}>
          <div className="flex align-y">
            <div className={styles.agent_img_wrap}>
              <img src={IkonIcon} className={styles.agent_img}
                alt={card.agentName} />
            </div>
            <small>{card.agentName}</small>
          </div>
        </div>
      </div>
    </div>
  )
}