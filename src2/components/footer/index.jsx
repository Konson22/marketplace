import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './css/footer.css'


export default function Footer(){
    return(
        <footer>
            <div className="footer-wraper">
                <div className="footer-top">
                    <div className="subcribe-container">
                        <h3>Subcribe</h3>
                        <div className="subcribe-form d-flex mb-2">
                            <input type="email" />
                            <button className='button text-white'>Subcribe</button>
                        </div>
                        <p>At the Mission Store, you can find quality products at affordable prices, even on a limited budget.</p>
                    </div>
                    <div className="socila-media-container text-center">
                        <h3>Follow us on socila media</h3>
                        <div className="d-flex justify-content-center">
                            <span className='social-media-icon-wraper rounded-circle d-flex align-items-center justify-content-center'>
                                <FaTwitter className='icon' />
                            </span>
                            <span className='social-media-icon-wraper rounded-circle d-flex align-items-center justify-content-center'>
                                <FaInstagram className='icon' />
                            </span>
                            <span className='social-media-icon-wraper rounded-circle d-flex align-items-center justify-content-center'>
                                <FaFacebook className='icon' />
                            </span>
                            <span className='social-media-icon-wraper rounded-circle d-flex align-items-center justify-content-center'>
                                <FaInstagram className='icon' />
                            </span>
                            <span className='social-media-icon-wraper rounded-circle d-flex align-items-center justify-content-center'>
                                <FaTwitter className='icon' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-content">
                        <h5>Services</h5>
                        <ul>
                            <li>About us</li>
                            <li>Contacts</li>
                            <li>Privacy</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <h5>Services</h5>
                        <ul>
                            <li>About us</li>
                            <li>Contacts</li>
                            <li>Privacy</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <h5>Policy & Privacy</h5>
                        <ul>
                            <li>Our Policy </li>
                            <li>Our Privacy</li>
                            <li>How to sale</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <h5>Adress& Contacts</h5>
                        <ul>
                            <li><FaMapMarkerAlt /> Juba, neat test shop</li>
                            <li><FaPhoneAlt /> +21192-0079070</li>
                            <li><FaWhatsapp /> +211-920079070</li>
                            <li><FiMail /> info@buy24.com</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-1">
                    &copy;Copy right reserved for 2023.
                </div>
            </div>
        </footer>
    )
}