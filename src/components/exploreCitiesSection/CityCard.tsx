import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./exploreCities.module.css"

export default function CityCard({ city }: {
    city: { name: string, slogan: string, image: string }
}) {
    const navigate = useNavigate()
    const cardRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardRef.current?.style.setProperty('--background-img', `url(${city.image})`)
    }, [city.image])
    return (
        <div onClick={() => navigate(`/cities/${city.name.toLocaleLowerCase()}`)} className={style.city_card_container}>
            <div ref={cardRef} className={style.city_card}>
            </div>
            <div className={style.overlay}>
                <h3>{city.name}</h3>
                <p>{city.slogan}</p>
            </div>
        </div>
    )
}
