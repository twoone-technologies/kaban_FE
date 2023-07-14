import { useEffect, useRef } from 'react'
import style from "./exploreCities.module.css"

export default function CityCard({ city }: {
    city: { name: string, slogan: string, image: string }
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardRef.current?.style.setProperty('--background-img', `url(${city.image})`)
    }, [])
    return (
        <div className={style.city_card_container}>
            <div ref={cardRef} className={style.city_card}>
            </div>
            <div className={style.overlay}>
                <h3>{city.name}</h3>
                <p>{city.slogan}</p>
            </div>
        </div>
    )
}
