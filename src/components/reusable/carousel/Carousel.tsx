import Card from "../card/Card"
import { dummyObj } from "../dummyObj"
import styles from "./carousel.module.css"



export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.inner}>
        {dummyObj.map((item, id) => (
          <Card key={id}
            apartmentImg={item.apartmentImg}
            apartmentName={item.apartmentName}
            status={item.status}
            featured={item.featured}
            price={item.price}
            address={item.address}
            propertyType={item.propertyType}
            bedNo={item.bedNo}
            toiletNo={item.toiletNo}
            showerNo={item.showerNo}
            carNo={item.carNo}
            agentImg={item.agentImg}
            agentName={item.agentName}
            date={item.date} />
        ))}
      </div>
    </div>
  )
}
