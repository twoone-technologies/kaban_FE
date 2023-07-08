import styles from "./carousel.module.css"

type Props = object & React.ComponentProps<'div'>

export default function Carousel({ children }:Props) {
  return (
    <div className={styles.carousel}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}
