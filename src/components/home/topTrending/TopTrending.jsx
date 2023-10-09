import './topTrending.css';
import Container from '../../helpers/container/Container';
import '../../helpers/slickSliderStyle.css';
import { AllProductsItems } from "../../../config/data";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import SingleProductUi from '../../../components/shared/SingleProductUi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*======================================*/
/*======================================*/
/*======================================*/

const TopTrending = () => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className='top-trending'>
            <Container>
                <h3>Top Trending</h3>
                <div className="top-trending-slider">
                    <Slider {...settings}>
                        {AllProductsItems.map((data) => (
                            // just draw the single post ui 
                            <SingleProductUi data={data} key={data.pId} />
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default TopTrending;