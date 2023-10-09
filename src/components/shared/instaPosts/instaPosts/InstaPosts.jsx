import './instaPosts.css';
import Container from '../../../helpers/container/Container';
import '../../../helpers/slickSliderStyle.css';
import { Link } from 'react-router-dom';
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { instaPostsImgs } from "../../../../config/instaPostsImgs"
import InstaSingleImg from '../InstaSingleImg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*======================================*/
/*======================================*/
/*======================================*/

const InstaPosts = () => {

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
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className='insta-posts'>
            <Container>
                <div className="insta-posts-box">
                    <h2>@Comfy! Follow Us On Instagram</h2>
                    <Slider {...settings}>
                        {instaPostsImgs.map((d) =>
                            (<Link to=""><InstaSingleImg data={d} key={d.instaPostId} /></Link>)
                        )}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default InstaPosts;