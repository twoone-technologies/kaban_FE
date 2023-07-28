import { Link } from 'react-router-dom';

import Container from '../reusable/Container'
import { logoIcon, facebookIcon, twitterIcon, instagramIcon, linkedinIcon } from '~/assets';
import Svg from '../reusable/Svg';

function Footer() {
    const dateYear = new Date().getFullYear();
    return (
        <footer>
            <Container element="div">
                <div className="flex">
                    <div>
                        <Link to="/">
                            <Svg href={logoIcon} width='100px' height='40px' className='bg-primary' />
                        </Link>
                        <p>To our esteem users who seek to rent or invest in the real estate,
                            Kaban is here to help you ease the stress of finding a property that
                            meets your satisfaction by bringing the best deals available to your screen.
                        </p>
                        <div className="socials-icons">
                            <Link to="https://facebook.com/kaban-ng">
                                <Svg href={facebookIcon} />
                            </Link>
                            <Link to="https://twitter.com/kaban-ng">
                                <Svg href={twitterIcon} />
                            </Link>
                            <Link to="https://instagram.com/kaban-ng">
                                <Svg href={instagramIcon} />
                            </Link>
                            <Link to="https://linkedin.com/kaban-ng">
                                <Svg href={linkedinIcon} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>COntact Us</p>
                        <p>FAQs</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <h3>Property</h3>
                        <p>Residential</p>
                        <p>Commercial</p>
                        <p>Industrial</p>
                    </div>
                    <div>
                        <h3>Realtors</h3>
                        <p>Agents</p>
                        <p>Agencies</p>
                    </div>
                    <div>
                        <h3>Contacts</h3>
                        <Link to="tel:2349163939777">+234 916 393-9777</Link>
                        <p>Uyo, Akwa Ibom State</p>
                        <Link to="mailto:info@kaban.ng">info@kaban.ng</Link>
                    </div>
                </div>
                <hr />
                <div>
                    <p>&copy; {dateYear} Kaban.ng. All rights reserved</p>
                    <div>
                        <p>Terms of Service</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
