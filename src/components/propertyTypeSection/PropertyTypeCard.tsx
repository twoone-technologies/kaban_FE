import style from "./property.module.css"
import { useEffect, useRef } from 'react'

export default function PropertyTypeCard({ data }: {
    data: { name: string, type: string[], image: string }
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardRef.current?.style.setProperty('--background-img', `url(${data.image})`)
    }, [])

    // const dotRef = useRef<HTMLDivElement>(null)
    // useEffect(() => {
    //     dotRef.current?.style.setProperty('list-style-image', `url(~/src/assets/img/ellipse.svg)`)
    // }, [])
    return (
        <div className={style.card_container}>
            <div ref={cardRef} className={style.property_card}>
            </div>
            <div className={style.sm_card}>
                <h3>{data.name}</h3>
                <div className={style.sm_card_info}>
                    {data.type.map((dataTypeItem) => (
                        <li>{dataTypeItem}</li>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}