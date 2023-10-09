import './footerSection.css';
import Container from '../../../helpers/container/Container';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedin, FaGithub, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import BottomSearch from '../BottomSearch';
import Accordion from "react-bootstrap/Accordion";
import Logo from "../../../../assets/images/logo-footer.png";

/*======================================*/
/*======================================*/
/*======================================*/

const FooterSection = () => {
    return (
        <div className='footer-section'>
            <Container>
                <div className="footer-section-box">
                    <div className="left">
                        <img src={Logo} alt="" />
                        <p>Since 2013 we’ve been creating industrial design, residential architecture, commercial interiors. Chase mice attack feet but rub face on everything cepteur sint occaecat cupidatat proident.</p>

                        {/* in big screen show this */}
                        <div className="footer-content-show">
                            <h4>Follow Us</h4>
                            <ul className='ul-custom'>
                                <li><a href=""><FaInstagram /></a></li>
                                <li><a href=""><FaFacebookF /></a></li>
                                <li><a href=""><FaLinkedin /></a></li>
                                <li><a href=""><FaGithub /></a></li>
                            </ul>
                        </div>

                        {/* in mobile screen show this */}
                        <div className="footer-toggle">
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h4>Follow Us</h4></Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='ul-custom'>
                                            <li><a href=""><FaInstagram /></a></li>
                                            <li><a href=""><FaFacebookF /></a></li>
                                            <li><a href=""><FaLinkedin /></a></li>
                                            <li><a href=""><FaGithub /></a></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </div>
                    {/* end left */}
                    <div className="middle">
                        {/* in big screen show this */}
                        <div className="footer-content-show">
                            <h3>HERE TO HELP</h3>
                            <p>Have a question? You may find an answer in our FAQs. But you can also contact us:</p>
                            <div className="order-by-phone">
                                <a href="tel:+96170123456">
                                    <FaPhoneVolume />
                                </a>
                                <h5>Order by phone</h5>
                                <span>Available everyday</span>
                                <a href="tel:+96170123456">(+961) 70123456</a>
                            </div>
                            <div className="email-us">
                                <a href="mailto:nader.ghanawi78@gmail.com">
                                    <FaEnvelope />
                                </a>
                                <h5>Email Us</h5>
                                <span>Get in touch by email</span>
                                <a href="mailto:nader.ghanawi78@gmail.com">nader.ghanawi78@gmail.com</a>
                            </div>
                        </div>

                        {/* in mobile screen show this */}
                        <div className="footer-toggle">
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h3>HERE TO HELP</h3></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Have a question? You may find an answer in our FAQs. But you can also contact us:</p>
                                        <div className="order-by-phone">
                                            <a href="tel:+96170123456">
                                                <FaPhoneVolume />
                                            </a>
                                            <h5>Order by phone</h5>
                                            <span>Available everyday</span>
                                            <a href="tel:+96170123456">(+961) 70123456</a>
                                        </div>
                                        <div className="email-us">
                                            <a href="mailto:nader.ghanawi78@gmail.com">
                                                <FaEnvelope />
                                            </a>
                                            <h5>Email Us</h5>
                                            <span>Get in touch by email</span>
                                            <a href="mailto:nader.ghanawi78@gmail.com">nader.ghanawi78@gmail.com</a>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </div>
                    {/* end middle */}

                    <div className="right">
                        {/* in big screen show this */}
                        <div className="footer-content-show">
                            <h3>Customer Service</h3>
                            <ul className='ul-custom'>
                                <li><Link to="/contact" className='my_link'>Contact Us</Link></li>
                                <li><Link to="/faq" className='my_link'>FAQs</Link></li>
                            </ul>
                        </div>

                        {/* in mobile screen show this */}
                        <div className="footer-toggle">
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <h3>Customer Service</h3></Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='ul-custom'>
                                            <li><Link to="/contact" className='my_link'>Contact Us</Link></li>
                                            <li><Link to="/faq" className='my_link'>FAQs</Link></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </div>
                    {/* end right */}
                </div>
                {/* end footer-section-box */}
            </Container>
            <div className="footer-copyright">
                <p>&copy; Copyright 2023 Comfy Store. All Rights Reserved.</p>
            </div>
            {/* this is the bottom search menu that will display on screen less than 991px */}
            <BottomSearch />
        </div>
    )
}

export default FooterSection;