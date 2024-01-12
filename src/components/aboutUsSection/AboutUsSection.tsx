import { aboutUsImg, smilingCoupleImg } from '~/assets/img'
import Container from '../reusable/Container'
import styles from './aboutUsSection.module.css'
import { useEffect, useRef } from 'react'
import Svg from '../reusable/Svg'
import { grommetIcon, transparencyIcon, userIcon } from '~/assets/icons'
import Headline from './Headline'

export default function AboutUsSection() {
  const visionImgBgRef = useRef<HTMLDivElement>(null)
  const missionImgBgRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    visionImgBgRef.current?.style.setProperty('--background-img', `url(${aboutUsImg})`)
    missionImgBgRef.current?.style.setProperty('--background-img', `url(${smilingCoupleImg})`)
  }, [aboutUsImg])
  return (
    <Container element="div">
      <section className={`f-column align-center mt-4 gap-1 ${styles.about_section}`}>
        <div className={styles.title_container}>
          <h1 className='center-text padd-inline-1 fw-400'>Every Property Tells a Unique Story.</h1>
          <p className='center-text pad-inline-1'>We are committed to streamlining your property search, offering a diverse range of property options, and ensuring a stress-free experience to enhance your satisfaction.</p>
        </div>
        <div className={`${styles.flex} align-center mt-4`}>
          <div ref={visionImgBgRef} className={styles.img_container}>
          </div>
          <div className={`f-column align-center gap-05 ${styles.content_container}`}>
            <h3>Our Vision</h3>
            <p className='pad-inline-1 fw-400'>To make real estate accessible and stress-free, ensuring that finding a comfortable property is no longer a luxury but a reality for everyone.</p>
          </div>
        </div>

        <div className={`flex align-center mt-4 ${styles.flex} ${styles.reverse_column}`}>
          <div className={`f-column align-center gap-05 ${styles.content_container}`}>
            <h3>Our Mission</h3>
            <p className='pad-inline-1 fw-400'>To streamline the process of discovering, acquiring, and marketing real estate properties, ensuring a hassle-free journey towards your real estate goals.</p>
          </div>
          <div ref={missionImgBgRef} className={styles.img_container}>
          </div>
        </div>

        <div className={`f-column align-center mt-4 ${styles.value_container}`}>
          <div className={`f-column align-center ${styles.value_content}`}>
            <h3 className='center-text'>Our Values</h3>
            <p className='center-text mb-4 pad-inline-1 fw-400'>At our core, we hold three values dear: User-Centricity, Innovation, and Transparency. These values are not just words; they are the compass that directs our actions and decisions. They define how we collaborate, engage with our community, and set our aspiration</p>
          </div>
          <div className={`flex gap-3 ${styles.sub_div}`}>
            <div className="f-column align-center gap-1">
              <Svg href={userIcon} width='3rem' height='3rem' />
              <h4>User-Centricity</h4>
              <p className='center-text pad-inline-1'>We place you at the centre of our strategy, operations, and culture, recognizing that by meeting and exceeding you expectations, we can achieve sustainable success and growth.</p>
            </div>
            <div className="f-column align-center gap-1">
              <Svg href={grommetIcon} width='3rem' height='3rem' />
              <h4>Innovation</h4>
              <p className='center-text pad-inline-1'>We are commitment to fostering creativity, embracing change, and continuously seeking fresh, inventive solutions to meet your evolving  needs and stay at the forefront of industry advancements.</p>
            </div>
            <div className="f-column align-center gap-1">
              <Svg href={transparencyIcon} width='3rem' height='3rem' />
              <h4>User-Centricity</h4>
              <p className='center-text pad-inline-1'>We place you at the centre of our strategy, operations, and culture, recognizing that by meeting and exceeding you expectations, we can achieve sustainable success and growth.</p>
            </div>
          </div>
        </div>
        <Headline />
      </section>
    </Container>
  )
}
