import './slider.css';
import { Link } from 'react-router-dom';
import { LiaArrowRightSolid } from "react-icons/lia";
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../../../../assets/images/slider/slide1.jpg";
import Slide2 from "../../../../assets/images/slider/slide2.jpg";
import Slide3 from "../../../../assets/images/slider/slide3.jpg";

/*======================================*/
/*======================================*/
/*======================================*/

const Slider = () => {
    return (
        <div className='main-slider'>
            <Carousel fade data-bs-interval="50">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <span className="up-to-sale">up to 50% off</span>
                        <h1>Outdoor Wicker Hanging Chair</h1>
                        <Link to="/shop">explore now <LiaArrowRightSolid /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <span className="up-to-sale">up to 50% off</span>
                        <h1>Ray Pendant Lamp Choose Your Comfort</h1>
                        <Link to="/shop">explore now <LiaArrowRightSolid /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <span className="up-to-sale">up to 10% off</span>
                        <h1>Nano Tube Suspension Pendant Lamp</h1>
                        <Link to="/shop">explore now <LiaArrowRightSolid /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;