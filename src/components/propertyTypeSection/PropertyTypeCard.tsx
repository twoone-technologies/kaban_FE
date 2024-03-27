import { Link } from "react-router-dom"
import style from "./property.module.css"
import { useEffect, useRef } from 'react'

export default function PropertyTypeCard({ data }: {
    data: { name: string, type: string[], image: string, link: string }
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardRef.current?.style.setProperty('--background-img', `url(${data.image})`)
    }, [data.image])
    return (
        <Link to={data.link} className={`relative ${style.card_container}`}>
            <div ref={cardRef} className={style.property_card}></div>
            <div className={`absolute w-5/6 p-3 ${style.sm_card}`}>
                <p className="font-semibold">{data?.name.toUpperCase()}</p>
                <div className="flex gap-[2p] flex-wrap whitespace-nowrap font-normal bottom-10">
                    {data.type.map((dataTypeItem, id) => (
                        <p key={id} className="font-extralight">•{dataTypeItem}</p>
                    )
                    )}
                </div>
            </div>
        </Link>
    )
}