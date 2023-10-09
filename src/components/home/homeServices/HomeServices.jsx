import './homeServices.css';
import Container from '../../helpers/container/Container';
import { FaCube, FaRegCreditCard, FaArrowsRotate } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const HomeServices = () => {
    return (
        <div className='home-services'>
            <Container>
                <div className="home-services-box">
                    <div className="home-service-single">
                        <FaCube />
                        <h5>Free Worldwide Shipping</h5>
                        <p>On all orders over $75.00</p>
                    </div>
                    <div className="home-service-single">
                        <FaRegCreditCard />
                        <h5>100% Payment Secure</h5>
                        <p>We ensure secure payment with PEV</p>
                    </div>
                    <div className="home-service-single">
                        <FaArrowsRotate />
                        <h5>30 Days Return</h5>
                        <p>Return it within 20 day for an exchange</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeServices;