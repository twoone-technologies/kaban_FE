import { Link } from 'react-router-dom';

import Container from '../reusable/Container'
import { logoIcon, facebookIcon, twitterIcon, instagramIcon, linkedinIcon } from '~/assets';
import Svg from '../reusable/Svg';
import styles from './footer.module.css';

function Footer() {
    const dateYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <Container element="div">
                <div className={`flex ${styles.footer_top}`}>
                    <div className={styles.sm_container}>
                        <Link to="/">
                            <Svg className={styles.footer_logo} href={logoIcon} />
                        </Link>
                        <p className={styles.footer_link}>To our esteem users who seek to rent or invest in the real estate,
                            Kaban is here to help you ease the stress of finding a property that
                            meets your satisfaction by bringing the best deals available to your screen.
                        </p>
                        <div className={`flex ${styles.icons_container}`}>
                                <Link to="https://facebook.com/kaban-ng" target='_blank'>
                                    <Svg href={facebookIcon} className={styles.socials_icon} />
                                </Link>
                            <Link to="https://twitter.com/kaban-ng" target='_blank'>
                                <Svg href={twitterIcon} className={styles.socials_icon} />
                            </Link>
                            <Link to="https://instagram.com/kaban-ng" target='_blank'>
                                <Svg href={instagramIcon} className={styles.socials_icon} />
                            </Link>
                            <Link to="https://linkedin.com/kaban-ng" target='_blank'>
                                <Svg href={linkedinIcon} className={styles.socials_icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`flex ${styles.link_container}`}>
                        <div className={`flex ${styles.mt_1}`}>
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <Link className={styles.footer_link} to="/company/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link className={styles.footer_link} to="/company/contact-us">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className={styles.footer_link} to="/company/FAQs">FAQs</Link>
                                </li>
                                <li>
                                    <Link className={styles.footer_link} to="/company/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`flex ${styles.mt_1}`}>
                            <h4>Property</h4>
                            <ul>
                                <li>
                                    <Link className={styles.footer_link} to="/property/residential">Residential</Link>
                                </li>
                                <li>
                                    <Link className={styles.footer_link} to="/property/commercial">Commercial</Link>
                                </li>
                                <li>
                                    <Link className={styles.footer_link} to="/property/industrial">Industrial</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`flex ${styles.mt_1}`}>
                            <h4>Realtors</h4>
                            <ul>
                                <li>
                                    <Link className={styles.footer_link} to="/realtors/agents">Agents</Link>
                                </li>
                                <li>
                                    <Link className={styles.footer_link} to="/realtors/agencies">Agencies</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`flex ${styles.mt_1}`}>
                            <h4>Contacts</h4>
                            <ul>
                                <li>
                                    <Link className={styles.footer_link} to="tel:2349163939777">+234 916 393-9777</Link>
                                </li>
                                <li className={styles.footer_link}>Uyo, Akwa Ibom State</li>
                                <li>
                                    <Link className={styles.footer_link} to="mailto:info@kaban.ng">info@kaban.ng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={`flex ${styles.footer_bottom}`}>
                    <p>&copy; {dateYear} Kaban.ng. All rights reserved</p>
                    <div>
                        <ul className='flex'>
                            <li>
                                <Link className={styles.footer_link} to="/terms-of-service">Terms of Service</Link>
                            </li>
                            <li>
                                <Link className={styles.footer_link} to="/privacy-policy">Privacy policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
