import './brandSlider.css';
import Container from '../../../helpers/container/Container';
import '../../../helpers/slickSliderStyle.css';
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { brandSliderImg } from "../../../../config/brandSliderImg";
import SingleBrandSlider from '../SingleBrandSlider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*======================================*/
/*======================================*/
/*======================================*/

const BrandSlider = () => {

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1700,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <LiaAngleRightSolid /> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <LiaAngleLeftSolid /> </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };

    return (
        <div className='brands-slider'>
            <Container>
                <div className="brands-slider-box">
                    <Slider {...settings}>
                        {brandSliderImg.map((d) => (<SingleBrandSlider data={d} key={d.imgId} />))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default BrandSlider;