import style from "./property.module.css"

export default function PropertyTypeCard() {
    return (
        <div className={`${style.card_container}`} id="card1">
            <div className={`flex ${style.property_card}`}>
                <div className={style.sm_card}>
                    <h3>COMMERCIAL</h3>
                    <div className={style.sm_card_info}>
                        <p>Land</p>
                        <p>Office</p>
                        <p>Mall</p>
                        <p>Gas Station</p>
                        <p>School</p>
                    </div>
                </div>
            </div>
            <div className={`flex ${style.property_card}`}>
                <div className={style.sm_card}>
                    <h3>INDUSTRIAL</h3>
                    <div className={style.sm_card_info}>
                        <p>Factory</p>
                        <p>Oil</p>
                        <p>Rig</p>
                        <p>PowerPlant</p>
                        <p>Warehouse</p>
                    </div>
                </div>
            </div>
            <div className={`flex ${style.property_card}`}>
                <div className={style.sm_card}>
                    <h3>RESIDENTIAL</h3>
                    <div className={style.sm_card_info}>
                        <p>Self Contain</p>
                        <p> Apartment</p>
                        <p>Detached House</p>
                        <p>Treace House</p>
                        <p>Semi-Detached House</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


