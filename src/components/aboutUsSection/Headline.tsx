import styles from './aboutUsSection.module.css'
import { blankPic } from '~/assets/img'

export default function Headline() {
    return (
        <div className={`mt-2 ${styles.blog_container}`}>
            <h3 className='center-text'>Headlines from our blog</h3>
            <div className={`flex align-center space-between pad-block-1 ${styles.blogPost_container}`}>
                <div className={styles.blogImg_container}>
                    <img src={blankPic} alt="Blog post image" />
                </div>
                <div>
                    <p className='fw-500'>Full Name</p>
                    <p className={styles.small_text}>11 Jan 2023 • <span>5 min read</span></p>
                </div>
                <div>
                    <p className='fw-500'>Category</p>
                    <p className='fw-600'>Blog title goes here</p>
                </div>
            </div>
        </div>
    )
}
