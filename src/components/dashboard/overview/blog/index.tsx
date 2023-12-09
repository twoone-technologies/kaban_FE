import styles from './blog.module.css'
import { Link } from 'react-router-dom'
import { exLinkIcon } from '~/assets/icons'
import ItemInfo from '~/components/propertyItem/itemInfo/ItemInfo'
import Svg from '~/components/reusable/Svg'

export default function Blog() {
  return (
    <ItemInfo
          h1={'Realtors Blog'}
          className={`box_shadow f-width ${styles.wallet}`}
          children={
            <div className="flex f-width f-column gap-1">
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
              <div className="flex s-btw align-y gap-25">
                <div>
                  <h4>Blog title heading will go here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusantium maiores, beatae velit saepe architecto?
                  </p>
                </div>
                <div className={styles.linkSvg}>
                  <Svg href={exLinkIcon} />
                </div>
              </div>
            </div>
          }
          visit={
            <div className="flex pad-1 s-btw">
              <b></b>
              <Link className="flex bg-primary gap" to={''}>
                See all blogs <Svg href={exLinkIcon} />
              </Link>
            </div>
          }
        />
  )
}
